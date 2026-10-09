import { describe, expect, it, vi } from 'vitest'
import { createBannerRenderer, RAMP, type Mask, type Rasterize } from './bannerRenderer'

// Fake rasterizer: lights the pixels inside a rectangle given as fractions of the mask (0 to 1).
function rect(x0: number, x1: number, y0 = 0, y1 = 1): Rasterize {
  return (_text, width, height) => {
    const data = new Uint8Array(width * height)
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const inside = x / width >= x0 && x / width < x1 && y / height >= y0 && y / height < y1
        if (inside) data[y * width + x] = 1
      }
    }
    return { width, height, data } satisfies Mask
  }
}

const blank: Rasterize = (_text, width, height) => ({ width, height, data: new Uint8Array(width * height) })
const grid = { cols: 40, rows: 6 }
const render = (rasterize: Rasterize, angle = 0) => createBannerRenderer({ ...grid, rasterize })(angle)
const dense = RAMP[RAMP.length - 1]

describe('createBannerRenderer', () => {
  it('has a shading ramp of at least 10 steps starting with blank', () => {
    expect(RAMP.length).toBeGreaterThanOrEqual(10)
    expect(RAMP[0]).toBe(' ')
  })

  it('returns one line per row, each as wide as the column count', () => {
    const lines = render(rect(0.2, 0.8))
    expect(lines).toHaveLength(grid.rows)
    for (const line of lines) expect(line).toHaveLength(grid.cols)
  })

  it('rasterizes the owner name once, however many frames are rendered', () => {
    const rasterize = vi.fn(rect(0, 1))
    const renderFrame = createBannerRenderer({ ...grid, rasterize })
    renderFrame(0)
    renderFrame(0.5)
    expect(rasterize).toHaveBeenCalledTimes(1)
    expect(rasterize.mock.calls[0][0]).toBe('// Mike Deiters')
  })

  it('is deterministic', () => {
    expect(render(rect(0.2, 0.8), 0.7)).toEqual(render(rect(0.2, 0.8), 0.7))
  })

  it('draws nothing for a blank mask', () => {
    for (const line of render(blank, 0.4)) expect(line.trim()).toBe('')
  })

  it('shows a front-facing shape at full density, leaving the empty area blank', () => {
    const lines = render(rect(0.25, 0.75))
    expect(lines[3][20]).toBe(dense)
    expect(lines[3][2]).toBe(' ')
    expect(lines[3][37]).toBe(' ')
  })

  it('softens edges with in-between ramp characters', () => {
    // Edge falls mid-cell, so the boundary cell is partly covered.
    const row = render(rect(0.2625, 0.7375))[3]
    const used = new Set(row.replaceAll(' ', ''))
    expect(used.size).toBeGreaterThan(1)
  })

  it('turns the back of the shape toward the viewer at half a turn', () => {
    const leftOnly = rect(0, 0.3)
    const front = render(leftOnly, 0)[3]
    const back = render(leftOnly, Math.PI)[3]
    expect(front.slice(0, 12).trim()).not.toBe('')
    expect(front.slice(-12).trim()).toBe('')
    expect(back.slice(0, 12).trim()).toBe('')
    expect(back.slice(-12).trim()).not.toBe('')
  })

  it('looks the same after a full turn as facing front', () => {
    expect(render(rect(0.2, 0.8), Math.PI * 2)).toEqual(render(rect(0.2, 0.8), 0))
  })

  it('narrows the shape as it turns away', () => {
    const width = (line: string) => line.trim().length
    const slab = rect(0.1, 0.9)
    expect(width(render(slab, 1.0)[3])).toBeLessThan(width(render(slab, 0)[3]))
  })

  it('shades by depth: a turned shape is lit unevenly with several ramp steps', () => {
    const filled = render(rect(0.1, 0.9), 0.6)[3].trim()
    const side = Math.floor(filled.length / 4)
    const sum = (s: string) => [...s].reduce((total, char) => total + RAMP.indexOf(char), 0)
    expect(sum(filled.slice(0, side))).not.toBe(sum(filled.slice(-side)))
    expect(new Set(filled).size).toBeGreaterThanOrEqual(3)
  })

  it('shows the extruded side face when seen from an angle', () => {
    const bar = rect(0.48, 0.52)
    const width = (line: string) => line.replaceAll(' ', '').length
    expect(width(render(bar, 0.9)[3])).toBeGreaterThan(width(render(bar, 0)[3]))
  })
})
