import type { ReactNode } from 'react'
import type { Project } from '../types/project'
import { bannerFitFontSize } from '../lib/bannerFontSize'
import { projectImageSrc } from '../lib/projectImageSrc'
import ImageWithSkeleton from './ImageWithSkeleton'
import WindowHeader from './WindowHeader'

// Card chrome shared by TerminalWindow, Featured Row and Project Card.
export const CARD_CHROME_CLASS = 'overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03]'
// Featured Row / Project Card: chrome plus elevation and hover highlight.
export const PROJECT_CARD_CLASS = `${CARD_CHROME_CLASS} shadow-xl shadow-black/30 transition-colors hover:border-accent/40`

interface ProjectFeatureImageProps {
  project: Project
  // Zoom-on-hover class differs: `hover:` for a Featured Row, `group-hover:` for a Project Card.
  zoomClassName: string
  loading?: 'lazy' | 'eager'
  decoding?: 'async' | 'sync' | 'auto'
}

export function ProjectFeatureImage({ project, zoomClassName, loading, decoding }: ProjectFeatureImageProps) {
  return (
    <ImageWithSkeleton
      src={projectImageSrc(project, project.featureImage)}
      alt={project.name}
      loading={loading}
      decoding={decoding}
      wrapperClassName="h-full w-full"
      className={`h-full w-full object-cover transition-transform duration-300 ${zoomClassName}`}
    />
  )
}

export function ProjectWindowHeader({ project, children }: { project: Project; children?: ReactNode }) {
  return <WindowHeader label={`${project.link}.tsx`}>{children}</WindowHeader>
}

interface ProjectBannerProps {
  project: Project
  banner: string | null
  // Callers size the banner differently; both stay caller-owned so output is unchanged.
  bannerClassName: string
  bannerFontSize?: number
  // Scale the banner to the nearest `@container`, up to this many px. Takes precedence over bannerFontSize.
  fitMaxPx?: number
  nameClassName: string
}

// Ascii banner, falling back to the plain project name when none is loaded.
export function ProjectBanner({ project, banner, bannerClassName, bannerFontSize, fitMaxPx, nameClassName }: ProjectBannerProps) {
  const fontSize = banner && fitMaxPx ? bannerFitFontSize(banner, fitMaxPx) : bannerFontSize ? `${bannerFontSize}px` : undefined
  return banner ? (
    <pre aria-hidden className={bannerClassName} style={fontSize ? { fontSize } : undefined}>
      {banner}
    </pre>
  ) : (
    <p className={nameClassName}>{project.name}</p>
  )
}
