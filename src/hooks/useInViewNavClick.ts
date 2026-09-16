import type { MouseEvent } from 'react'

// Native fragment navigation always force-scrolls to align a target's top
// with its scroll-margin-top, even when the target is already fully visible
// below the sticky header — producing a tiny, unwanted jump. This skips that
// scroll when it isn't needed.
export function shouldSkipNavScroll(targetRect: DOMRect | Pick<DOMRect, 'top'>, headerHeight: number, viewportHeight: number): boolean {
  return targetRect.top >= headerHeight && targetRect.top <= viewportHeight
}

export function handleInPageNavClick(e: MouseEvent<HTMLAnchorElement>, href: string): void {
  if (!href.startsWith('#')) return

  const target = document.querySelector(href)
  if (!(target instanceof HTMLElement)) return

  const header = document.querySelector('header')
  const headerHeight = header instanceof HTMLElement ? header.getBoundingClientRect().height : 0

  if (shouldSkipNavScroll(target.getBoundingClientRect(), headerHeight, window.innerHeight)) {
    e.preventDefault()
  }
}
