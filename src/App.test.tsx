import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { ProjectsProvider } from './projects/ProjectsContext'
import { createInMemoryProjects } from './projects/inMemoryProjects'
import { makeProject } from './testProject'

const renderApp = (projects = [] as ReturnType<typeof makeProject>[]) =>
  render(
    <ProjectsProvider value={createInMemoryProjects({ projects })}>
      <App />
    </ProjectsProvider>,
  )

describe('App', () => {
  it('renders the header and featured project data from the projects seam', () => {
    renderApp([makeProject({ asciiFile: '/assets/img/rtg/ascii.txt' })])

    expect(screen.getByText('[ about ]')).toBeInTheDocument()
    expect(screen.getByText('[ projects ]')).toBeInTheDocument()
    expect(screen.getByText('rtg.tsx')).toBeInTheDocument()
  })

  it('redirects an unmatched path to the Landing Page', () => {
    window.history.pushState({}, '', '/this-route-does-not-exist')

    renderApp()

    expect(screen.getByText('[ about ]')).toBeInTheDocument()
    expect(window.location.pathname).toBe('/')
  })

  it('scrolls to the top when the route changes', () => {
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    window.history.pushState({}, '', '/this-route-does-not-exist')

    renderApp()

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, left: 0, behavior: 'instant' })
  })
})
