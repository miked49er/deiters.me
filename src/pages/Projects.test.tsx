import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Projects from './Projects'
import { ProjectsProvider } from '../projects/ProjectsContext'
import { createInMemoryProjects } from '../projects/inMemoryProjects'
import { makeProject } from '../testProject'
import { stubViewport } from '../testViewport'

function renderProjects() {
  const project = makeProject({ name: 'Card Project', featureImage: 'feature.png' })
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  render(
    <ProjectsProvider value={createInMemoryProjects({ projects: [project] })}>
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    </ProjectsProvider>,
  )
  return screen.getByAltText('Card Project')
}

describe('Projects card Feature Image', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows the skeleton until the image loads', () => {
    const img = renderProjects()
    expect(screen.getByTestId('image-skeleton')).toBeInTheDocument()
    fireEvent.load(img)
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('clears the skeleton when the image fails to load', () => {
    const img = renderProjects()
    fireEvent.error(img)
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('loads lazily and decodes asynchronously', () => {
    const img = renderProjects()
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(img).toHaveAttribute('decoding', 'async')
  })
})

describe('Projects grid layout', () => {
  afterEach(() => vi.unstubAllGlobals())

  function renderGrid(width: number | null) {
    const viewport = width === null ? null : stubViewport(width)
    if (width === null) vi.stubGlobal('matchMedia', undefined)
    const projects = Array.from({ length: 7 }, (_, i) => makeProject({ id: i, name: `P${i}`, featureImage: `${i}.png` }))
    render(
      <ProjectsProvider value={createInMemoryProjects({ projects })}>
        <MemoryRouter>
          <Projects />
        </MemoryRouter>
      </ProjectsProvider>,
    )
    return viewport
  }

  const columnNames = () => {
    const first = screen.getAllByRole('heading', { level: 3, hidden: true })[0].closest('button')!
    return Array.from(first.parentElement!.parentElement!.children).map((col) =>
      Array.from(col.querySelectorAll('h3')).map((h) => h.textContent),
    )
  }

  it('renders one column without throwing when matchMedia is unavailable', () => {
    renderGrid(null)
    expect(columnNames()).toEqual([['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6']])
  })

  it('deals items left to right, in order, into 2 columns', () => {
    renderGrid(700)
    expect(columnNames()).toEqual([
      ['P0', 'P2', 'P4', 'P6'],
      ['P1', 'P3', 'P5'],
    ])
  })

  it('deals items left to right, in order, into 3 columns', () => {
    renderGrid(1100)
    expect(columnNames()).toEqual([
      ['P0', 'P3', 'P6'],
      ['P1', 'P4'],
      ['P2', 'P5'],
    ])
  })

  it('redistributes when the viewport crosses a breakpoint', () => {
    const viewport = renderGrid(500)!
    expect(columnNames()).toHaveLength(1)
    act(() => viewport.resize(1100))
    expect(columnNames()).toHaveLength(3)
    act(() => viewport.resize(700))
    expect(columnNames()).toHaveLength(2)
  })
})
