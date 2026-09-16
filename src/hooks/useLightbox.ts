import { useState } from 'react'

interface LightboxState {
  images: string[]
  index: number
}

export function useLightbox() {
  const [state, setState] = useState<LightboxState | null>(null)

  return {
    images: state?.images ?? [],
    index: state?.index ?? null,
    open: (images: string[], index: number) => setState({ images, index }),
    setIndex: (index: number) => setState((cur) => (cur ? { ...cur, index } : cur)),
    close: () => setState(null),
  }
}
