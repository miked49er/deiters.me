import Header from '../components/Header'

export default function Projects() {
  return (
    <main className="min-h-screen bg-primary p-6 text-secondary">
      <Header links={[{ href: '/', label: 'Home' }]} />
      <p className="mt-6">Projects list view — placeholder.</p>
    </main>
  )
}
