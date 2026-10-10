import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { projectImageSrc } from '../lib/projectImageSrc'
import Lightbox from '../components/Lightbox'
import { ProjectDetailContext } from './ProjectDetailContext'
import type { ProjectDetailApi } from './ProjectDetailContext'

interface LightboxState {
  images: string[]
  index: number
}

/**
 * Owns Project Detail open/closed state and the image Lightbox (rendered here
 * once). Presentations - inline expand, modal - read it via useProjectDetail.
 */
export function ProjectDetailProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)

  const api = useMemo<ProjectDetailApi>(
    () => ({
      openId,
      isOpen: (id) => openId === id,
      open: (id) => setOpenId(id),
      close: () => setOpenId(null),
      toggle: (id) => setOpenId((cur) => (cur === id ? null : id)),
      openImage: (project, index) =>
        setLightbox({ images: project.images.map((img) => projectImageSrc(project, img)), index }),
    }),
    [openId],
  )

  const setIndex = useCallback((index: number) => setLightbox((cur) => (cur ? { ...cur, index } : cur)), [])
  const closeLightbox = useCallback(() => setLightbox(null), [])

  return (
    <ProjectDetailContext.Provider value={api}>
      {children}
      <Lightbox
        images={lightbox?.images ?? []}
        index={lightbox?.index ?? null}
        onIndexChange={setIndex}
        onClose={closeLightbox}
      />
    </ProjectDetailContext.Provider>
  )
}
