import type { Rasterize } from './bannerRenderer'

const COVERAGE_THRESHOLD = 127
const HEIGHT_FILL = 0.8
const WIDTH_FILL = 0.96

// Draws the text bold and squeezed to fit the bitmap width, then reads back which pixels are inked.
// Returns an empty mask where canvas is unavailable (e.g. jsdom), so callers still get a valid frame.
export const canvasRasterize: Rasterize = (text, width, height) => {
  const empty = { width, height, data: new Uint8Array(width * height) }
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d', { willReadFrequently: true })
  if (!context) return empty

  context.font = `bold ${Math.round(height * HEIGHT_FILL)}px ui-monospace, Menlo, Consolas, monospace`
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  const squeeze = (width * WIDTH_FILL) / context.measureText(text).width
  context.setTransform(squeeze, 0, 0, 1, 0, 0)
  context.fillText(text, width / 2 / squeeze, height / 2)

  const pixels = context.getImageData(0, 0, width, height).data
  const data = new Uint8Array(width * height)
  for (let i = 0; i < data.length; i++) data[i] = pixels[i * 4 + 3] > COVERAGE_THRESHOLD ? 1 : 0
  return { width, height, data }
}
