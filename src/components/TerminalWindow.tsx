import type { ReactNode } from 'react'
import HandlebarIcon from '../assets/icons/handlebar.svg?react'

interface TerminalWindowProps {
  label?: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ label, children, className = '' }: TerminalWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-secondary/10 bg-secondary/[0.03] shadow-2xl shadow-black/40 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-secondary/10 bg-secondary/[0.04] px-4 py-2.5">
        <HandlebarIcon className="h-4 w-8 text-accent" />
        {label && <span className="ml-2 truncate font-mono text-xs text-secondary/40">{label}</span>}
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}
