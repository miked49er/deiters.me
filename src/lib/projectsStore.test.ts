import { beforeEach, describe, expect, it, vi, afterEach } from 'vitest'

// The store is a module singleton, so each test loads a fresh copy.
const freshStore = () => import('./projectsStore')

const projectsJson = {
  projects: [
    { id: 1, asciiFile: '/a.txt' },
    { id: 2, asciiFile: '/a.txt' },
  ],
}

describe('projectsStore', () => {
  beforeEach(() => vi.resetModules())
  afterEach(() => vi.unstubAllGlobals())

  it('loads projects and one banner per distinct ascii file', async () => {
    const fetchMock = vi.fn((input: RequestInfo | URL) =>
      Promise.resolve(new Response(String(input).endsWith('/data/projects.json') ? JSON.stringify(projectsJson) : 'banner')),
    )
    vi.stubGlobal('fetch', fetchMock)
    const store = await freshStore()

    await store.loadProjectsStore()

    expect(store.getProjectsData()?.projects).toHaveLength(2)
    expect(store.getAsciiBanner('/a.txt')).toBe('banner')
    expect(store.getProjectsError()).toBeNull()
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('treats a non-ok banner response as no banner', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo | URL) =>
        Promise.resolve(
          String(input).endsWith('/data/projects.json')
            ? new Response(JSON.stringify(projectsJson))
            : new Response('Not Found', { status: 404 }),
        ),
      ),
    )
    const store = await freshStore()

    await store.loadProjectsStore()

    expect(store.getAsciiBanner('/a.txt')).toBeNull()
    expect(store.getProjectsError()).toBeNull()
  })

  it('keeps projects and records no error when a banner fetch rejects', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn((input: RequestInfo | URL) =>
        String(input).endsWith('/data/projects.json')
          ? Promise.resolve(new Response(JSON.stringify(projectsJson)))
          : Promise.reject(new TypeError('Failed to fetch')),
      ),
    )
    const store = await freshStore()

    await store.loadProjectsStore()

    expect(store.getProjectsData()?.projects).toHaveLength(2)
    expect(store.getAsciiBanner('/a.txt')).toBeNull()
    expect(store.getProjectsError()).toBeNull()
  })

  it('records an error when projects.json fails to load', async () => {
    vi.stubGlobal('fetch', vi.fn(() => Promise.resolve(new Response('nope', { status: 500 }))))
    const store = await freshStore()

    await store.loadProjectsStore()

    expect(store.getProjectsData()).toBeNull()
    expect(store.getProjectsError()).toBeInstanceOf(Error)
  })
})
