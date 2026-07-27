import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="flex gap-6 bg-primary px-6 py-4 font-mono text-secondary">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}
