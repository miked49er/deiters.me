import { afterEach, describe, expect, it, vi } from 'vitest'
import { loadProductionProjects } from './productionProjects'

const projectsJson = {
  projects: [
    { id: 1, name: 'One', asciiFile: '/a.txt' },
    { id: 2, name: 'Two', asciiFile: '/a.txt' },
  ],
}

const isProjectsJson = (input: RequestInfo | URL) => String(input).endsWith('/data/projects.json')

describe('production projects adapter', () => {
  afterEach(() => vi.unstubAllGlobals())

  it('loads projects and one banner per distinct ascii file', async () => {
    const fetchMock = vi.fn((input: RequestInfo | URL) =>
      Promise.resolve(new Response(isProjectsJson(input) ? JSON.stringify(projectsJson) : 'banner')),
    )
    vi.stubGlobal('fetch', fetchMock)

    const seam = await loadProductionProjects()

    expect(seam.data?.projects).toHaveLength(2)
    expect(seam.getBanner('/a.txt')).toBe('banner')
    expect(seam.error).toBeNull()
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('has no banner when a banner response is not ok', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo | URL) =>
        Promise.resolve(
          isProjectsJson(input) ? new Response(JSON.stringify(projectsJson)) : new Response('Not Found', { status: 404 }),
        ),
      ),
    )

    const seam = await loadProductionProjects()

    expect(seam.getBanner('/a.txt')).toBeNull()
    expect(seam.error).toBeNull()
  })

  it('has no banner when a banner fetch rejects', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo | URL) =>
        isProjectsJson(input)
          ? Promise.resolve(new Response(JSON.stringify(projectsJson)))
          : Promise.reject(new TypeError('Failed to fetch')),
      ),
    )

    const seam = await loadProductionProjects()

    expect(seam.data?.projects).toHaveLength(2)
    expect(seam.getBanner('/a.txt')).toBeNull()
    expect(seam.error).toBeNull()
  })

  it('surfaces an error when projects.json fails to load', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response('nope', { status: 500 }))))

    const seam = await loadProductionProjects()

    expect(seam.data).toBeNull()
    expect(seam.error).toBeInstanceOf(Error)
  })
})
