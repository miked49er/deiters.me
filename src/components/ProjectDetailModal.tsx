import { useEffect, useState } from 'react'
import type { Project } from '../types/project'
import { projectImageSrc } from '../lib/projectImageSrc'
import BracketLink from './BracketLink'
import ImageWithSkeleton from './ImageWithSkeleton'
import { ProjectBanner, ProjectWindowHeader } from './ProjectChrome'
import { useProjects } from '../projects/useProjects'
import { SiteLink, ThumbnailStrip } from './ProjectDetailParts'

const TITLE_FONT_SIZE = 9

interface ProjectDetailModalProps {
  project: Project
  onClose: () => void
  onThumbClick: (index: number) => void
}

export default function ProjectDetailModal({ project, onClose, onThumbClick }: ProjectDetailModalProps) {
  const { getBanner } = useProjects()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-6 transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`mt-8 mb-8 w-full max-w-3xl overflow-hidden rounded-xl border border-secondary/10 bg-primary shadow-xl shadow-black/30 transition-all duration-200 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <ProjectWindowHeader project={project}>
          <BracketLink className="ml-auto" onClick={onClose} aria-label="Close">
            [ x ]
          </BracketLink>
        </ProjectWindowHeader>
        <ImageWithSkeleton
          src={projectImageSrc(project, project.featureImage)}
          alt={project.name}
          wrapperClassName="h-64 w-full"
          className="h-full w-full object-cover"
        />
        <div className="p-6">
          <ProjectBanner
            project={project}
            banner={getBanner(project.asciiFile)}
            bannerClassName="overflow-x-auto pb-2 leading-[1.15] text-banner"
            bannerFontSize={TITLE_FONT_SIZE}
            nameClassName="text-2xl font-semibold text-secondary"
          />
          <h2 className="sr-only">{project.name}</h2>
          <p className="mt-4 leading-relaxed text-secondary/70">{project.details}</p>

          <SiteLink project={project} className="mt-4 inline-block" />

          <ThumbnailStrip
            project={project}
            onSelect={onThumbClick}
            className="mt-6 flex gap-2 overflow-x-auto border-t border-secondary/10 pt-4"
            thumbClassName="h-20 w-20 flex-shrink-0 rounded-lg border border-secondary/10"
          />
        </div>
      </div>
    </div>
  )
}
