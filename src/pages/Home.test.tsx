import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { ProjectsStoreContext } from '../projects/ProjectsStoreContext';
import { createInMemoryProjectsStore } from '../projects/inMemoryProjects';
import { SECTION_LINKS } from '../lib/sections';

describe('Home', () => {
  it('gives every nav hash link a matching element id', () => {
    const { container } = render(
      <ProjectsStoreContext.Provider value={createInMemoryProjectsStore({ projects: [] })}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ProjectsStoreContext.Provider>,
    );

    for (const { href, label } of SECTION_LINKS) {
      expect(screen.getByText(`[ ${label.toLowerCase()} ]`)).toHaveAttribute('href', href);
      expect(container.querySelector(href)).not.toBeNull();
    }
  });

  it('shows the projects error and no project content when the store failed to load', () => {
    render(
      <ProjectsStoreContext.Provider value={createInMemoryProjectsStore({ error: new Error('boom') })}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ProjectsStoreContext.Provider>,
    );

    expect(screen.getByText('Failed to load projects.')).toBeInTheDocument();
    expect(screen.queryByText(/Session terminated/)).not.toBeInTheDocument();
    expect(document.querySelector('#projects')).toBeNull();
  });
});
