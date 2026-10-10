import { describe, expect, it } from 'vitest'
import { bannerFitFontSize } from './bannerFontSize'

describe('bannerFitFontSize', () => {
  it('sizes to the widest line, capped at the given max', () => {
    expect(bannerFitFontSize('ab\nabcdefghij\nabc', 9)).toBe('min(9px, calc(100cqw / 7))')
  })

  it('caps at the max without dividing by zero for empty art', () => {
    expect(bannerFitFontSize('', 9)).toBe('9px')
  })
})
