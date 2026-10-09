import { describe, expect, it } from 'vitest'
import { HERO_ART_ROWS, HERO_GLYPH_COLUMNS, heroGlyphRows } from './heroArt'
import { NAME_ASCII, SLASH_ASCII } from './ascii'

describe('hero art', () => {
  it('puts the slash art before the name art, as the old section banner did', () => {
    const slash = SLASH_ASCII.replace(/^\n/, '').trimEnd().split('\n')
    const name = NAME_ASCII.replace(/^\n/, '').trimEnd().split('\n')
    HERO_ART_ROWS.forEach((row, i) => {
      expect(row.replace(/\s+$/, '')).toBe(`${slash[i].padEnd(9)} ${name[i]}`.replace(/\s+$/, ''))
    })
  })

  it('has equal-width rows', () => {
    expect(new Set(HERO_ART_ROWS.map((row) => row.length)).size).toBe(1)
  })

  it('splits into glyph segments that reassemble exactly into the original rows', () => {
    const glyphs = heroGlyphRows()
    HERO_ART_ROWS.forEach((row, i) => {
      expect(glyphs.map((glyph) => glyph[i]).join('')).toBe(row)
    })
  })

  it('has one glyph per letter: / / M i k e _ D e i t e r s', () => {
    expect(HERO_GLYPH_COLUMNS).toHaveLength(14)
    const blank = heroGlyphRows().map((glyph) => glyph.every((line) => line.trim() === ''))
    expect(blank.filter(Boolean)).toHaveLength(1)
    expect(blank[6]).toBe(true)
  })
})
