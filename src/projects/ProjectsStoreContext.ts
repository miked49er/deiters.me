import { createContext } from 'react';
import type { ProjectsStore } from './projectsStore';

export const ProjectsStoreContext = createContext<ProjectsStore | null>(null);
