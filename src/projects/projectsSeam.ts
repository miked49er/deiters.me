import type { ProjectsData } from '../types/project'

/** The seam components read projects and ASCII banners through. */
export interface ProjectsSeam {
  /** Loaded projects, or null when loading failed. */
  data: ProjectsData | null
  /** The load error, or null. */
  error: unknown
  /** The ASCII banner for an ascii file, or null when there is none (the banner then falls back to the project name). */
  getBanner(asciiFile: string): string | null
}
