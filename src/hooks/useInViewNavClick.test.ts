import { describe, expect, it } from 'vitest'
import { shouldSkipNavScroll } from './useInViewNavClick'

function mockRect(top: number) {
  return { top } as DOMRect
}

describe('shouldSkipNavScroll', () => {
  it('skips scrolling when the target is already visible below the header', () => {
    expect(shouldSkipNavScroll(mockRect(117), 53, 900)).toBe(true)
  })

  it('does not skip when the target is hidden under the sticky header', () => {
    expect(shouldSkipNavScroll(mockRect(20), 53, 900)).toBe(false)
  })

  it('does not skip when the target is above the viewport (scrolled past it)', () => {
    expect(shouldSkipNavScroll(mockRect(-400), 53, 900)).toBe(false)
  })

  it('does not skip when the target is below the viewport', () => {
    expect(shouldSkipNavScroll(mockRect(1200), 53, 900)).toBe(false)
  })
})
