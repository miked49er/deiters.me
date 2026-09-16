import { MustacheIcon } from './icons'
import { handleInPageNavClick } from '../hooks/useInViewNavClick'

interface HeaderLink {
  href: string
  label: string
}

interface HeaderProps {
  links: HeaderLink[]
}

export default function Header({ links }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-secondary/10 bg-primary/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-8">
        <a href="/" className="flex items-center gap-2">
          <MustacheIcon className="h-3 w-6 text-accent" />
          <span className="ml-2 font-mono text-sm text-secondary">deiters.me</span>
        </a>
        <nav className="flex gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleInPageNavClick(e, link.href)}
              className="text-secondary/80 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
