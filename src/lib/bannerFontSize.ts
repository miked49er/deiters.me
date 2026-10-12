// Monospace glyph width as a fraction of font size.
const CHAR_WIDTH_RATIO = 0.65

// Font size that fits `columns` monospace columns inside the nearest `@container`, never above `maxPx`.
export function fitColumnsFontSize(columns: number, maxPx: number): string {
  return `min(${maxPx}px, calc(100cqw / ${Math.round(columns * CHAR_WIDTH_RATIO)}))`
}

// Font size that fits the widest line of `banner` inside the nearest `@container`, never above `maxPx`.
export function fitBannerFontSize(banner: string, maxPx: number): string {
  const columns = Math.max(0, ...banner.split('\n').map((line) => line.length))
  if (columns === 0) return `${maxPx}px`
  return fitColumnsFontSize(columns, maxPx)
}
