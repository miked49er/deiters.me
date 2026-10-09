const SWAY_AMPLITUDE = (35 * Math.PI) / 180
const SWAY_MS = 6000
const SWAY_HOLD = 0.2 // fraction of each sway spent facing front
const SWAYS_PER_CYCLE = 3
const TURN_MS = 3000

export const CYCLE_MS = SWAY_MS * SWAYS_PER_CYCLE + TURN_MS

/** Rotation about the vertical axis in radians (0 = facing front) at `ms` of banner time. */
export function angleAt(ms: number): number {
  const t = ms % CYCLE_MS
  const swayEnd = SWAY_MS * SWAYS_PER_CYCLE

  if (t >= swayEnd) {
    const progress = (t - swayEnd) / TURN_MS
    return Math.PI * 2 * (0.5 - 0.5 * Math.cos(Math.PI * progress))
  }

  const phase = (t % SWAY_MS) / SWAY_MS
  const moving = Math.max(0, (phase - SWAY_HOLD) / (1 - SWAY_HOLD))
  return SWAY_AMPLITUDE * Math.sin(Math.PI * 2 * moving)
}
