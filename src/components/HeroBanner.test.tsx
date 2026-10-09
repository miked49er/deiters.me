import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import HeroBanner from './HeroBanner'
import { NAME_ASCII } from '../data/ascii'

const art = NAME_ASCII.replace(/^\n/, '').trimEnd()
const squash = (s: string) => s.replace(/\s+/g, '')

function stubReducedMotion(reduced: boolean) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: reduced && query.includes('prefers-reduced-motion'),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

function setBanner(value?: string) {
  window.history.replaceState({}, '', value ? `/?banner=${value}` : '/')
}

const artText = (container: HTMLElement) => container.querySelector('pre')!.textContent ?? ''
const typedText = (container: HTMLElement) => container.querySelector('[data-testid="typed"]')!.textContent ?? ''
const cursor = (container: HTMLElement) => container.querySelector('[data-testid="cursor"]')

// Step in small increments so React re-renders (and schedules the next keystroke) between timers.
const advance = (ms: number) => {
  for (let elapsed = 0; elapsed < ms; elapsed += 10) act(() => void vi.advanceTimersByTime(10))
}

describe('HeroBanner typing variant', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    stubReducedMotion(false)
    setBanner()
  })

  afterEach(() => {
    vi.useRealTimers()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('starts empty with a solid cursor', () => {
    const { container } = render(<HeroBanner />)
    expect(typedText(container)).toBe('')
    expect(cursor(container)).toBeInTheDocument()
    expect(cursor(container)).not.toHaveClass('cursor-blink')
  })

  it('types partway, leaving characters behind', () => {
    const { container } = render(<HeroBanner />)
    advance(1000)
    const typed = typedText(container)
    expect(typed.length).toBeGreaterThan(0)
    expect(typed.length).toBeLessThan(art.length)
    expect(art.startsWith(typed)).toBe(true)
  })

  it('finishes the full art in about 2 seconds without changing layout width', () => {
    const { container } = render(<HeroBanner />)
    advance(3000)
    expect(typedText(container)).toBe(art)
    expect(squash(artText(container))).toBe(squash(art))
  })

  it('blinks the cursor once done and does not loop', () => {
    const { container } = render(<HeroBanner />)
    advance(3000)
    expect(cursor(container)).toHaveClass('cursor-blink')
    advance(10000)
    expect(typedText(container)).toBe(art)
    expect(vi.getTimerCount()).toBe(0)
  })

  it('hides the art from assistive tech', () => {
    const { container } = render(<HeroBanner />)
    expect(container.querySelector('pre')).toHaveAttribute('aria-hidden', 'true')
  })

  it('shows the full art and blinking cursor immediately under reduced motion', () => {
    stubReducedMotion(true)
    const { container } = render(<HeroBanner />)
    expect(typedText(container)).toBe(art)
    expect(cursor(container)).toHaveClass('cursor-blink')
    expect(vi.getTimerCount()).toBe(0)
  })

  it('treats ?banner=typing like the default', () => {
    setBanner('typing')
    const { container } = render(<HeroBanner />)
    expect(container.querySelector('pre')).toBeInTheDocument()
  })

  it('shows the 3D banner for ?banner=3d, hidden from assistive tech', () => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(null)
    setBanner('3d')
    const { container } = render(<HeroBanner />)
    expect(container.querySelector('pre')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('[data-testid="typed"]')).not.toBeInTheDocument()
  })

  it('renders nothing for an unknown ?banner= value', () => {
    setBanner('nope')
    const { container } = render(<HeroBanner />)
    expect(container).toBeEmptyDOMElement()
  })
})
