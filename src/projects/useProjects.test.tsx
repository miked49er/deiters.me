import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsContext } from './ProjectsContext';
import { useProjects } from './useProjects';
import { createInMemoryProjects } from './inMemoryProjects';
import { makeProject } from './testProject';

function Probe() {
  const { data, getBanner } = useProjects();
  return <p>{`${data?.projects.length}:${getBanner(makeProject({ asciiFile: '/a.txt' }))}`}</p>;
}

describe('ProjectsContext.Provider', () => {
  it('supplies the seam to descendants', () => {
    const seam = createInMemoryProjects({
      projects: [makeProject({ asciiFile: '/a.txt' })],
      banners: { '/a.txt': 'art' },
    });
    render(
      <ProjectsContext.Provider value={seam}>
        <Probe />
      </ProjectsContext.Provider>,
    );
    expect(screen.getByText('1:art')).toBeInTheDocument();
  });

  it('throws when used outside a provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/ProjectsContext.Provider/);
    vi.restoreAllMocks();
  });
});
