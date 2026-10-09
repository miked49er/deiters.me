import { fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ImageWithSkeleton from './ImageWithSkeleton'

describe('ImageWithSkeleton', () => {
  afterEach(() => vi.restoreAllMocks())

  it('shows a skeleton placeholder until the image loads', () => {
    render(<ImageWithSkeleton src="/a.png" alt="pic" />)
    expect(screen.getByTestId('image-skeleton')).toBeInTheDocument()

    fireEvent.load(screen.getByAltText('pic'))
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('removes the skeleton if the image fails to load', () => {
    render(<ImageWithSkeleton src="/a.png" alt="pic" />)
    fireEvent.error(screen.getByAltText('pic'))
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('does not show a skeleton for an already-complete cached image', () => {
    vi.spyOn(HTMLImageElement.prototype, 'complete', 'get').mockReturnValue(true)
    vi.spyOn(HTMLImageElement.prototype, 'naturalWidth', 'get').mockReturnValue(100)
    render(<ImageWithSkeleton src="/a.png" alt="pic" />)
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('applies loadingClassName to the wrapper only while loading', () => {
    const { container } = render(<ImageWithSkeleton src="/a.png" alt="pic" loadingClassName="min-h-48" />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('min-h-48')

    fireEvent.load(screen.getByAltText('pic'))
    expect(wrapper).not.toHaveClass('min-h-48')
  })
})
