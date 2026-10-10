import type { ReactNode } from 'react'
import type { Project } from '../types/project'
import WindowHeader from './WindowHeader'

export function ProjectWindowHeader({ project, children }: { project: Project; children?: ReactNode }) {
  return <WindowHeader label={`${project.link}.tsx`}>{children}</WindowHeader>
}

interface ProjectBannerProps {
  project: Project
  banner: string | null
  // Callers size the banner differently; both stay caller-owned so output is unchanged.
  bannerClassName: string
  // A number is px; a string is a full CSS font-size (e.g. a container-query expression).
  bannerFontSize?: number | string
  nameClassName: string
}

// Ascii banner, falling back to the plain project name when none is loaded.
export function ProjectBanner({ project, banner, bannerClassName, bannerFontSize, nameClassName }: ProjectBannerProps) {
  return banner ? (
    <pre
      aria-hidden
      className={bannerClassName}
      style={bannerFontSize ? { fontSize: typeof bannerFontSize === 'number' ? `${bannerFontSize}px` : bannerFontSize } : undefined}
    >
      {banner}
    </pre>
  ) : (
    <p className={nameClassName}>{project.name}</p>
  )
}
