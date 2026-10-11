import type { Project } from '../types/project'

// Filename-style title shown in a project's window header.
export function projectWindowLabel(project: Project): string {
  return `${project.link}.tsx`
}
