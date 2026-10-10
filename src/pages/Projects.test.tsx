import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Projects from './Projects'
import { ProjectsProvider } from '../projects/ProjectsContext'
import { createInMemoryProjects } from '../projects/inMemoryProjects'
import { makeProject } from '../testProject'

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
