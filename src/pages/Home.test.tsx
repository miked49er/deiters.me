import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from './Home'
import { loadProjectsStore } from '../lib/projectsStore'
import { SECTION_LINKS } from '../lib/sections'

describe('Home', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('gives every nav hash link a matching element id', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response(JSON.stringify({ projects: [], moreProjects: null })))))
    await loadProjectsStore()
    const { container } = render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    )

    for (const { href, label } of SECTION_LINKS) {
      expect(screen.getByText(`[ ${label.toLowerCase()} ]`)).toHaveAttribute('href', href)
      expect(container.querySelector(href)).not.toBeNull()
    }
  })
})
