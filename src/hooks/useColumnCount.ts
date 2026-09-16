import { useEffect, useState } from 'react'

const BREAKPOINTS: [query: string, columns: number][] = [
  ['(min-width: 1024px)', 3],
  ['(min-width: 640px)', 2],
]

function currentColumnCount(): number {
  for (const [query, columns] of BREAKPOINTS) {
    if (window.matchMedia(query).matches) return columns
  }
  return 1
}

// CSS `columns` fills top-to-bottom per column, scrambling reading order —
// tracking the active breakpoint lets callers round-robin projects instead.
export function useColumnCount(): number {
  const [columns, setColumns] = useState(currentColumnCount)

  useEffect(() => {
    const queries = BREAKPOINTS.map(([query]) => window.matchMedia(query))
    const update = () => setColumns(currentColumnCount())
    queries.forEach((mql) => mql.addEventListener('change', update))
    update()
    return () => queries.forEach((mql) => mql.removeEventListener('change', update))
  }, [])

  return columns
}
