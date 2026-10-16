import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProjectsStoreContext } from './projects/ProjectsStoreContext';
import { loadProductionProjectsStore } from './projects/productionProjects';

const projectsStore = await loadProductionProjectsStore();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectsStoreContext.Provider value={projectsStore}>
      <App />
    </ProjectsStoreContext.Provider>
  </StrictMode>,
);
