import type { ReactNode } from 'react'
import type { Project } from '../types/project'
import { bannerFitFontSize } from '../lib/bannerFontSize'
import WindowHeader from './WindowHeader'

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
