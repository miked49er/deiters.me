import type { ProjectsData } from '../types/project'
import type { ProjectsSeam } from './projectsSeam'
import { createInMemoryProjects } from './inMemoryProjects'

/** Loads projects.json and each distinct banner file once, before first render. */
export async function loadProductionProjects(): Promise<ProjectsSeam> {
  try {
    const res = await fetch('/data/projects.json')
    if (!res.ok) {
      throw new Error(`Failed to load projects.json: ${res.status}`)
    }
    const json = (await res.json()) as ProjectsData

    const banners: Record<string, string> = {}
    const asciiFiles = [...new Set(json.projects.map((p) => p.asciiFile))]
    await Promise.all(
      asciiFiles.map(async (file) => {
        try {
          const bannerRes = await fetch(file)
          if (bannerRes.ok) banners[file] = await bannerRes.text()
        } catch {
          // A missing banner falls back to the project name; it must not fail the site.
        }
      }),
    )
    return createInMemoryProjects({ projects: json.projects, banners })
  } catch (error) {
    return createInMemoryProjects({ error })
  }
}
