import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface ImageWithSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string
  /** Wrapper classes applied only until the image loads or fails (e.g. a reserved minimum size). */
  loadingClassName?: string
}

export default function ImageWithSkeleton({
  wrapperClassName = '',
  loadingClassName = '',
  className = '',
  onLoad,
  onError,
  ...rest
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName} ${loaded ? '' : loadingClassName}`}>
      {!loaded && (
        <span data-testid="image-skeleton" aria-hidden className="absolute inset-0 animate-pulse bg-secondary/10" />
      )}
      <img
        {...rest}
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true)
        }}
        className={`${className} ${loaded ? '' : 'opacity-0'}`}
        onLoad={(e) => {
          setLoaded(true)
          onLoad?.(e)
        }}
        onError={(e) => {
          setLoaded(true)
          onError?.(e)
        }}
      />
    </span>
  )
}
