import { describe, expect, it } from 'vitest'
import html from '../index.html?raw'
import cname from '../public/CNAME?raw'

const domain = cname.trim()
const doc = new DOMParser().parseFromString(html, 'text/html')

const meta = (attr: 'name' | 'property', key: string) =>
  doc.querySelector(`meta[${attr}="${key}"]`)?.getAttribute('content')

describe('index.html metadata', () => {
  it('has description, theme-color and twitter card', () => {
    expect(meta('name', 'description')).toBeTruthy()
    expect(meta('name', 'theme-color')).toBe('#18181b')
    expect(meta('name', 'twitter:card')).toBe('summary_large_image')
  })

  it('has Open Graph tags', () => {
    for (const key of ['og:type', 'og:title', 'og:description', 'og:url', 'og:image']) {
      expect(meta('property', key), key).toBeTruthy()
    }
  })

  it('uses absolute URLs on the CNAME domain', () => {
    const urls = [
      doc.querySelector('link[rel="canonical"]')?.getAttribute('href'),
      meta('property', 'og:url'),
      meta('property', 'og:image'),
    ]
    for (const url of urls) expect(url?.startsWith(`https://${domain}/`), url ?? undefined).toBe(true)
    expect(meta('property', 'og:image')).toBe(`https://${domain}/assets/img/profile.jpg`)
  })
})
