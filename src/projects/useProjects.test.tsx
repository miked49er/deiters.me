import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectsStoreContext } from './ProjectsStoreContext';
import { useProjects } from './useProjects';
import { createInMemoryProjectsStore } from './inMemoryProjects';
import { makeProject } from './testProject';

function Probe() {
  const store = useProjects();
  const count = store.status === 'ready' ? store.projects.length : 'error';
  return <p>{`${count}:${store.getBanner(makeProject({ asciiFile: '/a.txt' }))}`}</p>;
}

describe('ProjectsStoreContext.Provider', () => {
  it('supplies the store to descendants', () => {
    const store = createInMemoryProjectsStore({
      projects: [makeProject({ asciiFile: '/a.txt' })],
      banners: { '/a.txt': 'art' },
    });
    render(
      <ProjectsStoreContext.Provider value={store}>
        <Probe />
      </ProjectsStoreContext.Provider>,
    );
    expect(screen.getByText('1:art')).toBeInTheDocument();
  });

  it('throws when used outside a provider', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Probe />)).toThrow(/ProjectsStoreContext.Provider/);
    vi.restoreAllMocks();
  });
});
