import { useEffect, useState } from 'react'
import { HERO_ART_ROWS, HERO_GLYPH_COLUMNS, heroGlyphRows } from '../data/heroArt'
import { REDUCED_MOTION_QUERY, useMediaQuery } from '../hooks/useMediaQuery'

const TYPING_DURATION_MS = 2000
const ART_WIDTH = HERO_ART_ROWS[0].length
const CURSOR_WIDTH = 2

// Column the cursor rests at after each keystroke: the end of a letter, plus any blank glyphs right after it
// (those are passed over instantly rather than typed).
const REST_COLUMNS: number[] = (() => {
  const blank = heroGlyphRows().map((glyph) => glyph.every((line) => line.trim() === ''))
  const rests: number[] = []
  HERO_GLYPH_COLUMNS.forEach(([, end], i) => {
    if (blank[i]) rests[rests.length - 1] = end
    else rests.push(end)
  })
  return rests
})()

// Time at which each letter appears: jittered (0.5x to 1.5x) so the typing feels human, scaled to end exactly on time.
function typingSchedule(): number[] {
  const gaps = REST_COLUMNS.map(() => 0.5 + Math.random())
  const scale = TYPING_DURATION_MS / gaps.reduce((sum, gap) => sum + gap, 0)
  let at = 0
  return gaps.map((gap) => (at += gap * scale))
}

export default function HeroBanner({ className }: { className?: string }) {
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const [schedule] = useState(typingSchedule)
  const [lettersTyped, setLettersTyped] = useState(0)
  const done = reducedMotion || lettersTyped >= REST_COLUMNS.length

  useEffect(() => {
    if (done) return
    // Progress follows elapsed time, so a slow frame catches up instead of stretching the total duration.
    let frameId = 0
    let startedAt: number | null = null
    const tick = (now: number) => {
      startedAt ??= now
      const elapsed = now - startedAt
      let count = 0
      while (count < schedule.length && schedule[count] <= elapsed) count++
      setLettersTyped(count)
      if (count < schedule.length) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [schedule, done])

  const column = done ? ART_WIDTH : lettersTyped === 0 ? 0 : REST_COLUMNS[lettersTyped - 1]

  // Each row is typed text, a block cursor, then the not-yet-typed rest kept invisible so layout never shifts.
  // The font size follows the column width (cqw) so the whole art always fits without a horizontal scrollbar.
  return (
    <div className={[className, '@container'].filter(Boolean).join(' ')}>
      <pre aria-hidden="true" className="text-[min(10px,calc(100cqw/40))] leading-[1.2] text-banner">
        {HERO_ART_ROWS.map((row, i) => (
          <span key={i} className="block">
            <span data-testid="typed">{row.slice(0, column)}</span>
            <span
              data-testid="cursor"
              className={`inline-block h-[1.2em] bg-banner align-top text-transparent${done ? ' cursor-blink' : ''}`}
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
