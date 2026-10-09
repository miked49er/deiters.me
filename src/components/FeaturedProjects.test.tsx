import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
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
      <FeaturedProjects projects={[p]} />
    </MemoryRouter>,
  )

const LINK = '[ visit site → ]'

describe('FeaturedProjects', () => {
  it('hides the live-site link until the row is expanded', () => {
    renderRow(project())
    expect(screen.queryByText(LINK)).not.toBeInTheDocument()
  })

  it('shows the live-site link above "Show less" when expanded', () => {
    renderRow(project())
    fireEvent.click(screen.getByText('Read more'))

    const link = screen.getByRole('link', { name: LINK })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    const showLess = screen.getByText('Show less')
    expect(link.compareDocumentPosition(showLess) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('omits the live-site link when project.site is empty', () => {
    renderRow(project({ site: '' }))
    fireEvent.click(screen.getByText('Read more'))
    expect(screen.queryByText(LINK)).not.toBeInTheDocument()
  })
})
