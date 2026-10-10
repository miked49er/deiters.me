import { describe, expect, it } from 'vitest'
import { distributeIntoColumns } from './projectSelection'

describe('distributeIntoColumns', () => {
  it('deals items round-robin across columns', () => {
    expect(distributeIntoColumns([1, 2, 3, 4, 5], 3)).toEqual([[1, 4], [2, 5], [3]])
  })

  it('returns empty columns when there are no items', () => {
    expect(distributeIntoColumns([], 2)).toEqual([[], []])
  })

  it('puts everything in one column when columnCount is 1', () => {
    expect(distributeIntoColumns([1, 2, 3], 1)).toEqual([[1, 2, 3]])
  })
})
