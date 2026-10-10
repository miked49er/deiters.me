import { useEffect, useState } from 'react'
import type { Project } from '../types/project'
import { projectImageSrc } from '../lib/projectImageSrc'
import BracketLink from '../components/BracketLink'
import ImageWithSkeleton from '../components/ImageWithSkeleton'
import { ProjectBanner, ProjectWindowHeader } from '../components/ProjectChrome'
import { useOverlay } from '../overlays/useOverlay'
import { useProjectDetail } from './useProjectDetail'
import { useProjects } from '../projects/useProjects'
import { bannerFitFontSize } from '../lib/bannerFontSize'
import { SiteLink, ThumbnailStrip } from './ProjectDetailParts'

const TITLE_FONT_SIZE = 9

interface ProjectDetailModalProps {
  project: Project
}

export default function ProjectDetailModal({ project }: ProjectDetailModalProps) {
  const { getBanner } = useProjects()
  const banner = getBanner(project.asciiFile)
  const { close: onClose, openImage } = useProjectDetail()
  const [visible, setVisible] = useState(false)

  useOverlay(true, onClose)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 transition-opacity sm:p-6 duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        // Full-screen below sm; the card only appears from sm up. overflow stays visible on mobile so the header can stick to the overlay's scroll.
        className={`min-h-full w-full max-w-3xl bg-primary transition-all duration-200 sm:mt-8 sm:mb-8 sm:min-h-0 sm:overflow-hidden sm:rounded-xl sm:border sm:border-secondary/10 sm:shadow-xl sm:shadow-black/30 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-primary sm:static">
          <ProjectWindowHeader project={project}>
            <BracketLink className="ml-auto" onClick={onClose} aria-label="Close">
              [ x ]
            </BracketLink>
          </ProjectWindowHeader>
        </div>
        <ImageWithSkeleton
          src={projectImageSrc(project, project.featureImage)}
          alt={project.name}
          wrapperClassName="h-64 w-full"
          className="h-full w-full object-cover"
        />
        <div className="p-6">
          <div className="@container">
            <ProjectBanner
              project={project}
              banner={banner}
              bannerClassName="pb-2 leading-[1.15] text-banner"
              bannerFontSize={banner ? bannerFitFontSize(banner, TITLE_FONT_SIZE) : undefined}
              nameClassName="text-2xl font-semibold text-secondary"
            />
          </div>
          <h2 className="sr-only">{project.name}</h2>
          <p className="mt-4 leading-relaxed text-secondary/70">{project.details}</p>

          <SiteLink project={project} className="mt-4 inline-block" />

          <ThumbnailStrip
            project={project}
            onSelect={(index) => openImage(project, index)}
            className="mt-6 flex gap-2 overflow-x-auto border-t border-secondary/10 pt-4"
            thumbClassName="h-20 w-20 flex-shrink-0 rounded-lg border border-secondary/10"
          />
        </div>
      </div>
    </div>
  )
}
