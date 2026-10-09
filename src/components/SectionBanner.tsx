import { SLASH_ASCII } from '../data/ascii'

interface SectionBannerProps {
  title: string
  className?: string
}

export default function SectionBanner({ title, className }: SectionBannerProps) {
  return (
    <div className={[className, 'flex gap-2 overflow-x-auto'].filter(Boolean).join(' ')}>
      <pre aria-hidden className="text-[8px] leading-tight text-banner sm:text-[10px]">
        {SLASH_ASCII.replace(/^\n/, '')}
      </pre>
      <pre aria-hidden className="text-[8px] leading-tight text-banner sm:text-[10px]">
        {title.replace(/^\n/, '')}
      </pre>
    </div>
  )
}
