import { describe, expect, it } from 'vitest'
import { bannerFitFontSize, fitFontSizeForColumns } from './bannerFontSize'

describe('bannerFitFontSize', () => {
  it('sizes to the widest line, capped at the given max', () => {
    expect(bannerFitFontSize('ab\nabcdefghij\nabc', 9)).toBe('min(9px, calc(100cqw / 7))')
  })

  it('caps at the max without dividing by zero for empty art', () => {
    expect(bannerFitFontSize('', 9)).toBe('9px')
  })
})

describe('fitFontSizeForColumns', () => {
  it('sizes to a known column count, capped at the given max', () => {
    expect(fitFontSizeForColumns(100, 10)).toBe('min(10px, calc(100cqw / 65))')
  })
})
