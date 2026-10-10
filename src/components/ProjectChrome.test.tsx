import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectBanner, ProjectWindowHeader } from './ProjectChrome'
import { createInMemoryProjects } from '../projects/inMemoryProjects'
import { makeProject } from '../testProject'

describe('ProjectWindowHeader', () => {
  it('labels the window with the project link', () => {
    render(<ProjectWindowHeader project={makeProject()} />)
    expect(screen.getByText('rtg.tsx')).toBeInTheDocument()
  })
})

describe('ProjectBanner', () => {
  it('falls back to the project name when no banner is loaded', () => {
    render(<ProjectBanner project={makeProject()} banner={null} bannerClassName="b" nameClassName="n" />)
    expect(screen.getByText('Rooms To Go')).toHaveClass('n')
  })

  it('renders the loaded ascii banner at the requested font size', () => {
    const project = makeProject({ asciiFile: '/ascii.txt' })
    const seam = createInMemoryProjects({ projects: [project], banners: { '/ascii.txt': 'ascii art' } })

    render(<ProjectBanner project={project} banner={seam.getBanner(project.asciiFile)} bannerClassName="b" bannerFontSize={7} nameClassName="n" />)
    const pre = screen.getByText('ascii art')
    expect(pre).toHaveClass('b')
    expect(pre).toHaveStyle({ fontSize: '7px' })
    expect(screen.queryByText('Rooms To Go')).not.toBeInTheDocument()
  })
})
