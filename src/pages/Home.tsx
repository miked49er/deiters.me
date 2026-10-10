import { useProjects } from '../projects/useProjects'
import { SECTION_LINKS } from '../lib/sections'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import FeaturedProjects from '../components/FeaturedProjects'

export default function Home() {
  const { data, error } = useProjects()

  return (
    <main className="min-h-screen bg-primary font-sans text-secondary">
      <Header links={SECTION_LINKS} />

      {error ? (
        <p className="p-6 text-red-600">Failed to load projects.</p>
      ) : (
        data && (
          <>
            <div className="mx-auto max-w-5xl space-y-10 px-4 py-8 sm:space-y-20 sm:px-8 sm:py-16">
              <AboutSection />
              <FeaturedProjects projects={data.projects} />
            </div>

            <footer className="border-t border-secondary/10 px-4 py-8 text-center font-mono text-xs text-secondary/40 sm:px-8">
              $ echo "Session terminated. Thanks for stopping by." <span className="cursor-blink">▊</span>
            </footer>
          </>
        )
      )}
    </main>
  )
}
