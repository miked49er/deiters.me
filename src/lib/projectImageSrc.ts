import type { Project } from '../types/project'

export function projectImageSrc(project: Project, file: string): string {
  return `${project.location}${file}`
}
