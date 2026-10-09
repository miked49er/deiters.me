import { describe, expect, it } from 'vitest'
import { HERO_MAX_HEIGHT, HERO_MAX_WIDTH, HERO_MESSAGES, heroGlyphRows } from './heroArt'
import { NAME_ASCII, SLASH_ASCII } from './ascii'

const toRows = (art: string) => art.replace(/^\n/, '').trimEnd().split('\n')

// The width budget the name art has always lived in (name is 62 columns; messages may be a little wider).
const WIDTH_BUDGET = 70

describe('hero art', () => {
  it('rotates through the name, title, stack, scope and place, in that order', () => {
    expect(HERO_MESSAGES.map((m) => m.text)).toEqual([
      '// Mike Deiters',
      '// Sr. Engineer',
      '// Full-Stack',
      '// Atlanta, GA',
    ])
  })

  it('keeps the name art identical to the old section banner: slash art, a blank column, then the name', () => {
    const slash = toRows(SLASH_ASCII)
    const name = toRows(NAME_ASCII)
    const rows = HERO_MESSAGES[0].rows
    expect(rows).toHaveLength(name.length)
    rows.forEach((row, i) => {
      expect(row.replace(/\s+$/, '')).toBe(`${slash[i].padEnd(9)} ${name[i]}`.replace(/\s+$/, ''))
    })
    expect(rows[0]).toHaveLength(62)
  })

  it.each(HERO_MESSAGES.map((m) => [m.text, m] as const))('%s has equal-width rows', (_, message) => {
    expect(new Set(message.rows.map((row) => row.length)).size).toBe(1)
  })

  it.each(HERO_MESSAGES.map((m) => [m.text, m] as const))(
    '%s splits into glyph segments that reassemble exactly into its rows',
    (_, message) => {
      const glyphs = heroGlyphRows(message)
      message.rows.forEach((row, i) => {
        expect(glyphs.map((glyph) => glyph[i]).join('')).toBe(row)
      })
      // contiguous, non-empty ranges, one glyph per character of the message (the "//" is two slashes)
      expect(message.glyphColumns).toHaveLength(message.text.replace(/^\/\/ /, '').length + 2)
      message.glyphColumns.forEach(([start, end], i) => {
        expect(end).toBeGreaterThan(start)
        if (i > 0) expect(start).toBe(message.glyphColumns[i - 1][1])
      })
    },
  )

  it('has the name glyph layout it always had: / / M i k e _ D e i t e r s', () => {
    expect(HERO_MESSAGES[0].glyphColumns).toEqual([
      [0, 6], [6, 10], [10, 19], [19, 21], [21, 25], [25, 30], [30, 31],
      [31, 38], [38, 43], [43, 45], [45, 48], [48, 53], [53, 57], [57, 62],
    ])
  })

  it.each(HERO_MESSAGES.map((m) => [m.text, m] as const))('%s fits the width budget', (_, message) => {
    expect(message.rows[0].length).toBeLessThanOrEqual(WIDTH_BUDGET)
  })

  it('reports the widest and tallest message so the layout can reserve room for all of them', () => {
    expect(HERO_MAX_WIDTH).toBe(Math.max(...HERO_MESSAGES.map((m) => m.rows[0].length)))
    expect(HERO_MAX_HEIGHT).toBe(Math.max(...HERO_MESSAGES.map((m) => m.rows.length)))
  })
})
