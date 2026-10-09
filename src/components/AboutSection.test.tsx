import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import AboutSection from './AboutSection'

describe('AboutSection portrait', () => {
  it('shows the skeleton while loading and removes it on load', () => {
    render(<AboutSection />)
    expect(screen.getByTestId('image-skeleton')).toBeInTheDocument()
    fireEvent.load(screen.getByAltText('Mike Deiters'))
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('removes the skeleton on error', () => {
    render(<AboutSection />)
    fireEvent.error(screen.getByAltText('Mike Deiters'))
    expect(screen.queryByTestId('image-skeleton')).not.toBeInTheDocument()
  })

  it('is eagerly loaded and reserves its aspect ratio', () => {
    render(<AboutSection />)
    const img = screen.getByAltText('Mike Deiters')
    expect(img).not.toHaveAttribute('loading', 'lazy')
    expect(img.className).toContain('aspect-[3/4]')
  })
})
