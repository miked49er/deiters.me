import type { Project } from '../types/project'
import { bannerFitFontSize } from '../lib/bannerFontSize'
import { projectImageSrc } from '../lib/projectImageSrc'
import ImageWithSkeleton from './ImageWithSkeleton'

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

// Fixed px, or scaled to the nearest `@container` up to a max px.
type BannerSize = { fixedPx: number } | { fitMaxPx: number }

interface ProjectBannerProps {
  project: Project
  banner: string | null
  size?: BannerSize
  className: string
  nameClassName: string
}

function bannerFontSize(banner: string, size?: BannerSize): string | undefined {
  if (!size) return undefined
  return 'fitMaxPx' in size ? bannerFitFontSize(banner, size.fitMaxPx) : `${size.fixedPx}px`
}

// Ascii banner, falling back to the plain project name when none is loaded.
export function ProjectBanner({ project, banner, size, className, nameClassName }: ProjectBannerProps) {
  if (!banner) return <p className={nameClassName}>{project.name}</p>
  const fontSize = bannerFontSize(banner, size)
  return (
    <pre aria-hidden className={className} style={fontSize ? { fontSize } : undefined}>
      {banner}
    </pre>
  )
}
