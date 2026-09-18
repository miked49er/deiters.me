import type { Project } from '../types/project'
import { getProjectsData, getProjectsError } from '../lib/projectsStore'

interface ProjectsData {
  projects: Project[]
  moreProjects: Project
}

interface UseProjectsResult {
  data: ProjectsData | null
  error: unknown
}

export function useProjects(): UseProjectsResult {
  return { data: getProjectsData(), error: getProjectsError() }
}
