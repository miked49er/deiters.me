import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import HeroBanner from './HeroBanner'
import { HERO_MAX_HEIGHT, HERO_MESSAGES } from '../data/heroArt'

function stubReducedMotion(reduced: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: reduced && query.includes('prefers-reduced-motion'),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

function setVisibility(state: 'visible' | 'hidden') {
  Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => state })
  act(() => void document.dispatchEvent(new Event('visibilitychange')))
}

const typedRows = (container: HTMLElement) =>
  [...container.querySelectorAll('[data-testid="typed"]')].map((el) => el.textContent ?? '')
const cursors = (container: HTMLElement) => [...container.querySelectorAll('[data-testid="cursor"]')]
const rowLengths = (container: HTMLElement) =>
  [...container.querySelectorAll('pre > span')].map((el) => el.textContent?.length ?? 0)
// How many columns of the art are revealed (every row is revealed to the same column).
const revealedColumns = (container: HTMLElement) => typedRows(container)[0].length
const joinRows = (rows: string[]) => rows.map((row) => row.trimEnd()).join('\n').trimEnd()
const typedText = (container: HTMLElement) => joinRows(typedRows(container))
const fullText = (index: number) => joinRows(HERO_MESSAGES[index].rows)
const isBlinking = (container: HTMLElement) => cursors(container).every((c) => c.classList.contains('cursor-blink'))
const isSolid = (container: HTMLElement) => cursors(container).every((c) => !c.classList.contains('cursor-blink'))

// Step in small increments so React re-renders (and schedules the next frame) between timers.
const advance = (ms: number, step = 10) => {
  for (let elapsed = 0; elapsed < ms; elapsed += step) act(() => void vi.advanceTimersByTime(step))
}

// The only columns the cursor may rest at for a message: the end of a glyph.
const glyphEnds = (index: number) => HERO_MESSAGES[index].glyphColumns.map(([, end]) => end)

// Message timings from the owner: type ~3s, hold ~8s, backspace ~1.5s.
const TYPE_MS = 3000
const HOLD_MS = 8000
const ERASE_MS = 1500

