import { useState } from 'react'
import { useProjects } from '../hooks/useProjects'
import { useColumnCount } from '../hooks/useColumnCount'
import { useAsciiBanner } from '../hooks/useAsciiBanner'
import { useLightbox } from '../hooks/useLightbox'
import { projectImageSrc } from '../lib/projectImageSrc'
import Header from '../components/Header'
import HandlebarIcon from '../assets/icons/handlebar.svg?react'
import ProjectDetailModal from '../components/ProjectDetailModal'
import Lightbox from '../components/Lightbox'
import { PROJECTS_TITLE, SLASH_ASCII } from '../data/ascii'
import type { Project } from '../types/project'

// Sized to fit the widest ascii banner in public/data/projects.json without clipping.
const TITLE_FONT_SIZE = 7

function Card({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const banner = useAsciiBanner(project.asciiFile)

  return (
    <button
      onClick={onOpen}
      className="group mb-6 flex w-full flex-col overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03] text-left shadow-xl shadow-black/30 transition-colors hover:border-accent/40"
    >
      <div className="flex items-center gap-2 border-b border-secondary/10 bg-secondary/[0.04] px-4 py-2.5">
        <HandlebarIcon className="h-4 w-8 text-accent" />
        <span className="ml-2 truncate font-mono text-xs text-secondary/40">{project.link}.tsx</span>
      </div>
      <div className="h-40 w-full overflow-hidden">
        <img
          src={projectImageSrc(project, project.featureImage)}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <div className="pb-1">
          {banner ? (
            <pre
              aria-hidden
              className="leading-[1.15] whitespace-pre text-banner"
              style={{ fontSize: `${TITLE_FONT_SIZE}px` }}
            >
              {banner}
            </pre>
          ) : (
            <p className="font-semibold text-secondary">{project.name}</p>
          )}
        </div>
        <h3 className="sr-only">{project.name}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-secondary/70">{project.details}</p>
      </div>
    </button>
  )
}

export default function Projects() {
  const { data, error } = useProjects()
  const [openId, setOpenId] = useState<number | null>(null)
  const lightbox = useLightbox()
  const columnCount = useColumnCount()

  const openProject = data?.projects.find((p) => p.id === openId) ?? null

  const columns: Project[][] = Array.from({ length: columnCount }, () => [])
  data?.projects.forEach((project, i) => columns[i % columnCount].push(project))

  return (
    <main className="min-h-screen bg-primary font-sans text-secondary">
      <Header links={[{ to: '/', label: 'Home' }]} />

      {Boolean(error) && <p className="p-6 text-red-600">Failed to load projects.</p>}

      {data && (
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-8 sm:py-16">
          <div className="mb-6 flex gap-2 overflow-x-auto">
            <pre aria-hidden className="text-[8px] leading-tight text-banner sm:text-[10px]">
              {SLASH_ASCII.replace(/^\n/, '')}
            </pre>
            <pre aria-hidden className="text-[8px] leading-tight text-banner sm:text-[10px]">
              {PROJECTS_TITLE.replace(/^\n/, '')}
            </pre>
          </div>
          <h1 className="sr-only">Projects</h1>

          <div className="flex gap-6">
            {columns.map((column, i) => (
              <div key={i} className="flex flex-1 flex-col">
                {column.map((project) => (
                  <Card key={project.id} project={project} onOpen={() => setOpenId(project.id)} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      {openProject && (
        <ProjectDetailModal
          project={openProject}
          onClose={() => setOpenId(null)}
          onThumbClick={(index) =>
            lightbox.open(openProject.images.map((img) => projectImageSrc(openProject, img)), index)
          }
        />
      )}

      <Lightbox images={lightbox.images} index={lightbox.index} onIndexChange={lightbox.setIndex} onClose={lightbox.close} />
    </main>
  )
}
