import type { ReactNode } from 'react'
import WindowHeader from './WindowHeader'

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
      <WindowHeader label={label} />
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}