describe('HeroBanner', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    stubReducedMotion(false)
    setVisibility('visible')
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('starts with nothing typed and a solid cursor as tall as the tallest message', () => {
    const { container } = render(<HeroBanner />)
    expect(revealedColumns(container)).toBe(0)
    expect(cursors(container)).toHaveLength(HERO_MAX_HEIGHT)
    expect(isSolid(container)).toBe(true)
  })

  it('types whole letters of the name: every row is cut at the same glyph boundary, one rest per letter', () => {
    const { container } = render(<HeroBanner />)
    // the space is skipped instantly, so the cursor never rests at the end of the letter before it
    const restPositions = glyphEnds(0).filter((_, i) => i !== 5)
    const seen = new Set<number>()
    for (let t = 0; t < TYPE_MS + 200; t += 10) {
      advance(10)
      const rows = typedRows(container)
      const columns = rows[0].length
      expect(rows.every((row) => row.length === columns)).toBe(true)
      rows.forEach((row, i) => expect((HERO_MESSAGES[0].rows[i] ?? '').padEnd(200).startsWith(row)).toBe(true))
      if (columns > 0) expect(restPositions).toContain(columns)
      seen.add(columns)
    }
    expect(seen.has(0) ? seen.size - 1 : seen.size).toBe(13)
  })

  it('puts the cursor right after the typed text on every row', () => {
    const { container } = render(<HeroBanner />)
    advance(1500)
    expect(revealedColumns(container)).toBeGreaterThan(0)
    expect(revealedColumns(container)).toBeLessThan(HERO_MESSAGES[0].rows[0].length)
    cursors(container).forEach((cursor) => {
      expect(cursor.previousElementSibling).toHaveAttribute('data-testid', 'typed')
    })
  })

  it('takes about 3 seconds to type the name, then blinks the cursor', () => {
    const { container } = render(<HeroBanner />)
    advance(TYPE_MS - 150)
    expect(typedText(container)).not.toBe(fullText(0))
    expect(isSolid(container)).toBe(true)
    advance(300)
    expect(typedText(container)).toBe(fullText(0))
    expect(isBlinking(container)).toBe(true)
  })

  it('holds the full text with a blinking cursor for about 8 seconds', () => {
    const { container } = render(<HeroBanner />)
    advance(TYPE_MS + 100)
    advance(HOLD_MS - 500, 50)
    expect(typedText(container)).toBe(fullText(0))
    expect(isBlinking(container)).toBe(true)
  })

  it('then backspaces one whole letter at a time, right to left, in about 1.5 seconds', () => {
    const { container } = render(<HeroBanner />)
    advance(TYPE_MS + HOLD_MS + 50)
    const restPositions = glyphEnds(0).filter((_, i) => i !== 5)
    const columnsSeen: number[] = []
    for (let t = 0; t < ERASE_MS - 100; t += 10) {
      advance(10)
      const columns = revealedColumns(container)
      expect(isSolid(container)).toBe(true)
      if (columnsSeen[columnsSeen.length - 1] !== columns) columnsSeen.push(columns)
      if (columns > 0) expect(restPositions).toContain(columns)
    }
    // strictly decreasing, whole letters only, and not yet finished just before 1.5s
    columnsSeen.forEach((column, i) => i > 0 && expect(column).toBeLessThan(columnsSeen[i - 1]))
    expect(columnsSeen[columnsSeen.length - 1]).toBeGreaterThan(0)
    advance(200)
    expect(revealedColumns(container)).toBe(0)
    // erased letters are gone entirely (the whole letter, not half of it)
    expect(typedText(container).replace(/\s/g, '')).toBe('')
  })

  it('types the next message after erasing, and loops through all of them back to the name', () => {
    vi.spyOn(Math, 'random').mockReturnValue(0.5) // even typing, so the first letter always lands within 700ms
    const { container } = render(<HeroBanner />)
    for (let m = 0; m < HERO_MESSAGES.length; m++) {
      advance(m === 0 ? TYPE_MS + 600 : 600, 50)
      expect(typedText(container)).toBe(fullText(m))
      // finish this message's hold and erase, landing a little into the next message's typing
      advance(HOLD_MS + ERASE_MS - 600 + 700, 50)
      expect(revealedColumns(container)).toBeGreaterThan(0)
      const next = (m + 1) % HERO_MESSAGES.length
      typedRows(container).forEach((row, i) => expect((HERO_MESSAGES[next].rows[i] ?? '').padEnd(200).startsWith(row)).toBe(true))
      advance(TYPE_MS - 700, 50)
    }
    // back on the name after the fifth message
    advance(600, 50)
    expect(typedText(container)).toBe(fullText(0))
  })

  it('never changes size while rotating: same number of rows and the same row width at every moment', () => {
    const { container } = render(<HeroBanner />)
    const initial = rowLengths(container)
    expect(initial).toHaveLength(HERO_MAX_HEIGHT)
    expect(new Set(initial).size).toBe(1)
    for (let t = 0; t < 30000; t += 100) {
      advance(100, 50)
      expect(rowLengths(container)).toEqual(initial)
    }
  })

  it('shows the name statically with a blinking cursor under reduced motion, with no timers', () => {
    stubReducedMotion(true)
    const { container } = render(<HeroBanner />)
    expect(typedText(container)).toBe(fullText(0))
    expect(isBlinking(container)).toBe(true)
    expect(vi.getTimerCount()).toBe(0)
    advance(30000, 100)
    expect(typedText(container)).toBe(fullText(0))
  })

  it('shows the static name when reduced motion is turned on mid-animation', () => {
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
    expect(typedText(container)).toBe(fullText(0))
    advance(20000, 100)
    expect(typedText(container)).toBe(fullText(0))
  })

  it('pauses while the tab is hidden and resumes where it left off', () => {
    const { container } = render(<HeroBanner />)
    advance(1000)
    const before = revealedColumns(container)
    expect(before).toBeGreaterThan(0)
    setVisibility('hidden')
    expect(vi.getTimerCount()).toBe(0)
    advance(30000, 100)
    expect(revealedColumns(container)).toBe(before)
    setVisibility('visible')
    advance(TYPE_MS - 1000 + 300)
    expect(typedText(container)).toBe(fullText(0))
  })

  it('pauses the hold while hidden instead of counting that time', () => {
    const { container } = render(<HeroBanner />)
    advance(TYPE_MS + 100)
    advance(4000, 50)
    setVisibility('hidden')
    advance(60000, 500)
    setVisibility('visible')
    advance(3000, 50) // 7s held in total, so still shown in full
    expect(typedText(container)).toBe(fullText(0))
    advance(1500, 50) // past 8s of visible hold, so backspacing has started
    expect(typedText(container)).not.toBe(fullText(0))
  })

  it('hides the art from assistive tech and does not scroll horizontally', () => {
    const { container } = render(<HeroBanner className="mb-3" />)
    expect(container.querySelector('pre')).toHaveAttribute('aria-hidden', 'true')
    expect(container.firstElementChild).toHaveClass('mb-3')
    expect(container.innerHTML).not.toContain('overflow-x-auto')
  })
})
