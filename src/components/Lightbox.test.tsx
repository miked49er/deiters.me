import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Lightbox from './Lightbox'

const images = ['/a.png', '/b.png', '/c.png']

describe('Lightbox', () => {
  it('renders nothing when index is null', () => {
    const { container } = render(
      <Lightbox images={images} index={null} onIndexChange={vi.fn()} onClose={vi.fn()} />,
    )
    expect(container).toBeEmptyDOMElement()
  })

  it('shows the image at the current index and a counter', () => {
    const { container } = render(<Lightbox images={images} index={1} onIndexChange={vi.fn()} onClose={vi.fn()} />)
    expect(container.querySelector('img')).toHaveAttribute('src', '/b.png')
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('hides nav controls and counter for a single image', () => {
    render(<Lightbox images={['/only.png']} index={0} onIndexChange={vi.fn()} onClose={vi.fn()} />)
    expect(screen.queryByLabelText('Next image')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Previous image')).not.toBeInTheDocument()
  })

  it('calls onIndexChange with wraparound when clicking next/previous', () => {
    const onIndexChange = vi.fn()
    render(<Lightbox images={images} index={2} onIndexChange={onIndexChange} onClose={vi.fn()} />)

    fireEvent.click(screen.getByLabelText('Next image'))
    expect(onIndexChange).toHaveBeenCalledWith(0)

    fireEvent.click(screen.getByLabelText('Previous image'))
    expect(onIndexChange).toHaveBeenCalledWith(1)
  })

  it('cycles with arrow keys and closes on Escape', () => {
    const onIndexChange = vi.fn()
    const onClose = vi.fn()
    render(<Lightbox images={images} index={0} onIndexChange={onIndexChange} onClose={onClose} />)

    fireEvent.keyDown(window, { key: 'ArrowRight' })
    expect(onIndexChange).toHaveBeenCalledWith(1)

    fireEvent.keyDown(window, { key: 'ArrowLeft' })
    expect(onIndexChange).toHaveBeenCalledWith(2)

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalled()
  })

  it('closes on backdrop click and close button, not on image click', () => {
    const onClose = vi.fn()
    const { container } = render(<Lightbox images={images} index={0} onIndexChange={vi.fn()} onClose={onClose} />)

    fireEvent.click(container.querySelector('img')!)
    expect(onClose).not.toHaveBeenCalled()

    fireEvent.click(screen.getByLabelText('Close'))
    expect(onClose).toHaveBeenCalled()
  })
})
