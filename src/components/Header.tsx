import { Link } from 'react-router-dom'
import { MustacheIcon } from './icons'
import BracketLink from './BracketLink'

type HeaderLink = { label: string } & ({ to: string } | { href: string })

interface HeaderProps {
  links: HeaderLink[]
}

export default function Header({ links }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-secondary/10 bg-primary/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <MustacheIcon className="h-3 w-6 text-accent" />
          <span className="ml-2 font-mono text-sm text-secondary">deiters.me</span>
        </Link>
        <nav className="flex gap-6">
          {links.map((link) => (
            <BracketLink key={'to' in link ? link.to : link.href} to={'to' in link ? link.to : undefined} href={'href' in link ? link.href : undefined}>
              [ {link.label.toLowerCase()} ]
            </BracketLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
