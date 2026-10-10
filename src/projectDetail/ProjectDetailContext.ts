import { createContext } from 'react'
import type { Project } from '../types/project'

export interface ProjectDetailApi {
  /** Id of the project whose Project Detail is open, or null. */
  openId: number | null
  isOpen: (id: number) => boolean
  open: (id: number) => void
  close: () => void
  toggle: (id: number) => void
  /** Opens the Lightbox on one of the project's images. */
  openImage: (project: Project, index: number) => void
}

export const ProjectDetailContext = createContext<ProjectDetailApi | null>(null)
