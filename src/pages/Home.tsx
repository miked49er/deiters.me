import { useProjects } from '../hooks/useProjects'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  const { data, error } = useProjects()

  if (error) {
    return <p className="p-6 text-red-600">Failed to load projects.</p>
  }

  if (!data) {
    return <p className="p-6 text-secondary">Loading…</p>
  }

  const featured = data.projects.filter((project) => project.featured)

  return (
    <main className="min-h-screen bg-primary font-sans text-secondary">
      <Header links={[{ href: '#about', label: 'About' }, { href: '#projects', label: 'Projects' }]} />

      <div className="mx-auto max-w-5xl space-y-20 px-4 py-16 sm:px-8">
        <AboutSection />
        <FeaturedProjects featured={featured} totalCount={data.projects.length} />
      </div>

      <footer className="border-t border-secondary/10 px-4 py-8 text-center font-mono text-xs text-secondary/40 sm:px-8">
        $ echo "thanks for stopping by" <span className="cursor-blink">▊</span>
      </footer>
    </main>
  )
}
