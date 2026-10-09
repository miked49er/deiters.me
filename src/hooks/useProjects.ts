import type { ProjectsData } from '../types/project'
import { getProjectsData, getProjectsError } from '../lib/projectsStore'

interface UseProjectsResult {
  data: ProjectsData | null
  error: unknown
}

export function useProjects(): UseProjectsResult {
  return { data: getProjectsData(), error: getProjectsError() }
}
