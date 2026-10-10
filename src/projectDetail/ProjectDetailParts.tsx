import type { Project } from '../types/project'
import { projectImageSrc } from '../lib/projectImageSrc'
import BracketLink from '../components/BracketLink'
import ImageWithSkeleton from '../components/ImageWithSkeleton'

export function SiteLink({ project, className }: { project: Project; className?: string }) {
  if (!project.site) return null

  return (
    <BracketLink href={project.site} target="_blank" rel="noopener noreferrer" className={className}>
      [ visit site → ]
    </BracketLink>
  )
}

interface ThumbnailStripProps {
  project: Project
  onSelect: (index: number) => void
  className: string
  thumbClassName: string
}

export function ThumbnailStrip({ project, onSelect, className, thumbClassName }: ThumbnailStripProps) {
  if (project.images.length === 0) return null

  return (
    <div className={className}>
      {project.images.map((img, i) => {
        const src = projectImageSrc(project, img)
        return (
          <ImageWithSkeleton
            key={src}
            src={src}
            alt=""
            loading="lazy"
            decoding="async"
            wrapperClassName={thumbClassName}
            className="h-full w-full cursor-pointer object-cover"
            onClick={() => onSelect(i)}
          />
        )
      })}
    </div>
  )
}
