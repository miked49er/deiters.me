import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import HeroBanner from './HeroBanner'
import { HERO_ART_ROWS, HERO_GLYPH_COLUMNS } from '../data/heroArt'

function stubReducedMotion(reduced: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: reduced && query.includes('prefers-reduced-motion'),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

const typedRows = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-testid="typed"]')].map((el) => el.textContent ?? '')
const cursors = (container: HTMLElement) => [...container.querySelectorAll('[data-testid="cursor"]')]
// How many columns of the art are revealed (every row is revealed to the same column).
const revealedColumns = (container: HTMLElement) => typedRows(container)[0].length

// Step in small increments so React re-renders (and schedules the next frame) between timers.
const advance = (ms: number) => {
  for (let elapsed = 0; elapsed < ms; elapsed += 10) act(() => void vi.advanceTimersByTime(10))
}

// Column where each glyph ends, i.e. the only places the cursor may rest.
const glyphEnds = HERO_GLYPH_COLUMNS.map(([, end]) => end)

describe('HeroBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    stubReducedMotion(false)
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('starts with nothing typed and a solid cursor as tall as the art', () => {
    const { container } = render(<HeroBanner />)
    expect(revealedColumns(container)).toBe(0)
    expect(cursors(container)).toHaveLength(HERO_ART_ROWS.length)
    cursors(container).forEach((cursor) => expect(cursor).not.toHaveClass('cursor-blink'))
  })

  it('reveals whole letters: every row is cut at the same glyph boundary, one rest position per letter', () => {
    const { container } = render(<HeroBanner />)
    // the space is skipped instantly, so the cursor never rests at the end of the letter before it
    const restPositions = glyphEnds.filter((_, i) => i !== 5)
    const seen = new Set<number>()
    for (let t = 0; t < 2200; t += 10) {
      advance(10)
      const rows = typedRows(container)
      const columns = rows[0].length
      expect(rows.every((row) => row.length === columns)).toBe(true)
      rows.forEach((row, i) => expect(HERO_ART_ROWS[i].startsWith(row)).toBe(true))
      if (columns > 0) expect(restPositions).toContain(columns)
      seen.add(columns)
    }
    expect(seen.has(0) ? seen.size - 1 : seen.size).toBe(13)
  })

  it('puts the cursor right after the typed text on every row', () => {
    const { container } = render(<HeroBanner />)
    advance(1000)
    expect(revealedColumns(container)).toBeGreaterThan(0)
    expect(revealedColumns(container)).toBeLessThan(HERO_ART_ROWS[0].length)
    cursors(container).forEach((cursor) => {
      expect(cursor.previousElementSibling).toHaveAttribute('data-testid', 'typed')
    })
  })

  it('finishes the full art in about 2 seconds, then blinks the cursor and stops', () => {
    const { container } = render(<HeroBanner />)
    advance(1900)
    expect(typedRows(container).join('\n')).not.toBe(HERO_ART_ROWS.join('\n'))
    cursors(container).forEach((cursor) => expect(cursor).not.toHaveClass('cursor-blink'))
    advance(200)
    expect(typedRows(container).join('\n')).toBe(HERO_ART_ROWS.join('\n'))
    cursors(container).forEach((cursor) => expect(cursor).toHaveClass('cursor-blink'))
    advance(10000)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('shows the full art and blinking cursor immediately under reduced motion', () => {
    stubReducedMotion(true)
    const { container } = render(<HeroBanner />)
    expect(typedRows(container).join('\n')).toBe(HERO_ART_ROWS.join('\n'))
    cursors(container).forEach((cursor) => expect(cursor).toHaveClass('cursor-blink'))
    expect(vi.getTimerCount()).toBe(0)
  })

  it('shows the full art when reduced motion is turned on while typing', () => {
    let listener: () => void = () => {}
    let reduced = false
    vi.stubGlobal('matchMedia', () => ({
      get matches() {
        return reduced
      },
      addEventListener: (_: string, fn: () => void) => (listener = fn),
      removeEventListener: vi.fn(),
    }))
    const { container } = render(<HeroBanner />)
    advance(500)
    reduced = true
    act(() => listener())
    expect(typedRows(container).join('\n')).toBe(HERO_ART_ROWS.join('\n'))
  })

  it('hides the art from assistive tech and does not scroll horizontally', () => {
    const { container } = render(<HeroBanner className="mb-3" />)
    expect(container.querySelector('pre')).toHaveAttribute('aria-hidden', 'true')
    expect(container.firstElementChild).toHaveClass('mb-3')
    expect(container.innerHTML).not.toContain('overflow-x-auto')
  })
})
