import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render } from '@testing-library/react'
import Banner3D from './Banner3D'
import { createBannerRenderer, type Rasterize } from '../lib/bannerRenderer'

// Fake rasterizer: a lit block in the middle, so every angle draws something different.
const block: Rasterize = (_text, width, height) => {
  const data = new Uint8Array(width * height)
  for (let y = 0; y < height; y++) {
    for (let x = Math.floor(width * 0.1); x < Math.floor(width * 0.9); x++) data[y * width + x] = 1
  }
  return { width, height, data }
}

function stubMedia({ reduced = false, narrow = false } = {}) {
  vi.stubGlobal('matchMedia', (query: string) => ({
    matches: (reduced && query.includes('prefers-reduced-motion')) || (narrow && query.includes('max-width')),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  }))
}

let visibilityCallback: (entries: { isIntersecting: boolean }[]) => void
function stubIntersectionObserver() {
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      constructor(callback: typeof visibilityCallback) {
        visibilityCallback = callback
      }
      observe = vi.fn()
      disconnect = vi.fn()
    },
  )
}

function setDocumentHidden(hidden: boolean) {
  Object.defineProperty(document, 'hidden', { configurable: true, get: () => hidden })
  document.dispatchEvent(new Event('visibilitychange'))
}

const art = (container: HTMLElement) => container.querySelector('pre')!.textContent ?? ''
const frontFrame = (cols: number, rows: number) => createBannerRenderer({ cols, rows, rasterize: block })(0).join('\n')

describe('Banner3D', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    stubMedia()
  })

  afterEach(() => {
    setDocumentHidden(false)
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('shows a static front-facing frame straight away, hidden from assistive tech', () => {
    const { container } = render(<Banner3D rasterize={block} />)
    const pre = container.querySelector('pre')!
    expect(pre).toHaveAttribute('aria-hidden', 'true')
    expect(pre).toHaveClass('text-banner')
    expect(art(container)).toBe(frontFrame(60, 6))
  })

  it('animates away from the front frame over time', () => {
    const { container } = render(<Banner3D rasterize={block} />)
    act(() => void vi.advanceTimersByTime(3000))
    expect(art(container)).not.toBe(frontFrame(60, 6))
  })

  it('keeps animating frame after frame', () => {
    const { container } = render(<Banner3D rasterize={block} />)
    act(() => void vi.advanceTimersByTime(2500))
    const first = art(container)
    act(() => void vi.advanceTimersByTime(400))
    expect(art(container)).not.toBe(first)
  })

  it('stays on the static front frame, with no animation loop, under reduced motion', () => {
    stubMedia({ reduced: true })
    const { container } = render(<Banner3D rasterize={block} />)
    act(() => void vi.advanceTimersByTime(5000))
    expect(art(container)).toBe(frontFrame(60, 6))
    expect(vi.getTimerCount()).toBe(0)
  })

  it('uses a smaller grid on narrow screens', () => {
    stubMedia({ narrow: true })
    const { container } = render(<Banner3D rasterize={block} />)
    const lines = art(container).split('\n')
    expect(lines[0]).toHaveLength(36)
    expect(lines.length).toBeLessThan(6)
  })

  it('pauses while scrolled off-screen and resumes when visible again', () => {
    stubIntersectionObserver()
    const { container } = render(<Banner3D rasterize={block} />)
    act(() => void vi.advanceTimersByTime(2500))
    act(() => visibilityCallback([{ isIntersecting: false }]))
    const paused = art(container)
    expect(vi.getTimerCount()).toBe(0)
    act(() => void vi.advanceTimersByTime(2000))
    expect(art(container)).toBe(paused)
    act(() => visibilityCallback([{ isIntersecting: true }]))
    act(() => void vi.advanceTimersByTime(400))
    expect(art(container)).not.toBe(paused)
  })

  it('pauses while the tab is hidden and resumes when it returns', () => {
    const { container } = render(<Banner3D rasterize={block} />)
    act(() => void vi.advanceTimersByTime(2500))
    act(() => setDocumentHidden(true))
    const paused = art(container)
    expect(vi.getTimerCount()).toBe(0)
    act(() => void vi.advanceTimersByTime(2000))
    expect(art(container)).toBe(paused)
    act(() => setDocumentHidden(false))
    act(() => void vi.advanceTimersByTime(400))
    expect(art(container)).not.toBe(paused)
  })

  it('stops scheduling frames after unmount', () => {
    const { unmount } = render(<Banner3D rasterize={block} />)
    act(() => void vi.advanceTimersByTime(100))
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })

  it('works where matchMedia and IntersectionObserver are missing', () => {
    vi.stubGlobal('matchMedia', undefined)
    const { container } = render(<Banner3D rasterize={block} />)
    expect(art(container)).toBe(frontFrame(60, 6))
  })
})
