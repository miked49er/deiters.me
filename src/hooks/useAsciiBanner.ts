import { useEffect, useState } from 'react'

export function useAsciiBanner(asciiFile: string): string | null {
  const [banner, setBanner] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    setBanner(null)
    fetch(asciiFile)
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) setBanner(text)
      })
    return () => {
      cancelled = true
    }
  }, [asciiFile])

  return banner
}
