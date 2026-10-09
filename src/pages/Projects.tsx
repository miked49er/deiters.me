import { useProjectDetail } from '../hooks/useProjectDetail'
import { useProjects } from '../hooks/useProjects'
import { useColumnCount } from '../hooks/useColumnCount'
import { projectImageSrc } from '../lib/projectImageSrc'
import { distributeIntoColumns } from '../lib/projectSelection'
import ImageWithSkeleton from '../components/ImageWithSkeleton'
import Header from '../components/Header'
import ProjectDetailModal from '../components/ProjectDetailModal'
import { ProjectBanner, ProjectWindowHeader } from '../components/ProjectChrome'
import { getAsciiBanner } from '../lib/projectsStore'
import Lightbox from '../components/Lightbox'
import SectionBanner from '../components/SectionBanner'
import { PROJECTS_TITLE } from '../data/ascii'
import type { Project } from '../types/project'

// Sized to fit the widest ascii banner in public/data/projects.json without clipping.
const TITLE_FONT_SIZE = 7

function Card({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group mb-6 flex w-full flex-col overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03] text-left shadow-xl shadow-black/30 transition-colors hover:border-accent/40"
    >
      <ProjectWindowHeader project={project} />
      <div className="h-40 w-full overflow-hidden">
        <ImageWithSkeleton
          src={projectImageSrc(project, project.featureImage)}
          alt={project.name}
          loading="lazy"
          decoding="async"
          wrapperClassName="h-full w-full"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="pb-1">
          <ProjectBanner
            project={project}
            banner={getAsciiBanner(project.asciiFile)}
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

export default function Projects() {
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

      {openProject && (
        <ProjectDetailModal
          project={openProject}
          onClose={detail.close}
          onThumbClick={(index) => detail.openImage(openProject, index)}
        />
      )}

      <Lightbox
        images={detail.lightbox.images}
        index={detail.lightbox.index}
        onIndexChange={detail.lightbox.setIndex}
        onClose={detail.lightbox.close}
      />
    </main>
  )
}
