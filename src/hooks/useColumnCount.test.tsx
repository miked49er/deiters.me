/// <reference types="node" />
import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { readFileSync } from 'node:fs'
import { GRID_BREAKPOINTS, useColumnCount } from './useColumnCount'
import { stubViewport } from '../testViewport'

describe('useColumnCount', () => {
  afterEach(() => vi.unstubAllGlobals())

  it.each([
    [639, 1],
    [640, 2],
    [1023, 2],
    [1024, 3],
  ])('at %ipx wide uses %i columns', (width, columns) => {
    stubViewport(width)
    expect(renderHook(() => useColumnCount()).result.current).toBe(columns)
  })

  it('follows live viewport changes', () => {
    const viewport = stubViewport(500)
    const { result } = renderHook(() => useColumnCount())
    expect(result.current).toBe(1)
    act(() => viewport.resize(800))
    expect(result.current).toBe(2)
    act(() => viewport.resize(1200))
    expect(result.current).toBe(3)
    act(() => viewport.resize(300))
    expect(result.current).toBe(1)
  })

  it('falls back to 1 column when matchMedia is unavailable', () => {
    vi.stubGlobal('matchMedia', undefined)
    expect(renderHook(() => useColumnCount()).result.current).toBe(1)
  })
})

describe('GRID_BREAKPOINTS', () => {
  it('match the Tailwind sm and lg breakpoints', () => {
    const tailwindTheme = readFileSync('node_modules/tailwindcss/theme.css', 'utf8')
    const px = (name: string) => Number(new RegExp(`--breakpoint-${name}:\\s*([\\d.]+)rem`).exec(tailwindTheme)?.[1]) * 16
    expect(GRID_BREAKPOINTS.sm).toBe(`(min-width: ${px('sm')}px)`)
    expect(GRID_BREAKPOINTS.lg).toBe(`(min-width: ${px('lg')}px)`)
  })
})
