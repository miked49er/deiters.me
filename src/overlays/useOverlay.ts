import { useEffect, useRef } from 'react'

// The one place overlays stack and get dismissed. Escape reaches only the
// topmost open overlay; overlays never add their own window Escape listener.
const stack: Array<{ dismiss: () => void }> = []

function onKeyDown(e: KeyboardEvent) {
  if (e.key !== 'Escape') return
  stack[stack.length - 1]?.dismiss()
}

function register(entry: { dismiss: () => void }) {
  if (stack.length === 0) window.addEventListener('keydown', onKeyDown)
  stack.push(entry)
  return () => {
    stack.splice(stack.indexOf(entry), 1)
    if (stack.length === 0) window.removeEventListener('keydown', onKeyDown)
  }
}

/** Registers an overlay while `open`; Escape calls `onDismiss` if it is the topmost. */
export function useOverlay(open: boolean, onDismiss: () => void) {
  const latest = useRef(onDismiss)
  useEffect(() => {
    latest.current = onDismiss
  })

  useEffect(() => {
    if (!open) return
    return register({ dismiss: () => latest.current() })
  }, [open])
}
