import type { Project } from '../types/project'
import { PROJECTS_TITLE } from '../data/ascii'
import { ProjectDetailProvider } from '../projectDetail/ProjectDetail'
import { useProjectDetail } from '../projectDetail/useProjectDetail'
import { projectImageSrc } from '../lib/projectImageSrc'
import { SECTION_IDS, SECTION_SCROLL_OFFSET } from '../lib/sections'
import BracketLink from './BracketLink'
import ImageWithSkeleton from './ImageWithSkeleton'
import SectionBanner from './SectionBanner'
import { ProjectBanner, ProjectWindowHeader } from './ProjectChrome'
import { useProjects } from '../projects/useProjects'
import { SiteLink, ThumbnailStrip } from '../projectDetail/ProjectDetailParts'

interface FeaturedProjectsProps {
  projects: Project[]
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
  const { getBanner } = useProjects()
  return (
    <div className="overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03] shadow-xl shadow-black/30 transition-colors hover:border-accent/40">
      <ProjectWindowHeader project={project} />

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
            <ProjectBanner
              project={project}
              banner={getBanner(project.asciiFile)}
              bannerClassName="overflow-x-auto text-[8px] leading-tight text-banner sm:text-[9px]"
              nameClassName="text-xl font-semibold text-secondary"
            />
            <h3 className="sr-only">{project.name}</h3>
            <p className="mt-3 leading-relaxed text-secondary/70">
              {expanded ? project.details : `${project.details.slice(0, 140)}…`}
            </p>
          </button>
          {expanded && <SiteLink project={project} className="mt-3 self-start" />}
          <button onClick={onToggle} className="mt-3 self-start text-left text-sm text-accent hover:underline">
            {expanded ? 'Show less' : 'Read more'}
          </button>
        </div>
      </div>

      {expanded && (
        <ThumbnailStrip
          project={project}
          onSelect={onImageClick}
          className="flex gap-2 overflow-x-auto border-t border-secondary/10 p-4"
          thumbClassName="h-16 w-16 flex-shrink-0 rounded-lg border border-secondary/10"
        />
      )}
    </div>
  )
}

function FeaturedProjectsSection({ projects }: FeaturedProjectsProps) {
  const detail = useProjectDetail()
  const featured = projects.filter((project) => project.featured)
  const totalCount = projects.length

  return (
    <section id={SECTION_IDS.projects} className={SECTION_SCROLL_OFFSET}>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <SectionBanner title={PROJECTS_TITLE} />
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
            expanded={detail.isOpen(project.id)}
            onToggle={() => detail.toggle(project.id)}
            onImageClick={(index) => detail.openImage(project, index)}
          />
        ))}
      </div>

      <BracketLink to="/projects" className="mt-6 inline-flex sm:hidden">
        [ view all ({totalCount}) → ]
      </BracketLink>
    </section>
  )
}

export default function FeaturedProjects(props: FeaturedProjectsProps) {
  return (
    <ProjectDetailProvider>
      <FeaturedProjectsSection {...props} />
    </ProjectDetailProvider>
  )
}
