// Round-robin so reading order runs left-to-right across columns.
export function distributeIntoColumns<T>(items: T[], columnCount: number): T[][] {
  const columns: T[][] = Array.from({ length: columnCount }, () => [])
  items.forEach((item, i) => columns[i % columnCount].push(item))
  return columns
}
