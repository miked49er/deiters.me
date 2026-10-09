export const RAMP = ' .,:;-=+*#%@'

export const BANNER_TEXT = '// Mike Deiters'

export interface Mask {
  width: number
  height: number
  /** Row-major, one byte per pixel; non-zero means the pixel is part of the text. */
  data: Uint8Array
}

/** Seam for turning text into a bitmap, so tests can fake it and the browser can use a canvas. */
export type Rasterize = (text: string, width: number, height: number) => Mask

export interface Grid {
  cols: number
  rows: number
}

interface RendererOptions extends Grid {
  rasterize: Rasterize
  text?: string
}

const MASK_SCALE = 4 // mask pixels per column
const SAMPLES_X = 3 // supersampling per cell
const SAMPLES_Y = 3
const CELL_HEIGHT = 2 // a character cell is about twice as tall as it is wide
const STEP = 1 // ray-march step along the view axis, in column widths
const DEPTH_ROWS = 0.4 // half the extrusion depth, as a fraction of the row count
const DEPTH_DIMMING = 0.7 // how much the far end of the view axis is darkened (0 = none, 1 = black)
const EDGE_REACH = 1 // how far from an outline a front-face point still counts as edge, in column widths
const SHADOW_SHADE = 0.75 // brightness of front-face edges facing away from the light (right and bottom)
const SIDE_SHADE = 0.85 // brightness of side walls relative to the front face

/**
 * Builds a renderer that draws the text as extruded 3D letters. The text is rasterized once; the returned
 * function maps a rotation angle (radians about the vertical axis, 0 = facing front) to lines of shaded text.
 */
export function createBannerRenderer({ cols, rows, rasterize, text = BANNER_TEXT }: RendererOptions) {
  const height = rows * CELL_HEIGHT
  const mask = rasterize(text, cols * MASK_SCALE, height * MASK_SCALE)
  const halfDepth = rows * DEPTH_ROWS
  const reach = cols / 2 + halfDepth
  const lit = (x: number, y: number) => {
    const px = Math.floor(((x + cols / 2) / cols) * mask.width)
    const py = Math.floor(((y + height / 2) / height) * mask.height)
    if (px < 0 || py < 0 || px >= mask.width || py >= mask.height) return false
    return mask.data[py * mask.width + px] !== 0
  }

  // Light comes from the upper left: front-face edges on the right and bottom fall in shadow and side walls
  // are dimmer than the face, so even a front-facing frame still reads as extruded.
  const surfaceShade = (x: number, y: number, z: number): number => {
    if (z <= halfDepth - STEP) return SIDE_SHADE
    return !lit(x + EDGE_REACH, y) || !lit(x, y + EDGE_REACH) ? SHADOW_SHADE : 1
  }

  return (angle: number): string[] => {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)

    // Marches a view ray from the camera until it enters the extruded text; returns how bright that point is.
    const shadeAt = (sx: number, sy: number): number => {
      for (let z = reach; z >= -reach; z -= STEP) {
        const objectX = sx * cos - z * sin
        const objectZ = sx * sin + z * cos
        if (Math.abs(objectZ) <= halfDepth && lit(objectX, sy)) {
          // +z points toward the viewer, so the smaller z is, the farther the point.
          const farness = Math.min(Math.max((halfDepth - z) / (cols / 2), 0), 1)
          return surfaceShade(objectX, sy, objectZ) * (1 - DEPTH_DIMMING * farness)
        }
      }
      return 0
    }

    const lines: string[] = []
    for (let row = 0; row < rows; row++) {
      let line = ''
      for (let col = 0; col < cols; col++) {
        let total = 0
        for (let j = 0; j < SAMPLES_Y; j++) {
          for (let i = 0; i < SAMPLES_X; i++) {
            const sx = col - cols / 2 + (i + 0.5) / SAMPLES_X
            const sy = (row + (j + 0.5) / SAMPLES_Y) * CELL_HEIGHT - height / 2
            total += shadeAt(sx, sy)
          }
        }
        const intensity = total / (SAMPLES_X * SAMPLES_Y)
        line += RAMP[Math.round(intensity * (RAMP.length - 1))]
      }
      lines.push(line)
    }
    return lines
  }
}
