import { describe, expect, it } from 'vitest'
import { angleAt, CYCLE_MS } from './bannerMotion'

const deg = (radians: number) => (radians * 180) / Math.PI
// Signed shortest difference between two angles, so a full turn landing back on front is not a jump.
const gap = (a: number, b: number) => ((((a - b) % TAU) + 3 * Math.PI) % TAU) - Math.PI
const TAU = Math.PI * 2
const samples = Array.from({ length: 2000 }, (_, i) => (i / 2000) * CYCLE_MS)

describe('angleAt', () => {
  it('starts facing front', () => {
    expect(angleAt(0)).toBe(0)
  })

  it('holds facing front at the start of each sway', () => {
    expect(angleAt(500)).toBe(0)
  })

  it('sways both ways by about 30-40 degrees', () => {
    const swaying = samples.filter((t) => t < CYCLE_MS - 3000).map(angleAt)
    expect(deg(Math.max(...swaying))).toBeGreaterThanOrEqual(30)
    expect(deg(Math.max(...swaying))).toBeLessThanOrEqual(40)
    expect(deg(Math.min(...swaying))).toBeLessThanOrEqual(-30)
    expect(deg(Math.min(...swaying))).toBeGreaterThanOrEqual(-40)
  })

  it('occasionally turns all the way around', () => {
    const angles = samples.map(angleAt)
    expect(Math.max(...angles)).toBeGreaterThan(Math.PI * 1.9)
    expect(angles.some((angle) => Math.abs(angle - Math.PI) < 0.05)).toBe(true)
  })

  it('repeats each cycle and ends each cycle facing front', () => {
    expect(gap(angleAt(CYCLE_MS), 0)).toBeCloseTo(0, 5)
    expect(angleAt(CYCLE_MS + 1234)).toBeCloseTo(angleAt(1234), 8)
    expect(gap(angleAt(CYCLE_MS - 1), 0)).toBeCloseTo(0, 2)
  })

  it('moves smoothly: no jump larger than a few degrees per 16 ms frame', () => {
    let previous = angleAt(0)
    for (let t = 16; t < CYCLE_MS * 2; t += 16) {
      const angle = angleAt(t)
      expect(Math.abs(deg(gap(angle, previous)))).toBeLessThan(5)
      previous = angle
    }
  })

  it('eases into and out of the turn instead of starting at full speed', () => {
    const turnStart = CYCLE_MS - 3000
    const early = Math.abs(angleAt(turnStart + 100) - angleAt(turnStart))
    const middle = Math.abs(angleAt(turnStart + 1550) - angleAt(turnStart + 1450))
    expect(early).toBeLessThan(middle)
  })
})
