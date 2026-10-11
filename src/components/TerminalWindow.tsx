import type { ReactNode } from 'react'
import { CARD_CHROME_CLASS } from './cardChrome'
import WindowHeader from './WindowHeader'

interface TerminalWindowProps {
  label?: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ label, children, className = '' }: TerminalWindowProps) {
  return (
    <div
      className={`${CARD_CHROME_CLASS} shadow-2xl shadow-black/40 ${className}`}
    >
      <WindowHeader label={label} />
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  )
}
