import { vi } from 'vitest'

// Fake matchMedia driven by a viewport width; supports min-width queries and live resize.
export function stubViewport(initialWidth: number) {
  let width = initialWidth
  const lists = new Set<{ query: string; listener: () => void }>()
  const matches = (query: string) => width >= Number(/min-width:\s*(\d+)px/.exec(query)?.[1] ?? Infinity)

  vi.stubGlobal('matchMedia', (query: string) => ({
    get matches() {
      return matches(query)
    },
    addEventListener: (_: string, listener: () => void) => lists.add({ query, listener }),
    removeEventListener: (_: string, listener: () => void) => {
      for (const l of lists) if (l.listener === listener) lists.delete(l)
    },
  }))

  return {
    resize(next: number) {
      width = next
      lists.forEach((l) => l.listener())
    },
  }
}
