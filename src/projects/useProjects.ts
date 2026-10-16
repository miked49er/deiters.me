import { useContext } from 'react';
import { ProjectsStoreContext } from './ProjectsStoreContext';
import type { ProjectsStore } from './projectsStore';

export function useProjects(): ProjectsStore {
  const store = useContext(ProjectsStoreContext);
  if (!store) throw new Error('useProjects must be used within a ProjectsStoreContext.Provider');
  return store;
}
