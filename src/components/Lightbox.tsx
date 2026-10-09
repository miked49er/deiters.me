import { useEffect } from 'react'
import BracketLink from './BracketLink'
import ImageWithSkeleton from './ImageWithSkeleton'

interface LightboxProps {
  images: string[]
  index: number | null
  onIndexChange: (index: number) => void
  onClose: () => void
}

export default function Lightbox({ images, index, onIndexChange, onClose }: LightboxProps) {
  const total = images.length

  useEffect(() => {
    if (index === null) return
    const current = index

    function onKey(e: KeyboardEvent) {
      const target = e.target as HTMLElement | null
      if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
        return
      }
      if (e.key === 'ArrowLeft') onIndexChange((current - 1 + total) % total)
      if (e.key === 'ArrowRight') onIndexChange((current + 1) % total)
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, total, onIndexChange, onClose])

  if (index === null || total === 0) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6" onClick={onClose}>
      {total > 1 && (
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 px-3 font-mono text-3xl text-secondary hover:text-accent sm:left-8"
          onClick={(e) => {
            e.stopPropagation()
            onIndexChange((index - 1 + total) % total)
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <ImageWithSkeleton
        // key remounts per image so the skeleton resets when navigating.
        key={images[index]}
        src={images[index]}
        alt=""
        // Reserve a minimum box so the skeleton is visible; dropped after load so small images aren't padded.
        loadingClassName="min-h-48 min-w-48"
        className="max-h-[85vh] max-w-[90vw] border-2 border-accent object-contain"
        onClick={(e) => e.stopPropagation()}
      />

      {total > 1 && (
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 px-3 font-mono text-3xl text-secondary hover:text-accent sm:right-8"
          onClick={(e) => {
            e.stopPropagation()
            onIndexChange((index + 1) % total)
          }}
          aria-label="Next image"
        >
          ›
        </button>
      )}

      {total > 1 && (
        <span className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-sm text-secondary/70">
          {index + 1} / {total}
        </span>
      )}

      <BracketLink className="absolute right-6 top-6" onClick={onClose} aria-label="Close">
        [ x ]
      </BracketLink>
    </div>
  )
}
