import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ImageWithSkeleton from './ImageWithSkeleton'

describe('ImageWithSkeleton', () => {
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
})
