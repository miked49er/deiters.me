import { useContext } from 'react'
import { ProjectsContext } from './ProjectsContext'
import type { ProjectsSeam } from './projectsSeam'

export function useProjects(): ProjectsSeam {
  const seam = useContext(ProjectsContext)
  if (!seam) throw new Error('useProjects must be used within a ProjectsProvider')
  return seam
}
