import { useEffect, useState } from 'react'
import type { Project } from '../types/project'

interface ProjectsData {
  projects: Project[]
  moreProjects: Project
}

interface UseProjectsResult {
  data: ProjectsData | null
  error: unknown
}

export function useProjects(): UseProjectsResult {
  const [data, setData] = useState<ProjectsData | null>(null)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false

    fetch('/data/projects.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load projects.json: ${res.status}`)
        }
        return res.json() as Promise<ProjectsData>
      })
      .then((json) => {
        if (!cancelled) setData(json)
      })
      .catch((err: unknown) => {
        if (!cancelled) setError(err)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { data, error }
}
