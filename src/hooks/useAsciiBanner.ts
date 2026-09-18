import { getAsciiBanner } from '../lib/projectsStore'

export function useAsciiBanner(asciiFile: string): string | null {
  return getAsciiBanner(asciiFile)
}
