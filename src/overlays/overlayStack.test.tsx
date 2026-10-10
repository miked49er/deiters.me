import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { useOverlay } from './useOverlay'

function Overlay({ open, onDismiss }: { open: boolean; onDismiss: () => void }) {
  useOverlay(open, onDismiss)
  return null
}

describe('overlay stack', () => {
  it('dismisses a single open overlay on Escape', () => {
    const onDismiss = vi.fn()
    render(<Overlay open onDismiss={onDismiss} />)
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('ignores other keys and closed overlays', () => {
    const onDismiss = vi.fn()
    render(<Overlay open={false} onDismiss={onDismiss} />)
    fireEvent.keyDown(window, { key: 'Escape' })
    render(<Overlay open onDismiss={onDismiss} />)
    fireEvent.keyDown(window, { key: 'a' })
    expect(onDismiss).not.toHaveBeenCalled()
  })

  it('dismisses only the topmost overlay, then the next one', () => {
    const lower = vi.fn()
    const upper = vi.fn()
    const first = render(<Overlay open onDismiss={lower} />)
    const second = render(<Overlay open onDismiss={upper} />)

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(upper).toHaveBeenCalledTimes(1)
    expect(lower).not.toHaveBeenCalled()

    second.unmount()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(lower).toHaveBeenCalledTimes(1)
    first.unmount()
  })

  it('stops listening once every overlay has unmounted', () => {
    const onDismiss = vi.fn()
    render(<Overlay open onDismiss={onDismiss} />).unmount()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onDismiss).not.toHaveBeenCalled()
  })
})
