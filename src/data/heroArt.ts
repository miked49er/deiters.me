import { NAME_ASCII, SLASH_ASCII } from './ascii'

const toRows = (art: string) => art.replace(/^\n/, '').trimEnd().split('\n')

const SLASH_WIDTH = 9
const NAME_OFFSET = SLASH_WIDTH + 1 // one blank column between the slashes and the name
const nameRows = toRows(NAME_ASCII)
const NAME_WIDTH = Math.max(...nameRows.map((row) => row.length))

// The slashes followed by the name: the same art the old section banner showed, as equal-width rows.
export const HERO_ART_ROWS: string[] = toRows(SLASH_ASCII).map((slash, i) =>
  `${slash.padEnd(SLASH_WIDTH)} ${nameRows[i].padEnd(NAME_WIDTH)}`,
)

// Column ranges [start, end) of each glyph: "/", "/", M, i, k, e, space, D, e, i, t, e, r, s.
// The figlet letters are smushed together, so a column shared by two letters belongs to the earlier one.
const NAME_GLYPH_COLUMNS: [number, number][] = [
  [0, 9], // M
  [9, 11], // i
  [11, 15], // k
  [15, 20], // e
  [20, 21], // (space)
  [21, 28], // D
  [28, 33], // e
  [33, 35], // i
  [35, 38], // t
  [38, 43], // e
  [43, 47], // r
  [47, 52], // s
]

export const HERO_GLYPH_COLUMNS: [number, number][] = [
  [0, 6], // /
  [6, NAME_OFFSET], // /
  ...NAME_GLYPH_COLUMNS.map(([start, end]): [number, number] => [start + NAME_OFFSET, end + NAME_OFFSET]),
]

// Each glyph as its rows of text (one string per art row).
export function heroGlyphRows(): string[][] {
  return HERO_GLYPH_COLUMNS.map(([start, end]) => HERO_ART_ROWS.map((row) => row.slice(start, end)))
}
