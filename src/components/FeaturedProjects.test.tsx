import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FeaturedProjects from './FeaturedProjects'
import type { Project } from '../types/project'

const project = (over: Partial<Project> = {}): Project => ({
  id: 1,
  name: 'Rooms To Go',
  link: 'rtg',
  site: 'https://example.com',
  location: '/assets/img/rtg/',
  featureImage: 'rtg.avif',
  images: [],
  featured: true,
  asciiFile: '',
  details: 'details',
  ...over,
})

const renderRow = (p: Project) =>
  render(
    <MemoryRouter>
      <FeaturedProjects featured={[p]} totalCount={1} />
    </MemoryRouter>,
  )

describe('FeaturedProjects', () => {
  it('links to the live site when project.site is set', () => {
    renderRow(project())
    const link = screen.getByRole('link', { name: '[ visit site → ]' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('omits the live-site link when project.site is empty', () => {
    renderRow(project({ site: '' }))
    expect(screen.queryByText('[ visit site → ]')).not.toBeInTheDocument()
  })
})
