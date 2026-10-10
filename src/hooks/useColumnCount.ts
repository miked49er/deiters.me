import { useMediaQuery } from './useMediaQuery'

// The only definition of the Projects grid breakpoints. They equal Tailwind's
// default `sm` (40rem = 640px) and `lg` (64rem = 1024px); a test pins them so
// they can't silently drift from the CSS the rest of the page uses.
export const GRID_BREAKPOINTS = {
  sm: '(min-width: 640px)',
  lg: '(min-width: 1024px)',
} as const

// CSS `columns` fills top-to-bottom per column, scrambling reading order —
// tracking the active breakpoint lets callers round-robin projects instead.
export function useColumnCount(): number {
  const lg = useMediaQuery(GRID_BREAKPOINTS.lg)
  const sm = useMediaQuery(GRID_BREAKPOINTS.sm)
  if (lg) return 3
  if (sm) return 2
  return 1
}
