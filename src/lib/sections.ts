// Landing Page section ids, their nav links, and the scroll offset that clears the sticky Header.
export const SECTION_IDS = { about: 'about', projects: 'projects' } as const

export const SECTION_LINKS = [
  { href: `#${SECTION_IDS.about}`, label: 'About' },
  { href: `#${SECTION_IDS.projects}`, label: 'Projects' },
]

// Matches the sticky Header's height so anchor jumps land below it.
export const SECTION_SCROLL_OFFSET = 'scroll-mt-16'
