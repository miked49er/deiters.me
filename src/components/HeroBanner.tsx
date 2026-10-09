import { useEffect, useState, type ReactNode } from 'react'
import { NAME_ASCII } from '../data/ascii'
import { REDUCED_MOTION_QUERY, useMediaQuery } from '../hooks/useMediaQuery'
import Banner3D from './Banner3D'

const ART = NAME_ASCII.replace(/^\n/, '').trimEnd()
const TYPING_DURATION_MS = 2000
// Positions of the characters that get typed; spaces and newlines are never typed, just passed over.
const GLYPH_INDEXES = [...ART].flatMap((char, index) => (char.trim() ? [index] : []))

// Time at which each glyph appears: jittered (0.5x to 1.5x) so the typing feels human, scaled to end exactly on time.
function typingSchedule(): number[] {
  const gaps = GLYPH_INDEXES.map(() => 0.5 + Math.random())
  const scale = TYPING_DURATION_MS / gaps.reduce((sum, gap) => sum + gap, 0)
  let at = 0
  return gaps.map((gap) => (at += gap * scale))
}

function TypingBanner() {
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const [schedule] = useState(typingSchedule)
  const [glyphsTyped, setGlyphsTyped] = useState(0)
  const done = reducedMotion || glyphsTyped >= GLYPH_INDEXES.length

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
      setGlyphsTyped(count)
      if (count < schedule.length) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [schedule, done])

  // The cursor sits on the next glyph to type (everything before it, whitespace included, is already shown).
  const typedLength = done ? ART.length : GLYPH_INDEXES[glyphsTyped]
  // The cursor wraps the next character and the rest stays invisible, so the layout never shifts while typing.
  return (
    <pre aria-hidden="true" className="text-[8px] leading-tight text-banner sm:text-[10px]">
      <span data-testid="typed">{ART.slice(0, typedLength)}</span>
      <span data-testid="cursor" className={`bg-banner text-transparent${done ? ' cursor-blink' : ''}`}>
        {ART.charAt(typedLength) || ' '}
      </span>
      <span className="invisible">{ART.slice(typedLength + 1)}</span>
    </pre>
  )
}

// Temporary `?banner=` switch for comparing variants; the 3D variant (#49) is the other case.
export default function HeroBanner({ className }: { className?: string }) {
  const variant = new URLSearchParams(window.location.search).get('banner') ?? 'typing'

  let banner: ReactNode
  switch (variant) {
    case 'typing':
      banner = <TypingBanner />
      break
    case '3d':
      banner = <Banner3D />
      break
    default:
      return null
  }

  return <div className={[className, 'overflow-x-auto'].filter(Boolean).join(' ')}>{banner}</div>
}
