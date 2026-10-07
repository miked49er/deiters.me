import { NAME_ASCII, SLASH_ASCII } from '../data/ascii'
import EmailIcon from '../assets/icons/email.svg?react'
import GithubIcon from '../assets/icons/github.svg?react'
import LinkedinIcon from '../assets/icons/linkedin.svg?react'
import TerminalWindow from './TerminalWindow'

const ABOUT_BIO = `I'm a Senior Software Engineer based in Atlanta, specializing in React Native and full-stack development. I build mobile and web applications with a focus on clean code, smooth UX, and scalable architecture.

Over the past 7+ years, I've led engineering teams, built GraphQL APIs, and shipped features across mobile platforms. I care about writing maintainable code, improving developer workflows, and mentoring other engineers.

Outside of work, I'm passionate about long-exposure photography and gaming. I'm also an Eagle Scout.`

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:mike@deiters.me', Icon: EmailIcon },
  { label: 'GitHub', href: 'https://github.com/miked49er', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mikedeiters', Icon: LinkedinIcon },
]

export default function AboutSection() {
  return (
    <section id="about" className="grid scroll-mt-16 gap-8 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-12">
      <div>
        <div className="mb-3 flex gap-2 overflow-x-auto">
          <pre aria-hidden className="text-[8px] leading-tight text-banner sm:text-[10px]">
            {SLASH_ASCII.replace(/^\n/, '')}
          </pre>
          <pre aria-hidden className="text-[8px] leading-tight text-banner sm:text-[10px]">
            {NAME_ASCII.replace(/^\n/, '')}
          </pre>
        </div>
        <h1 className="sr-only">Mike Deiters</h1>
        <p className="mt-4 max-w-prose leading-relaxed whitespace-pre-line text-secondary/90">{ABOUT_BIO}</p>

        <ul className="mt-6 flex flex-wrap gap-1">
          {CONTACT_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="inline-flex items-center justify-center p-1.5 text-secondary/90 transition-colors hover:text-accent"
              >
                <Icon className="h-8 w-8" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <TerminalWindow label="profile.jpg" className="w-full sm:w-72">
        <img
          src="/assets/img/profile.jpg"
          alt="Mike Deiters"
          className="aspect-[3/4] w-full rounded-md object-cover"
        />
      </TerminalWindow>
    </section>
  )
}
