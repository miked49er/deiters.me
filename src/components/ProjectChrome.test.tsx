import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectBanner, ProjectWindowHeader } from './ProjectChrome'
import { loadProjectsStore } from '../lib/projectsStore'
import { makeProject } from '../testProject'

describe('ProjectWindowHeader', () => {
  it('labels the window with the project link', () => {
    render(<ProjectWindowHeader project={makeProject()} />)
    expect(screen.getByText('rtg.tsx')).toBeInTheDocument()
  })
})

describe('ProjectBanner', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('falls back to the project name when no banner is loaded', () => {
    render(<ProjectBanner project={makeProject()} bannerClassName="b" nameClassName="n" />)
    expect(screen.getByText('Rooms To Go')).toHaveClass('n')
  })

  it('renders the loaded ascii banner at the requested font size', async () => {
    const project = makeProject({ asciiFile: '/ascii.txt' })
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo | URL) =>
        Promise.resolve(
          new Response(
            String(input).endsWith('/data/projects.json')
              ? JSON.stringify({ projects: [project], moreProjects: null })
              : 'ascii art',
          ),
        ),
      ),
    )
    await loadProjectsStore()

    render(<ProjectBanner project={project} bannerClassName="b" bannerFontSize={7} nameClassName="n" />)
    const pre = screen.getByText('ascii art')
    expect(pre).toHaveClass('b')
    expect(pre).toHaveStyle({ fontSize: '7px' })
    expect(screen.queryByText('Rooms To Go')).not.toBeInTheDocument()
  })
})
