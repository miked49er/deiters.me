export function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  )
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 1.5A10.5 10.5 0 0 0 1.5 12c0 4.66 3.03 8.6 7.22 10c.53.1.72-.23.72-.51v-1.99c-2.94.64-3.56-1.4-3.56-1.4c-.48-1.22-1.17-1.55-1.17-1.55c-.96-.65.07-.64.07-.64c1.06.07 1.62 1.09 1.62 1.09c.94 1.62 2.47 1.15 3.07.88c.1-.68.37-1.15.67-1.42c-2.35-.27-4.82-1.18-4.82-5.23c0-1.15.41-2.1 1.08-2.84c-.11-.27-.47-1.35.1-2.81c0 0 .88-.28 2.88 1.08a9.9 9.9 0 0 1 5.24 0c2-1.36 2.88-1.08 2.88-1.08c.57 1.46.21 2.54.1 2.81c.67.74 1.08 1.69 1.08 2.84c0 4.06-2.47 4.95-4.83 5.22c.38.33.72.97.72 1.96v2.9c0 .28.19.62.72.51A10.51 10.51 0 0 0 22.5 12A10.5 10.5 0 0 0 12 1.5" />
    </svg>
  )
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03c-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.12a2.06 2.06 0 0 1 0 4.12M7.11 20.45H3.56V9h3.55z" />
    </svg>
  )
}

// Placeholder brand mark for the terminal-chrome accents (header logo, window
// dots). Slated to be replaced with a proper hand-drawn version later.
export function MustacheIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 600" fill="currentColor" className={className}>
      <path
        d="M600 242
          C578 198 507 205 440 246
          C362 293 310 375 234 402
          C158 429 88 399 42 359
          C79 431 151 482 241 492
          C348 504 445 466 512 407
          C562 363 587 318 600 274
          C606 262 606 251 600 242 Z"
      />
      <path
        d="M600 242
          C622 198 693 205 760 246
          C838 293 890 375 966 402
          C1042 429 1112 399 1158 359
          C1121 431 1049 482 959 492
          C852 504 755 466 688 407
          C638 363 613 318 600 274
          C594 262 594 251 600 242 Z"
      />
    </svg>
  )
}
