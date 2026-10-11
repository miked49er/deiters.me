import { ProjectDetailProvider } from '../projectDetail/ProjectDetail'
import { useProjectDetail } from '../projectDetail/useProjectDetail'
import { useProjects } from '../projects/useProjects'
import { useColumnCount } from '../hooks/useColumnCount'
import { distributeIntoColumns } from '../lib/columnLayout'
import Header from '../components/Header'
import ProjectDetailModal from '../projectDetail/ProjectDetailModal'
import { PROJECT_CARD_CLASS, ProjectBanner, ProjectFeatureImage, ProjectWindowHeader } from '../components/ProjectChrome'
import SectionBanner from '../components/SectionBanner'
import { PROJECTS_TITLE } from '../data/ascii'
import type { Project } from '../types/project'

// Sized to fit the widest ascii banner in public/data/projects.json without clipping.
const TITLE_FONT_SIZE = 7

function Card({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const { getBanner } = useProjects()
  return (
    <button
      onClick={onOpen}
      className={`group mb-6 flex w-full flex-col text-left ${PROJECT_CARD_CLASS}`}
    >
      <ProjectWindowHeader project={project} />
      <div className="h-40 w-full overflow-hidden">
        <ProjectFeatureImage project={project} zoomClassName="group-hover:scale-105" loading="lazy" decoding="async" />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="pb-1">
          <ProjectBanner
            project={project}
            banner={getBanner(project.asciiFile)}
            bannerClassName="leading-[1.15] whitespace-pre text-banner"
            bannerFontSize={TITLE_FONT_SIZE}
            nameClassName="font-semibold text-secondary"
          />
        </div>
        <h3 className="sr-only">{project.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary/70">{project.details}</p>
      </div>
    </button>
  )
}

function ProjectsPage() {
  const { data, error } = useProjects()
  const detail = useProjectDetail()
  const columnCount = useColumnCount()

  const openProject = data?.projects.find((p) => p.id === detail.openId) ?? null

  const columns = distributeIntoColumns(data?.projects ?? [], columnCount)

  return (
    <main className="min-h-screen bg-primary font-sans text-secondary">
      <Header links={[{ to: '/', label: 'Home' }]} />

      {Boolean(error) && <p className="p-6 text-red-600">Failed to load projects.</p>}

      {data && (
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-16">
          <SectionBanner title={PROJECTS_TITLE} className="mb-6" />
          <h1 className="sr-only">Projects</h1>

          <div className="flex gap-6">
            {columns.map((column, i) => (
              <div key={i} className="flex flex-1 flex-col">
                {column.map((project) => (
                  <Card key={project.id} project={project} onOpen={() => detail.open(project.id)} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {openProject && <ProjectDetailModal project={openProject} />}
    </main>
  )
}

export default function Projects() {
  return (
    <ProjectDetailProvider>
      <ProjectsPage />
    </ProjectDetailProvider>
  )
}
