import type { ReactNode } from 'react'
import HandlebarIcon from '../assets/icons/handlebar.svg?react'

interface WindowHeaderProps {
  label?: string
  children?: ReactNode
}

export default function WindowHeader({ label, children }: WindowHeaderProps) {
  return (
    <div className="flex items-center gap-2 border-b border-secondary/10 bg-secondary/[0.04] px-4 py-2.5">
      <HandlebarIcon className="h-4 w-8 text-accent" />
      {label && <span className="ml-2 truncate font-mono text-xs text-secondary/40">{label}</span>}
      {children}
    </div>
  )
}
