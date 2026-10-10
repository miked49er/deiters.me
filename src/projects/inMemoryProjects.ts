import type { Project } from '../types/project'
import type { ProjectsSeam } from './projectsSeam'

interface InMemoryProjectsOptions {
  projects?: Project[]
  banners?: Record<string, string>
  error?: unknown
}

/** Seam adapter backed by fixtures; the production adapter also builds on it. */
export function createInMemoryProjects({ projects, banners = {}, error = null }: InMemoryProjectsOptions = {}): ProjectsSeam {
  return {
    data: projects ? { projects } : null,
    error,
    getBanner(asciiFile) {
      return banners[asciiFile] ?? null
    },
  }
}
