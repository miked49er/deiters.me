import type { Project } from '../types/project'

interface ProjectsData {
  projects: Project[]
  moreProjects: Project
}

const store: {
  data: ProjectsData | null
  error: unknown
  banners: Record<string, string>
} = { data: null, error: null, banners: {} }

export async function loadProjectsStore(): Promise<void> {
  try {
    const res = await fetch('/data/projects.json')
    if (!res.ok) {
      throw new Error(`Failed to load projects.json: ${res.status}`)
    }
    const json = (await res.json()) as ProjectsData
    store.data = json

    const asciiFiles = [...new Set(json.projects.map((p) => p.asciiFile))]
    await Promise.all(
      asciiFiles.map(async (file) => {
        const bannerRes = await fetch(file)
        store.banners[file] = await bannerRes.text()
      }),
    )
  } catch (err) {
    store.error = err
  }
}

export function getProjectsData(): ProjectsData | null {
  return store.data
}

export function getProjectsError(): unknown {
  return store.error
}

export function getAsciiBanner(asciiFile: string): string | null {
  return store.banners[asciiFile] ?? null
}
