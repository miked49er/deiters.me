import { useState } from 'react'
import type { Project } from '../types/project'
import { projectImageSrc } from '../lib/projectImageSrc'
import { useLightbox } from './useLightbox'

// Open/closed state for Project Detail plus the thumbnail -> lightbox hand-off.
// Presentation (inline expand vs modal) is up to the caller.
export function useProjectDetail() {
  const [openId, setOpenId] = useState<number | null>(null)
  const lightbox = useLightbox()

  return {
    openId,
    isOpen: (id: number) => openId === id,
    open: (id: number) => setOpenId(id),
    close: () => setOpenId(null),
    toggle: (id: number) => setOpenId((cur) => (cur === id ? null : id)),
    lightbox,
    openImage: (project: Project, index: number) =>
      lightbox.open(project.images.map((img) => projectImageSrc(project, img)), index),
  }
}
