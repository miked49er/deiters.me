import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Projects from '../pages/Projects'
import FeaturedProjects from '../components/FeaturedProjects'
import { ProjectsProvider } from '../projects/ProjectsContext'
import { createInMemoryProjects } from '../projects/inMemoryProjects'
import { ProjectDetailProvider } from './ProjectDetail'
import { useProjectDetail } from './useProjectDetail'
import { makeProject } from '../testProject'
import type { ReactNode } from 'react'

const project = makeProject({
  name: 'Rooms To Go',
  details: 'Full details text',
  images: ['a.png', 'b.png'],
})

function renderProjectsPage() {
  render(
    <ProjectsProvider value={createInMemoryProjects({ projects: [project] })}>
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    </ProjectsProvider>,
  )
}

const openModal = () => fireEvent.click(screen.getByRole('button', { name: /rtg\.tsx/ }))
const thumbs = () => document.querySelectorAll('img[loading="lazy"][alt=""]')

describe('Project Detail modal (Projects Page)', () => {
  beforeEach(() => {
    vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: vi.fn(), removeEventListener: vi.fn() }))
  })
  afterEach(() => vi.unstubAllGlobals())

  it('opens from a card and shows the full details', () => {
    renderProjectsPage()
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
    openModal()
    expect(screen.getByLabelText('Close')).toBeInTheDocument()
    expect(screen.getAllByText('Full details text').length).toBeGreaterThan(0)
  })

  it('closes with the close button', () => {
    renderProjectsPage()
    openModal()
    fireEvent.click(screen.getByLabelText('Close'))
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })

  it('closes on backdrop click but not on clicks inside the window', () => {
    renderProjectsPage()
    openModal()
    fireEvent.click(screen.getByRole('heading', { name: 'Rooms To Go', level: 2 }))
    expect(screen.getByLabelText('Close')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Close').closest('.fixed')!)
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })

  it('closes on Escape', () => {
    renderProjectsPage()
    openModal()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })

  it('closes the Lightbox first on Escape, then the modal on a second Escape', () => {
    renderProjectsPage()
    openModal()
    fireEvent.click(thumbs()[1])
    expect(screen.getByText('2 / 2')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByText('2 / 2')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Close')).toBeInTheDocument()

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument()
  })
})

describe('Project Detail expand (Landing Page)', () => {
  it('opens the Lightbox from an expanded row and Escape closes only it', () => {
    render(
      <ProjectsProvider value={createInMemoryProjects({ projects: [project] })}>
        <MemoryRouter>
          <FeaturedProjects projects={[project]} />
        </MemoryRouter>
      </ProjectsProvider>,
    )
    fireEvent.click(screen.getByText('Read more'))
    fireEvent.click(thumbs()[0])
    expect(screen.getByText('1 / 2')).toBeInTheDocument()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(screen.queryByText('1 / 2')).not.toBeInTheDocument()
    expect(screen.getByText('Show less')).toBeInTheDocument()
  })
})

describe('useProjectDetail', () => {
  const wrapper = ({ children }: { children: ReactNode }) => <ProjectDetailProvider>{children}</ProjectDetailProvider>

  it('opens, toggles and closes a single project', () => {
    const { result } = renderHook(() => useProjectDetail(), { wrapper })
    act(() => result.current.open(1))
    expect(result.current.isOpen(1)).toBe(true)
    act(() => result.current.toggle(2))
    expect(result.current.isOpen(2)).toBe(true)
    act(() => result.current.toggle(2))
    expect(result.current.openId).toBeNull()
    act(() => result.current.open(1))
    act(() => result.current.close())
    expect(result.current.openId).toBeNull()
  })

  it('opens an image at the clicked index through the Lightbox', () => {
    const { result } = renderHook(() => useProjectDetail(), { wrapper })
    act(() => result.current.openImage(project, 1))
    expect(screen.getByText('2 / 2')).toBeInTheDocument()
    expect(document.querySelector('img')).toHaveAttribute('src', '/assets/img/rtg/b.png')
  })
})
