import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { HERO_MAX_HEIGHT, HERO_MAX_WIDTH, HERO_MESSAGES, heroGlyphRows, type HeroMessage } from '../data/heroArt'
import { REDUCED_MOTION_QUERY, useMediaQuery } from '../hooks/useMediaQuery'

const TYPING_DURATION_MS = 3000
const HOLD_DURATION_MS = 8000
const ERASING_DURATION_MS = 1500
const CURSOR_WIDTH = 2
// Every row is this wide for every message, so the line never changes length as the cursor and messages move.
const LINE_WIDTH = HERO_MAX_WIDTH + CURSOR_WIDTH
const BLANK_ROW = ' '.repeat(LINE_WIDTH)

type Phase = 'typing' | 'holding' | 'erasing'

// Each message's rows padded out to the same height and width as the largest, so rotating never moves the page.
const PADDED_ROWS: string[][] = HERO_MESSAGES.map((message) =>
  Array.from({ length: HERO_MAX_HEIGHT }, (_, i) => (message.rows[i] ?? '').padEnd(LINE_WIDTH)),
)

// Column the cursor rests at after each keystroke: the end of a letter, plus any blank glyphs right after it
// (those are passed over instantly rather than typed).
function restColumns(message: HeroMessage): number[] {
  const blank = heroGlyphRows(message).map((glyph) => glyph.every((line) => line.trim() === ''))
  const rests: number[] = []
  message.glyphColumns.forEach(([, end], i) => {
    if (blank[i]) rests[rests.length - 1] = end
    else rests.push(end)
  })
  return rests
}
const REST_COLUMNS: number[][] = HERO_MESSAGES.map(restColumns)

// Time at which each letter appears: jittered (0.5x to 1.5x) so the typing feels human, scaled to end exactly on time.
function typingSchedule(letters: number): number[] {
  const gaps = Array.from({ length: letters }, () => 0.5 + Math.random())
  const scale = TYPING_DURATION_MS / gaps.reduce((sum, gap) => sum + gap, 0)
  let at = 0
  return gaps.map((gap) => (at += gap * scale))
}

// Backspacing is quick and steady: one letter every equal step.
const erasingSchedule = (letters: number): number[] =>
  Array.from({ length: letters }, (_, i) => ((i + 1) * ERASING_DURATION_MS) / letters)

const PHASE_DURATION: Record<Phase, number> = {
  typing: TYPING_DURATION_MS,
  holding: HOLD_DURATION_MS,
  erasing: ERASING_DURATION_MS,
}

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener('visibilitychange', onChange)
  return () => document.removeEventListener('visibilitychange', onChange)
}
const isTabVisible = () => document.visibilityState !== 'hidden'

export default function HeroBanner({ className }: { className?: string }) {
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const visible = useSyncExternalStore(subscribeToVisibility, isTabVisible, () => true)
  const [index, setIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('typing')
  const [lettersShown, setLettersShown] = useState(0)
  // Time already spent in the current phase, kept across pauses (hidden tab) so it resumes where it left off.
  const elapsedInPhase = useRef(0)

  const rests = REST_COLUMNS[index]
  const typing = useMemo(() => typingSchedule(rests.length), [rests])

  useEffect(() => {
    if (reducedMotion || !visible) return
    const resumedAt = Date.now()
    const alreadyElapsed = elapsedInPhase.current
    let finished = false
    let frameId = 0
    let timeoutId = 0

    const finish = () => {
      finished = true
      elapsedInPhase.current = 0
      if (phase === 'typing') {
        setLettersShown(rests.length)
        setPhase('holding')
      } else if (phase === 'holding') {
        setPhase('erasing')
      } else {
        setLettersShown(0)
        setIndex((i) => (i + 1) % HERO_MESSAGES.length)
        setPhase('typing')
      }
    }

    if (phase === 'holding') {
      timeoutId = window.setTimeout(finish, HOLD_DURATION_MS - alreadyElapsed)
    } else {
      // Progress follows elapsed time, so a slow frame catches up instead of stretching the total duration.
      const schedule = phase === 'typing' ? typing : erasingSchedule(rests.length)
      const tick = () => {
        const elapsed = alreadyElapsed + (Date.now() - resumedAt)
        let count = 0
        while (count < schedule.length && schedule[count] <= elapsed) count++
        if (count >= schedule.length) return finish()
        setLettersShown(phase === 'typing' ? count : rests.length - count)
        frameId = requestAnimationFrame(tick)
      }
      frameId = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(frameId)
      clearTimeout(timeoutId)
      if (!finished) elapsedInPhase.current = Math.min(alreadyElapsed + (Date.now() - resumedAt), PHASE_DURATION[phase])
    }
  }, [reducedMotion, visible, phase, rests, typing])

  const messageIndex = reducedMotion ? 0 : index
  const staticRows = reducedMotion
  const column = staticRows
    ? HERO_MESSAGES[0].rows[0].length
    : lettersShown === 0
      ? 0
      : REST_COLUMNS[messageIndex][Math.min(lettersShown, REST_COLUMNS[messageIndex].length) - 1]
  const blinking = reducedMotion || phase === 'holding'

  // Each row is typed text, a block cursor, then the not-yet-typed rest kept invisible so layout never shifts.
  // The font size follows the column width (cqw) so the widest message always fits without a horizontal scrollbar.
  const rows = PADDED_ROWS[messageIndex] ?? Array(HERO_MAX_HEIGHT).fill(BLANK_ROW)
  const fontSize = `min(10px, calc(100cqw / ${Math.round(HERO_MAX_WIDTH * 0.65)}))`
  return (
    <div className={[className, '@container'].filter(Boolean).join(' ')}>
      <pre aria-hidden="true" className="leading-[1.2] text-banner" style={{ fontSize }}>
        {rows.map((row, i) => (
          <span key={i} className="block">
            <span data-testid="typed">{row.slice(0, column)}</span>
            <span
              data-testid="cursor"
              className={`inline-block h-[1.2em] bg-banner align-top text-transparent${blinking ? ' cursor-blink' : ''}`}
            >
              {row.slice(column, column + CURSOR_WIDTH).padEnd(CURSOR_WIDTH, ' ')}
            </span>
            <span className="invisible">{row.slice(column + CURSOR_WIDTH)}</span>
          </span>
        ))}
      </pre>
    </div>
  )
}
