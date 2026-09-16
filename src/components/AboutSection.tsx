import { NAME_ASCII, SLASH_ASCII } from '../data/ascii'
import { GithubIcon, LinkedinIcon, MailIcon } from './icons'
import TerminalWindow from './TerminalWindow'

// TODO: replace with real bio copy before shipping.
const ABOUT_BIO = `Hi, I'm Mike — a software engineer who likes building things that
work well and look like they belong on a CRT monitor. I spend most of my
time in React, Node, and whatever backend a project actually needs, with
a soft spot for small self-contained tools that solve one problem well.

Outside of shipping code I'm usually tinkering with synths, board games,
or whatever half-finished side project is currently living on my desk.`

// TODO: confirm this is the real LinkedIn URL before shipping.
const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:mike@deiters.me', Icon: MailIcon },
  { label: 'GitHub', href: 'https://github.com/miked49er', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mikedeiters', Icon: LinkedinIcon },
]

export default function AboutSection() {
  return (
    <section id="about" className="grid scroll-mt-24 gap-8 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-12">
      <div>
        <div className="mb-3 flex gap-2 overflow-x-auto">
          <pre aria-hidden className="text-[8px] leading-tight text-accent/40 sm:text-[10px]">
            {SLASH_ASCII.replace(/^\n/, '')}
          </pre>
          <pre aria-hidden className="text-[8px] leading-tight text-accent/70 sm:text-[10px]">
            {NAME_ASCII.replace(/^\n/, '')}
          </pre>
        </div>
        <h1 className="sr-only">Mike Deiters</h1>
        <p className="mt-4 max-w-prose leading-relaxed whitespace-pre-line text-secondary/90">{ABOUT_BIO}</p>

        <ul className="mt-6 flex flex-wrap gap-3">
          {CONTACT_LINKS.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="inline-flex items-center gap-2 rounded-full border border-secondary/10 bg-secondary/[0.03] px-4 py-2 text-sm text-secondary/90 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                {label}
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
