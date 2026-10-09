import { describe, expect, it } from 'vitest'
import { distributeIntoColumns, selectFeatured } from './projectSelection'
import type { Project } from '../types/project'

const project = (id: number, featured: boolean) => ({ id, featured }) as Project

describe('selectFeatured', () => {
  it('keeps only featured projects, in order', () => {
    const result = selectFeatured([project(1, true), project(2, false), project(3, true)])
    expect(result.map((p) => p.id)).toEqual([1, 3])
  })
})

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
