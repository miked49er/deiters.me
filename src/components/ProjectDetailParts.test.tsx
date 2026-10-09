import { describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import { SiteLink, ThumbnailStrip } from './ProjectDetailParts'
import { useProjectDetail } from '../hooks/useProjectDetail'
import { makeProject } from '../testProject'

describe('SiteLink', () => {
  it('renders an external link when the project has a site', () => {
    render(<SiteLink project={makeProject()} />)
    const link = screen.getByRole('link', { name: '[ visit site → ]' })
    expect(link).toHaveAttribute('href', 'https://example.com')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders nothing when the project has no site', () => {
    const { container } = render(<SiteLink project={makeProject({ site: '' })} />)
    expect(container).toBeEmptyDOMElement()
  })
})

describe('ThumbnailStrip', () => {
  it('renders nothing when the project has no images', () => {
    const { container } = render(
      <ThumbnailStrip project={makeProject()} onSelect={vi.fn()} className="" thumbClassName="" />,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('reports the clicked thumbnail index', () => {
    const onSelect = vi.fn()
    const { container } = render(
      <ThumbnailStrip
        project={makeProject({ images: ['a.png', 'b.png'] })}
        onSelect={onSelect}
        className=""
        thumbClassName=""
      />,
    )
    fireEvent.click(container.querySelectorAll('img')[1])
    expect(onSelect).toHaveBeenCalledWith(1)
  })
})

describe('useProjectDetail', () => {
  it('opens, toggles and closes a single project', () => {
    const { result } = renderHook(() => useProjectDetail())
    act(() => result.current.open(1))
    expect(result.current.isOpen(1)).toBe(true)
    act(() => result.current.toggle(2))
    expect(result.current.isOpen(2)).toBe(true)
    act(() => result.current.toggle(2))
    expect(result.current.openId).toBeNull()
    act(() => result.current.open(1))
    act(() => result.current.close())
    expect(result.current.openId).toBeNull()
  })

  it('opens the lightbox with full image paths at the clicked thumbnail', () => {
    const { result } = renderHook(() => useProjectDetail())
    act(() => result.current.openImage(makeProject({ images: ['a.png', 'b.png'] }), 1))
    expect(result.current.lightbox.images).toEqual(['/assets/img/rtg/a.png', '/assets/img/rtg/b.png'])
    expect(result.current.lightbox.index).toBe(1)
  })
})
