import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ProjectsProvider } from './projects/ProjectsContext'
import { loadProductionProjects } from './projects/productionProjects'

const projects = await loadProductionProjects()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProjectsProvider value={projects}>
      <App />
    </ProjectsProvider>
  </StrictMode>,
)
