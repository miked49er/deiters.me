import type { Project } from '../projects/project';
import { PROJECTS_TITLE } from '../data/ascii';
import { ProjectDetailProvider } from '../projectDetail/ProjectDetail';
import { useProjectDetail } from '../projectDetail/useProjectDetail';
import { SECTION_IDS, SECTION_SCROLL_OFFSET } from '../lib/sections';
import BracketLink from './BracketLink';
import SectionBanner from './SectionBanner';
import { PROJECT_TILE_CLASS, ProjectBanner, ProjectFeatureImage } from './ProjectChrome';
import WindowHeader from './WindowHeader';
import { windowLabel } from '../projects/projectFields';
import { SiteLink, ThumbnailStrip } from '../projectDetail/ProjectDetailParts';

interface FeaturedProjectsProps {
  projects: Project[];
}

function FeaturedRow({
  project,
  reverse,
  expanded,
  onToggle,
  onImageClick,
}: {
  project: Project;
  reverse: boolean;
  expanded: boolean;
  onToggle: () => void;
  onImageClick: (index: number) => void;
}) {
  return (
    <div className={PROJECT_TILE_CLASS}>
      <WindowHeader label={windowLabel(project)} />

      <div className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
        <button
          onClick={onToggle}
          className="relative block h-56 w-full flex-shrink-0 overflow-hidden sm:h-auto sm:w-1/2"
        >
          <ProjectFeatureImage project={project} zoomClassName="hover:scale-105" />
        </button>

        <div className="flex flex-1 flex-col justify-center p-5 sm:p-8">
          <button onClick={onToggle} className="block text-left">
            <ProjectBanner
              project={project}
              className="overflow-x-auto text-[8px] leading-tight text-banner sm:text-[9px]"
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
  );
}

function ViewAllLink({ totalCount, className }: { totalCount: number; className: string }) {
  return (
    <BracketLink to="/projects" className={className}>
      [ view all ({totalCount}) → ]
    </BracketLink>
  );
}

function FeaturedProjectsSection({ projects }: FeaturedProjectsProps) {
  const detail = useProjectDetail();
  const featured = projects.filter((project) => project.featured);
  const totalCount = projects.length;

  return (
    <section id={SECTION_IDS.projects} className={SECTION_SCROLL_OFFSET}>
      <div className="mb-6 flex items-end justify-between">
        <div>
          <SectionBanner title={PROJECTS_TITLE} />
          <h2 className="sr-only">Featured work</h2>
        </div>
        <ViewAllLink totalCount={totalCount} className="hidden sm:inline-flex" />
      </div>

      <div className="space-y-6">
        {featured.map((project, i) => (
          <FeaturedRow
            key={project.id}
            project={project}
            reverse={i % 2 === 1}
            expanded={detail.isOpen(project.id)}
            onToggle={() => detail.toggle(project.id)}
            onImageClick={(index) => detail.openImage(project, index)}
          />
        ))}
      </div>

      <ViewAllLink totalCount={totalCount} className="mt-6 inline-flex sm:hidden" />
    </section>
  );
}

export default function FeaturedProjects(props: FeaturedProjectsProps) {
  return (
    <ProjectDetailProvider>
      <FeaturedProjectsSection {...props} />
    </ProjectDetailProvider>
  );
}
