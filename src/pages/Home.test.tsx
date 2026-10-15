import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { ProjectsContext } from '../projects/ProjectsContext';
import { createInMemoryProjects } from '../projects/inMemoryProjects';
import { SECTION_LINKS } from '../lib/sections';

describe('Home', () => {
  it('gives every nav hash link a matching element id', () => {
    const { container } = render(
      <ProjectsContext.Provider value={createInMemoryProjects({ projects: [] })}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </ProjectsContext.Provider>,
    );

    for (const { href, label } of SECTION_LINKS) {
      expect(screen.getByText(`[ ${label.toLowerCase()} ]`)).toHaveAttribute('href', href);
      expect(container.querySelector(href)).not.toBeNull();
    }
  });
});
