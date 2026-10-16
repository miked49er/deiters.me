import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedProjects from './FeaturedProjects';
import { ProjectsStoreContext } from '../projects/ProjectsStoreContext';
import { createInMemoryProjects } from '../projects/inMemoryProjects';
import type { Project } from '../projects/project';

const project = (over: Partial<Project> = {}): Project => ({
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
});

const renderFeaturedRow = (p: Project) =>
  render(
    <ProjectsStoreContext.Provider value={createInMemoryProjects({ projects: [p] })}>
      <MemoryRouter>
        <FeaturedProjects projects={[p]} />
      </MemoryRouter>
    </ProjectsStoreContext.Provider>,
  );

const LINK = '[ visit site → ]';

describe('FeaturedProjects', () => {
  it('hides the live-site link until the row is expanded', () => {
    renderFeaturedRow(project());
    expect(screen.queryByText(LINK)).not.toBeInTheDocument();
  });

  it('shows the live-site link above "Show less" when expanded', () => {
    renderFeaturedRow(project());
    fireEvent.click(screen.getByText('Read more'));

    const link = screen.getByRole('link', { name: LINK });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    const showLess = screen.getByText('Show less');
    expect(link.compareDocumentPosition(showLess) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('omits the live-site link when project.site is empty', () => {
    renderFeaturedRow(project({ site: '' }));
    fireEvent.click(screen.getByText('Read more'));
    expect(screen.queryByText(LINK)).not.toBeInTheDocument();
  });

  it('lists only featured projects', () => {
    const projects = [
      project({ id: 1, name: 'Shown', featured: true }),
      project({ id: 2, name: 'Hidden', featured: false }),
    ];
    render(
      <ProjectsStoreContext.Provider value={createInMemoryProjects({ projects })}>
        <MemoryRouter>
          <FeaturedProjects projects={projects} />
        </MemoryRouter>
      </ProjectsStoreContext.Provider>,
    );
    expect(screen.getAllByText('Shown').length).toBeGreaterThan(0);
    expect(screen.queryByText('Hidden')).not.toBeInTheDocument();
  });
});
