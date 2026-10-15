import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ProjectsContext } from './projects/ProjectsContext';
import { loadProductionProjects } from './projects/productionProjects';

const projects = await loadProductionProjects();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectsContext.Provider value={projects}>
      <App />
    </ProjectsContext.Provider>
  </StrictMode>,
);
