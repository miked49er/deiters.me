import { describe, expect, it } from 'vitest'
import { fitBannerFontSize, fitColumnsFontSize } from './bannerFontSize'

describe('fitBannerFontSize', () => {
  it('sizes to the widest line, capped at the given max', () => {
    expect(fitBannerFontSize('ab\nabcdefghij\nabc', 9)).toBe('min(9px, calc(100cqw / 7))')
  })

  it('caps at the max without dividing by zero for empty art', () => {
    expect(fitBannerFontSize('', 9)).toBe('9px')
  })
})

describe('fitColumnsFontSize', () => {
  it('sizes to a known column count, capped at the given max', () => {
    expect(fitColumnsFontSize(100, 10)).toBe('min(10px, calc(100cqw / 65))')
  })
})
