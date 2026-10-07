import { useState } from 'react'
import type { ImgHTMLAttributes } from 'react'

interface ImageWithSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  wrapperClassName?: string
}

export default function ImageWithSkeleton({
  wrapperClassName = '',
  className = '',
  onLoad,
  onError,
  ...rest
}: ImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <span className={`relative block overflow-hidden ${wrapperClassName}`}>
      {!loaded && (
        <span data-testid="image-skeleton" aria-hidden className="absolute inset-0 animate-pulse bg-secondary/10" />
      )}
      <img
        {...rest}
        ref={(el) => {
          if (el?.complete && el.naturalWidth > 0) setLoaded(true)
        }}
        className={className}
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
