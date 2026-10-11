import type { Project } from '../types/project'
import { bannerFitFontSize } from '../lib/bannerFontSize'

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
