import { useState } from 'react'
import type { Project } from '../types/project'
import { PROJECTS_TITLE, SLASH_ASCII } from '../data/ascii'
import { useAsciiBanner } from '../hooks/useAsciiBanner'
import { useLightbox } from '../hooks/useLightbox'
import { projectImageSrc } from '../lib/projectImageSrc'
import HandlebarIcon from '../assets/icons/handlebar.svg?react'
import Lightbox from './Lightbox'
import BracketLink from './BracketLink'
import ImageWithSkeleton from './ImageWithSkeleton'

interface FeaturedProjectsProps {
  featured: Project[]
  totalCount: number
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
  onImageClick: (index: number) => void
}) {
  const banner = useAsciiBanner(project.asciiFile)

  return (
    <div className="overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03] shadow-xl shadow-black/30 transition-colors hover:border-accent/40">
      <div className="flex items-center gap-2 border-b border-secondary/10 bg-secondary/[0.04] px-4 py-2.5">
        <HandlebarIcon className="h-4 w-8 text-accent" />
        <span className="ml-2 truncate font-mono text-xs text-secondary/40">{project.link}.tsx</span>
      </div>

      <div className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <button
          onClick={onToggle}
          className="relative block h-56 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-1/2"
        >
          <ImageWithSkeleton
            src={projectImageSrc(project, project.featureImage)}
            alt={project.name}
            wrapperClassName="h-full w-full"
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </button>

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-8">
          <button onClick={onToggle} className="block text-left">
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
          </button>
          {expanded && project.site && (
            <BracketLink href={project.site} target="_blank" rel="noopener noreferrer" className="mt-3 self-start">
              [ visit site → ]
            </BracketLink>
          )}
          <button onClick={onToggle} className="mt-3 self-start text-left text-sm text-accent hover:underline">
            {expanded ? 'Show less' : 'Read more'}
          </button>
        </div>
      </div>

      {expanded && project.images.length > 0 && (
        <div className="flex gap-2 overflow-x-auto border-t border-secondary/10 p-4">
          {project.images.map((img, i) => (
            <ImageWithSkeleton
              key={img}
              src={projectImageSrc(project, img)}
              alt=""
              wrapperClassName="h-16 w-16 flex-shrink-0 rounded-lg border border-secondary/10"
              className="h-full w-full cursor-pointer object-cover"
              onClick={() => onImageClick(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default function FeaturedProjects({ featured, totalCount }: FeaturedProjectsProps) {
  const [expandedId, setExpandedId] = useState<string | number | null>(null)
  const lightbox = useLightbox()

  return (
    <section id="projects" className="scroll-mt-16">
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
        <BracketLink to="/projects" className="hidden sm:inline-flex">
          [ view all ({totalCount}) → ]
        </BracketLink>
      </div>

      <div className="space-y-6">
        {featured.map((project, i) => (
          <Row
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
            expanded={expandedId === project.id}
            onToggle={() => setExpandedId((cur) => (cur === project.id ? null : project.id))}
            onImageClick={(index) => lightbox.open(project.images.map((img) => projectImageSrc(project, img)), index)}
          />
        ))}
      </div>

      <BracketLink to="/projects" className="mt-6 inline-flex sm:hidden">
        [ view all ({totalCount}) → ]
      </BracketLink>

      <Lightbox
        images={lightbox.images}
        index={lightbox.index}
        onIndexChange={lightbox.setIndex}
        onClose={lightbox.close}
      />
    </section>
  )
}
