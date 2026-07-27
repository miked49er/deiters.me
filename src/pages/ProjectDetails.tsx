import { useParams } from 'react-router-dom'

export default function ProjectDetails() {
  const { link } = useParams<{ link: string }>()
  return <main className="p-6 text-primary">Project details for "{link}" — placeholder.</main>
}
