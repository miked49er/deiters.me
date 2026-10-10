import { useEffect, useState, useSyncExternalStore } from 'react'
import { HERO_MAX_HEIGHT, HERO_MAX_WIDTH, HERO_MESSAGES, heroGlyphRows, type HeroMessage } from '../data/heroArt'
import { createTimeline, type Timeline } from '../lib/heroTimeline'
import { REDUCED_MOTION_QUERY, useMediaQuery } from '../hooks/useMediaQuery'

const CURSOR_WIDTH = 2
// Every row is this wide for every message, so the line never changes length as the cursor and messages move.
const LINE_WIDTH = HERO_MAX_WIDTH + CURSOR_WIDTH
const BLANK_ROW = ' '.repeat(LINE_WIDTH)

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

function subscribeToVisibility(onChange: () => void) {
  document.addEventListener('visibilitychange', onChange)
  return () => document.removeEventListener('visibilitychange', onChange)
}
const isTabVisible = () => document.visibilityState !== 'hidden'

export default function HeroBanner({ className }: { className?: string }) {
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const visible = useSyncExternalStore(subscribeToVisibility, isTabVisible, () => true)
  const [timeline] = useState<Timeline>(() => createTimeline(REST_COLUMNS.map((rests) => rests.length)))
  const [{ messageIndex: index, phase, lettersShown }, setState] = useState(timeline.state)

  useEffect(() => {
    if (reducedMotion || !visible) return
    // Time is measured from resume, so a hidden tab or reduced-motion stretch adds nothing to the timeline.
    let last = Date.now()
    let frameId = 0
    const tick = () => {
      const now = Date.now()
      setState(timeline.advance(now - last))
      last = now
      frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [reducedMotion, visible, timeline])

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
