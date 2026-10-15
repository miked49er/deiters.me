import { SECTION_IDS, SECTION_SCROLL_OFFSET } from '../lib/sections';
import EmailIcon from '../assets/icons/email.svg?react';
import GithubIcon from '../assets/icons/github.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';
import ImageWithSkeleton from './ImageWithSkeleton';
import TerminalWindow from './TerminalWindow';
import HeroBanner from './HeroBanner';

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:mike@deiters.me', Icon: EmailIcon },
  { label: 'GitHub', href: 'https://github.com/miked49er', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mikedeiters', Icon: LinkedinIcon },
];

export default function AboutSection() {
  return (
    <section
      id={SECTION_IDS.about}
      className={`grid ${SECTION_SCROLL_OFFSET} gap-8 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-12`}
    >
      <div>
        <HeroBanner className="mb-3" />
        <h1 className="sr-only">Mike Deiters</h1>
        <div className="mt-4 max-w-prose space-y-4 leading-relaxed text-secondary/90">
          <p>
            I&apos;m a Senior Software Engineer based in Atlanta, specializing in React Native and full-stack
            development. I build mobile and web applications with a focus on clean code, smooth UX, and scalable
            architecture.
          </p>
          <p>
            Over the past 7+ years, I&apos;ve led engineering teams, built GraphQL APIs, and shipped features across
            mobile platforms. I care about writing maintainable code, improving developer workflows, and mentoring other
            engineers.
          </p>
          <p>
            Outside of work, I&apos;m passionate about long-exposure photography and gaming. I&apos;m also an Eagle
            Scout.
          </p>
        </div>

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
        <ImageWithSkeleton
          src="/assets/img/profile.jpg"
          alt="Mike Deiters"
          wrapperClassName="rounded-md"
          className="aspect-[3/4] w-full object-cover"
        />
      </TerminalWindow>
    </section>
  );
}
