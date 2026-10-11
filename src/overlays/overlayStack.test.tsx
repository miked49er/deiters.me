import { describe, expect, it, vi } from 'vitest'
import { useState } from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
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

function Dialog({ open, onDismiss = () => {} }: { open: boolean; onDismiss?: () => void }) {
  const ref = useOverlay(open, onDismiss)
  return open ? (
    <div ref={ref} role="dialog" aria-modal="true" tabIndex={-1}>
      <button>first</button>
      <button>last</button>
    </div>
  ) : null
}

describe('overlay focus', () => {
  it('moves focus into the overlay on open and back to the opener on close', () => {
    function Page() {
      const [open, setOpen] = useState(false)
      return (
        <>
          <button onClick={() => setOpen(true)}>opener</button>
          <Dialog open={open} onDismiss={() => setOpen(false)} />
        </>
      )
    }
    render(<Page />)
    const opener = screen.getByText('opener')
    opener.focus()
    fireEvent.click(opener)
    expect(screen.getByRole('dialog')).toHaveFocus()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(opener).toHaveFocus()
  })

  it('wraps Tab from the last control to the first and Shift+Tab back', () => {
    render(<Dialog open />)
    screen.getByText('last').focus()
    fireEvent.keyDown(window, { key: 'Tab' })
    expect(screen.getByText('first')).toHaveFocus()

    fireEvent.keyDown(window, { key: 'Tab', shiftKey: true })
    expect(screen.getByText('last')).toHaveFocus()
  })

  it('pulls focus back inside when it has escaped the overlay', () => {
    render(
      <>
        <button>outside</button>
        <Dialog open />
      </>,
    )
    screen.getByText('outside').focus()
    fireEvent.keyDown(window, { key: 'Tab' })
    expect(screen.getByText('first')).toHaveFocus()
  })
})
