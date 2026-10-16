import type { Project } from './project';
import type { ProjectsStore } from './projectsStore';

interface InMemoryProjectsOptions {
  projects?: Project[];
  banners?: Record<string, string>;
  /** When given, the store is in the error state and `projects` is ignored. */
  error?: unknown;
}

/** Projects store backed by fixtures; the production loader also builds on it. */
export function createInMemoryProjectsStore({
  projects = [],
  banners = {},
  error,
}: InMemoryProjectsOptions = {}): ProjectsStore {
  const getBanner = (project: Project) => banners[project.asciiFile] ?? null;
  return error === undefined ? { status: 'ready', projects, getBanner } : { status: 'error', error, getBanner };
}
