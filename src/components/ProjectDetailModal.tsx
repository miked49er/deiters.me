import { useEffect, useState } from 'react'
import type { Project } from '../types/project'
import { useAsciiBanner } from '../hooks/useAsciiBanner'
import { projectImageSrc } from '../lib/projectImageSrc'
import HandlebarIcon from '../assets/icons/handlebar.svg?react'
import BracketLink from './BracketLink'
import ImageWithSkeleton from './ImageWithSkeleton'

const TITLE_FONT_SIZE = 9

interface ProjectDetailModalProps {
  project: Project
  onClose: () => void
  onThumbClick: (index: number) => void
}

export default function ProjectDetailModal({ project, onClose, onThumbClick }: ProjectDetailModalProps) {
  const banner = useAsciiBanner(project.asciiFile)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  const images = project.images.map((img) => projectImageSrc(project, img))

  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-6 transition-opacity duration-200 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`mt-8 mb-8 w-full max-w-3xl overflow-hidden rounded-xl border border-secondary/10 bg-primary shadow-xl shadow-black/30 transition-all duration-200 ${
          visible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-secondary/10 bg-secondary/[0.04] px-4 py-2.5">
          <HandlebarIcon className="h-4 w-8 text-accent" />
          <span className="ml-2 truncate font-mono text-xs text-secondary/40">{project.link}.tsx</span>
          <BracketLink className="ml-auto" onClick={onClose} aria-label="Close">
            [ x ]
          </BracketLink>
        </div>
        <ImageWithSkeleton
          src={projectImageSrc(project, project.featureImage)}
          alt={project.name}
          wrapperClassName="h-64 w-full"
          className="h-full w-full object-cover"
        />
        <div className="p-6">
          {banner ? (
            <pre
              aria-hidden
              className="overflow-x-auto pb-2 leading-[1.15] text-accent/70"
              style={{ fontSize: `${TITLE_FONT_SIZE}px` }}
            >
              {banner}
            </pre>
          ) : (
            <p className="text-2xl font-semibold text-secondary">{project.name}</p>
          )}
          <h2 className="sr-only">{project.name}</h2>
          <p className="mt-4 leading-relaxed text-secondary/70">{project.details}</p>

          {project.site && (
            <BracketLink href={project.site} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
              [ visit site → ]
            </BracketLink>
          )}

          {images.length > 0 && (
            <div className="mt-6 flex gap-2 overflow-x-auto border-t border-secondary/10 pt-4">
              {images.map((src, i) => (
                <ImageWithSkeleton
                  key={src}
                  src={src}
                  alt=""
                  wrapperClassName="h-20 w-20 flex-shrink-0 rounded-lg border border-secondary/10"
                  className="h-full w-full cursor-pointer object-cover"
                  onClick={() => onThumbClick(i)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
