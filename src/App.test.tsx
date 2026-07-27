import { describe, expect, it, vi, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

describe('App', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders the nav and loads project data from /data/projects.json', async () => {
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
                  primary: true,
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
                primary: true,
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

    render(<App />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText('Rooms To Go')).toBeInTheDocument()
    })
  })
})
