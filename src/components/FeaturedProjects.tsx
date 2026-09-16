import { useState } from 'react'
import { Link } from 'react-router-dom'
import type { Project } from '../types/project'
import { PROJECTS_TITLE, SLASH_ASCII } from '../data/ascii'
import { useAsciiBanner } from '../hooks/useAsciiBanner'
import { MustacheIcon } from './icons'
import Lightbox from './Lightbox'

interface FeaturedProjectsProps {
  featured: Project[]
  totalCount: number
}

function projectImageSrc(project: Project, file: string): string {
  return `${project.location}${file}`
}

function Row({
  project,
  reverse,
  expanded,
  onToggle,
  onImageClick,
}: {
  project: Project
  reverse: boolean
  expanded: boolean
  onToggle: () => void
  onImageClick: (src: string) => void
}) {
  const banner = useAsciiBanner(project.asciiFile)

  return (
    <div className="overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03] shadow-xl shadow-black/30 transition-colors hover:border-accent/40">
      <div className="flex items-center gap-2 border-b border-secondary/10 bg-secondary/[0.04] px-4 py-2.5">
        <MustacheIcon className="h-3.5 w-7 text-accent" />
        <span className="ml-2 truncate font-mono text-xs text-secondary/40">{project.link}.tsx</span>
      </div>

      <div className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <button
          onClick={onToggle}
          className="relative block h-56 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-1/2"
        >
          <img
            src={projectImageSrc(project, project.featureImage)}
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </button>

        <button onClick={onToggle} className="flex flex-1 flex-col justify-center p-5 text-left sm:p-8">
          {banner ? (
            <pre aria-hidden className="overflow-x-auto text-[8px] leading-tight text-accent/70 sm:text-[9px]">
              {banner}
            </pre>
          ) : (
            <p className="text-xl font-semibold text-secondary">{project.name}</p>
          )}
          <h3 className="sr-only">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-secondary/70">
            {expanded ? project.details : `${project.details.slice(0, 140)}…`}
          </p>
          <p className="mt-3 text-sm text-accent hover:underline">{expanded ? 'Show less' : 'Read more'}</p>
        </button>
      </div>

      {expanded && project.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto border-t border-secondary/10 p-4">
          {project.images.map((img) => (
            <img
              key={img}
              src={projectImageSrc(project, img)}
              alt=""
              className="h-16 w-16 flex-shrink-0 cursor-pointer rounded-lg border border-secondary/10 object-cover"
              onClick={() => onImageClick(projectImageSrc(project, img))}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FeaturedProjects({ featured, totalCount }: FeaturedProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="projects" className="scroll-mt-24">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <div className="flex gap-2 overflow-x-auto">
            <pre aria-hidden className="text-[8px] leading-tight text-accent/40 sm:text-[10px]">
              {SLASH_ASCII.replace(/^\n/, '')}
            </pre>
            <pre aria-hidden className="text-[8px] leading-tight text-accent/70 sm:text-[10px]">
              {PROJECTS_TITLE.replace(/^\n/, '')}
            </pre>
          </div>
          <h2 className="sr-only">Featured work</h2>
        </div>
        <Link to="/projects" className="hidden text-sm text-secondary/70 hover:text-accent sm:block">
          View all ({totalCount}) →
        </Link>
      </div>

      <div className="space-y-6">
        {featured.map((project, i) => (
          <Row
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
            expanded={expandedId === project.id}
            onToggle={() => setExpandedId((cur) => (cur === project.id ? null : project.id))}
            onImageClick={setLightbox}
          />
        ))}
      </div>

      <Link to="/projects" className="mt-6 block text-sm text-secondary/70 hover:text-accent sm:hidden">
        View all ({totalCount}) →
      </Link>

      <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
    </section>
  )
}
