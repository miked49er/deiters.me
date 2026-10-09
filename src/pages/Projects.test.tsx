import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Projects from './Projects'
import { loadProjectsStore } from '../lib/projectsStore'
import { makeProject } from '../testProject'

async function renderProjects() {
  const project = makeProject({ name: 'Card Project', featureImage: 'feature.png' })
  vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response(JSON.stringify({ projects: [project] })))))
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  await loadProjectsStore()
  render(
    <MemoryRouter>
      <Projects />
    </MemoryRouter>,
  )
  return screen.getByAltText('Card Project')
}

describe('Projects card Feature Image', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('shows the skeleton until the image loads', async () => {
    const img = await renderProjects()
    expect(screen.getByTestId('image-skeleton')).toBeInTheDocument()
    fireEvent.load(img)
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('clears the skeleton when the image fails to load', async () => {
    const img = await renderProjects()
    fireEvent.error(img)
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('loads lazily and decodes asynchronously', async () => {
    const img = await renderProjects()
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(img).toHaveAttribute('decoding', 'async')
  })
})
