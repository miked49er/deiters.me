import type { Project } from '../projects/project';
import { fitBannerFontSize } from '../lib/bannerFontSize';
import { imageSrc } from '../projects/projectFields';
import { useProjects } from '../projects/useProjects';
import ImageWithSkeleton from './ImageWithSkeleton';
import { CARD_CHROME_CLASS } from './cardChrome';

// Featured Row / Project Card tile: chrome plus elevation and hover highlight.
export const PROJECT_TILE_CLASS = `${CARD_CHROME_CLASS} shadow-xl shadow-black/30 transition-colors hover:border-accent/40`;

interface ProjectFeatureImageProps {
  project: Project;
  // Zoom-on-hover class differs: `hover:` for a Featured Row, `group-hover:` for a Project Card.
  zoomClassName: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

export function ProjectFeatureImage({ project, zoomClassName, loading, decoding }: ProjectFeatureImageProps) {
  return (
    <ImageWithSkeleton
      src={imageSrc(project, project.featureImage)}
      alt={project.name}
      loading={loading}
      decoding={decoding}
      wrapperClassName="h-full w-full"
      className={`h-full w-full object-cover transition-transform duration-300 ${zoomClassName}`}
    />
  );
}

// Fixed px, or scaled to the nearest `@container` up to a max px.
type BannerSize = { fixedPx: number } | { fitMaxPx: number };

interface ProjectBannerProps {
  project: Project;
  size?: BannerSize;
  className: string;
  nameClassName: string;
}

function bannerFontSize(banner: string, size?: BannerSize): string | undefined {
  if (!size) return undefined;
  return 'fitMaxPx' in size ? fitBannerFontSize(banner, size.fitMaxPx) : `${size.fixedPx}px`;
}

// The project's ascii banner from the projects store, falling back to the plain project name when none is loaded.
export function ProjectBanner({ project, size, className, nameClassName }: ProjectBannerProps) {
  const banner = useProjects().getBanner(project);
  if (!banner) return <p className={nameClassName}>{project.name}</p>;
  const fontSize = bannerFontSize(banner, size);
  return (
    <pre aria-hidden className={className} style={fontSize ? { fontSize } : undefined}>
      {banner}
    </pre>
  );
}
