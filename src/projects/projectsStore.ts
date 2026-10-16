import type { Project } from './project';

/** Outcome of loading projects: ready with the projects, or errored. Never both. */
type ProjectsLoadState = { status: 'ready'; projects: Project[] } | { status: 'error'; error: unknown };

/** Where components read projects and their Project Banners. Narrow on `status` before reading projects. */
export type ProjectsStore = ProjectsLoadState & {
  /** The ASCII Project Banner for a project, or null when there is none (it then falls back to the project name). */
  getBanner(project: Project): string | null;
};
