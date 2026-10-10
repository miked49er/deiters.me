import { createContext } from 'react'
import type { ProjectsSeam } from './projectsSeam'

export const ProjectsContext = createContext<ProjectsSeam | null>(null)

export const ProjectsProvider = ProjectsContext.Provider
