import { useEffect, useMemo, useRef } from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { angleAt } from '../lib/bannerMotion'
import { createBannerRenderer, type Rasterize } from '../lib/bannerRenderer'
import { canvasRasterize } from '../lib/canvasRasterizer'

const DESKTOP_GRID = { cols: 60, rows: 6 }
const NARROW_GRID = { cols: 36, rows: 4 }
const NARROW_QUERY = '(max-width: 639px)'
const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

const MIN_FRAME_MS = 1000 / 60 - 1 // cap at 60 fps on high-refresh displays, with slack for timer jitter
const MAX_STEP_MS = 100 // a long stall (slow frame, busy tab) advances the animation by no more than this

export default function Banner3D({ rasterize = canvasRasterize }: { rasterize?: Rasterize }) {
  const narrow = useMediaQuery(NARROW_QUERY)
  const reducedMotion = useMediaQuery(REDUCED_MOTION_QUERY)
  const grid = narrow ? NARROW_GRID : DESKTOP_GRID
  const renderFrame = useMemo(() => createBannerRenderer({ ...grid, rasterize }), [grid, rasterize])
  const frontFrame = useMemo(() => renderFrame(0).join('\n'), [renderFrame])
  const preRef = useRef<HTMLPreElement>(null)

  useEffect(() => {
    const pre = preRef.current
    if (!pre || reducedMotion) return

    let frameId = 0
    let lastFrameAt: number | null = null
    let elapsed = 0
    let onScreen = true

    const tick = (now: number) => {
      frameId = requestAnimationFrame(tick)
      if (lastFrameAt === null) {
        lastFrameAt = now
        return
      }
      const sinceLast = now - lastFrameAt
      if (sinceLast < MIN_FRAME_MS) return
      lastFrameAt = now
      elapsed += Math.min(sinceLast, MAX_STEP_MS)
      pre.textContent = renderFrame(angleAt(elapsed)).join('\n')
    }

    const sync = () => {
      const shouldRun = onScreen && !document.hidden
      if (shouldRun && !frameId) {
        frameId = requestAnimationFrame(tick)
      } else if (!shouldRun && frameId) {
        cancelAnimationFrame(frameId)
        frameId = 0
        lastFrameAt = null
      }
    }

    const observer =
      typeof IntersectionObserver === 'undefined'
        ? null
        : new IntersectionObserver((entries) => {
            onScreen = entries[entries.length - 1].isIntersecting
            sync()
          })
    observer?.observe(pre)
    document.addEventListener('visibilitychange', sync)
    sync()

    return () => {
      document.removeEventListener('visibilitychange', sync)
      observer?.disconnect()
      cancelAnimationFrame(frameId)
      pre.textContent = frontFrame
    }
  }, [renderFrame, frontFrame, reducedMotion])

  return (
    <pre ref={preRef} aria-hidden="true" className="text-[10px] leading-none text-banner sm:text-[14px]">
      {frontFrame}
    </pre>
  )
}
