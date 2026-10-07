import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import { loadProjectsStore } from './lib/projectsStore'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the header and featured project data loaded from /data/projects.json', async () => {
    const fetchMock = vi.fn((input: RequestInfo | URL) => {
      const url = String(input)
      if (url.endsWith('/data/projects.json')) {
        return Promise.resolve(
          new Response(
            JSON.stringify({
              projects: [
                {
                  id: 1,
                  name: 'Rooms To Go',
                  link: 'rtg',
                  site: '',
                  location: '/assets/img/rtg/',
                  featureImage: 'rtg.avif',
                  images: [],
                  featured: true,
                  asciiFile: '/assets/img/rtg/ascii.txt',
                  details: '',
                },
              ],
              moreProjects: {
                id: 0,
                name: 'More Projects',
                link: '',
                site: '',
                location: '/assets/img/',
                featureImage: 'projects-bg.jpg',
                images: [],
                featured: true,
                asciiFile: '/assets/img/more-projects/ascii.txt',
                details: '',
              },
            }),
          ),
        )
      }
      return Promise.resolve(new Response('ascii art'))
    })
    vi.stubGlobal('fetch', fetchMock)

    await loadProjectsStore()
    render(<App />)

    expect(screen.getByText('[ about ]')).toBeInTheDocument()
    expect(screen.getByText('[ projects ]')).toBeInTheDocument()
    expect(screen.getByText('rtg.tsx')).toBeInTheDocument()
  })

  it('redirects an unmatched path to the Landing Page', async () => {
    const fetchMock = vi.fn(() => Promise.resolve(new Response(JSON.stringify({ projects: [], moreProjects: null }))))
    vi.stubGlobal('fetch', fetchMock)
    window.history.pushState({}, '', '/this-route-does-not-exist')

    await loadProjectsStore()
    render(<App />)

    expect(screen.getByText('[ about ]')).toBeInTheDocument()
    expect(window.location.pathname).toBe('/')
  })

  it('scrolls to the top when the route changes', async () => {
    const fetchMock = vi.fn(() => Promise.resolve(new Response(JSON.stringify({ projects: [], moreProjects: null }))))
    vi.stubGlobal('fetch', fetchMock)
    const scrollTo = vi.fn()
    vi.stubGlobal('scrollTo', scrollTo)
    window.history.pushState({}, '', '/this-route-does-not-exist')

    await loadProjectsStore()
    render(<App />)

    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })
})
