import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProjectsProvider } from './ProjectsContext'
import { useProjects } from './useProjects'
import { createInMemoryProjects } from './inMemoryProjects'
import { makeProject } from '../testProject'

function Probe() {
  const { data, getBanner } = useProjects()
  return <p>{`${data?.projects.length}:${getBanner('/a.txt')}`}</p>
}

describe('ProjectsProvider', () => {
  it('supplies the seam to descendants', () => {
    const seam = createInMemoryProjects({ projects: [makeProject({ asciiFile: '/a.txt' })], banners: { '/a.txt': 'art' } })
    render(
      <ProjectsProvider value={seam}>
        <Probe />
      </ProjectsProvider>,
    )
    expect(screen.getByText('1:art')).toBeInTheDocument()
  })

  it('throws when used outside a provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    expect(() => render(<Probe />)).toThrow(/ProjectsProvider/)
    vi.restoreAllMocks()
  })
})
