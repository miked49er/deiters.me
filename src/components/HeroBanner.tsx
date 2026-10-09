import { useEffect, useState } from 'react'
import { NAME_ASCII } from '../data/ascii'

const ART = NAME_ASCII.replace(/^\n/, '').trimEnd()
const TYPING_DURATION_MS = 2000
const TYPABLE_COUNT = [...ART].filter((char) => char.trim()).length
const BASE_DELAY_MS = TYPING_DURATION_MS / TYPABLE_COUNT

const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

// Index just past the next non-space character at or after `from`, or null when only spaces remain.
function nextTypedLength(from: number): number | null {
  const next = ART.slice(from).search(/\S/)
  return next === -1 ? null : from + next + 1
}

function TypingBanner() {
  const [typedLength, setTypedLength] = useState(() => (prefersReducedMotion() ? ART.length : 0))
  const done = typedLength >= ART.length

  useEffect(() => {
    if (done) return
    // Slight jitter (0.5x to 1.5x) so the typing feels human.
    const id = setTimeout(
      () => setTypedLength(nextTypedLength(typedLength) ?? ART.length),
      BASE_DELAY_MS * (0.5 + Math.random()),
    )
    return () => clearTimeout(id)
  }, [typedLength, done])

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

// Temporary `?banner=` switch for comparing variants; the 3D variant (#49) slots in as another case.
export default function HeroBanner({ className }: { className?: string }) {
  const variant = new URLSearchParams(window.location.search).get('banner') ?? 'typing'

  switch (variant) {
    case 'typing':
      return (
        <div className={[className, 'overflow-x-auto'].filter(Boolean).join(' ')}>
          <TypingBanner />
        </div>
      )
    default:
      return null
  }
}
