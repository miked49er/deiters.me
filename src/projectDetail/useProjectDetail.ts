import { useContext } from 'react'
import { ProjectDetailContext } from './ProjectDetailContext'
import type { ProjectDetailApi } from './ProjectDetailContext'

export function useProjectDetail(): ProjectDetailApi {
  const api = useContext(ProjectDetailContext)
  if (!api) throw new Error('useProjectDetail must be used within a ProjectDetailProvider')
  return api
}
