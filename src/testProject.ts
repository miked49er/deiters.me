import type { Project } from './types/project'

export const makeProject = (over: Partial<Project> = {}): Project => ({
  id: 1,
  name: 'Rooms To Go',
  link: 'rtg',
  site: 'https://example.com',
  location: '/assets/img/rtg/',
  featureImage: 'rtg.avif',
  images: [],
  featured: true,
  asciiFile: '',
  details: 'details',
  ...over,
})
