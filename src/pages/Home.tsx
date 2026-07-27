import { useEffect, useState } from 'react'
import { useProjects } from '../hooks/useProjects'

export default function Home() {
  const { data, error } = useProjects()
  const [banner, setBanner] = useState<string | null>(null)

  useEffect(() => {
    const first = data?.projects[0]
    if (!first) return

    let cancelled = false
    fetch(first.asciiFile)
      .then((res) => res.text())
      .then((text) => {
        if (!cancelled) setBanner(text)
      })

    return () => {
      cancelled = true
    }
  }, [data])

  if (error) {
    return <p className="p-6 text-red-600">Failed to load projects.</p>
  }

  if (!data) {
    return <p className="p-6 text-primary">Loading…</p>
  }

  return (
    <main className="min-h-screen bg-secondary p-6 text-primary">
      <h1 className="font-mono text-2xl text-accent">Projects</h1>
      {banner && <pre className="mt-4 overflow-x-auto font-mono text-sm">{banner}</pre>}
      <ul className="mt-6 space-y-2 font-sans">
        {data.projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </main>
  )
}
