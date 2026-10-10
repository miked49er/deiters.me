import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SiteLink, ThumbnailStrip } from './ProjectDetailParts'
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

  it('loads thumbnails lazily and decodes them asynchronously', () => {
    const { container } = render(
      <ThumbnailStrip project={makeProject({ images: ['a.png'] })} onSelect={vi.fn()} className="" thumbClassName="" />,
    )
    const img = container.querySelector('img')!
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(img).toHaveAttribute('decoding', 'async')
  })
})
