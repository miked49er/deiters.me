import type { ReactNode } from 'react'
import type { Project } from '../types/project'
import { getAsciiBanner } from '../lib/projectsStore'
import WindowHeader from './WindowHeader'

export function ProjectWindowHeader({ project, children }: { project: Project; children?: ReactNode }) {
  return <WindowHeader label={`${project.link}.tsx`}>{children}</WindowHeader>
}

interface ProjectBannerProps {
  project: Project
  // Callers size the banner differently; both stay caller-owned so output is unchanged.
  bannerClassName: string
  bannerFontSize?: number
  nameClassName: string
}

// Ascii banner, falling back to the plain project name when none is loaded.
export function ProjectBanner({ project, bannerClassName, bannerFontSize, nameClassName }: ProjectBannerProps) {
  const banner = getAsciiBanner(project.asciiFile)

  return banner ? (
    <pre
      aria-hidden
      className={bannerClassName}
      style={bannerFontSize ? { fontSize: `${bannerFontSize}px` } : undefined}
    >
      {banner}
    </pre>
  ) : (
    <p className={nameClassName}>{project.name}</p>
  )
}
