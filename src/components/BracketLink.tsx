import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'

const BASE_CLASSES = 'font-mono text-sm text-secondary/80 transition-colors hover:text-accent'

interface BracketLinkProps {
  children: ReactNode
  to?: string
  href?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  target?: string
  rel?: string
  className?: string
  'aria-label'?: string
}

export default function BracketLink({ children, to, href, onClick, target, rel, className, ...rest }: BracketLinkProps) {
  const classes = [BASE_CLASSES, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes} {...rest}>
      {children}
    </button>
  )
}
