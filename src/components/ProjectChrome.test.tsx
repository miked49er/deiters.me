import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectBanner, ProjectFeatureImage, PROJECT_TILE_CLASS } from './ProjectChrome'
import { createInMemoryProjects } from '../projects/inMemoryProjects'
import { makeProject } from '../testProject'

describe('ProjectBanner', () => {
  it('falls back to the project name when no banner is loaded', () => {
    render(<ProjectBanner project={makeProject()} banner={null} className="b" nameClassName="n" />)
    expect(screen.getByText('Rooms To Go')).toHaveClass('n')
  })

  it('renders the loaded ascii banner at the requested font size', () => {
    const project = makeProject({ asciiFile: '/ascii.txt' })
    const seam = createInMemoryProjects({ projects: [project], banners: { '/ascii.txt': 'ascii art' } })

    render(<ProjectBanner project={project} banner={seam.getBanner(project.asciiFile)} className="b" size={{ fixedPx: 7 }} nameClassName="n" />)
    const pre = screen.getByText('ascii art')
    expect(pre).toHaveClass('b')
    expect(pre).toHaveStyle({ fontSize: '7px' })
    expect(screen.queryByText('Rooms To Go')).not.toBeInTheDocument()
  })

  it('fits the banner to its container up to a max size', () => {
    const project = makeProject()
    render(<ProjectBanner project={project} banner={'a'.repeat(100)} className="b" size={{ fitMaxPx: 10 }} nameClassName="n" />)
    expect(screen.getByText('a'.repeat(100))).toHaveStyle({ fontSize: 'min(10px, calc(100cqw / 65))' })
  })
})

describe('ProjectFeatureImage', () => {
  it('shows the Feature Image named after the project, with caller-owned zoom and loading attrs', () => {
    render(<ProjectFeatureImage project={makeProject()} zoomClassName="z" loading="lazy" />)
    const img = screen.getByAltText('Rooms To Go')
    expect(img).toHaveAttribute('src', '/assets/img/rtg/rtg.avif')
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(img).toHaveClass('object-cover', 'z')
  })
})

describe('PROJECT_TILE_CLASS', () => {
  it('carries the shared chrome', () => {
    expect(PROJECT_TILE_CLASS).toContain('rounded-xl')
    expect(PROJECT_TILE_CLASS).toContain('hover:border-accent/40')
  })
})
