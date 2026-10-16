import { describe, expect, it } from 'vitest';
import { createInMemoryProjects } from './inMemoryProjects';
import { makeProject } from './testProject';

describe('in-memory projects store', () => {
  it('is ready with the fixture projects', () => {
    const store = createInMemoryProjects({ projects: [makeProject({ id: 7 })] });
    expect(store.status).toBe('ready');
    if (store.status !== 'ready') return;
    expect(store.projects.map((p) => p.id)).toEqual([7]);
  });

  it('is ready with no projects by default', () => {
    const store = createInMemoryProjects();
    expect(store).toMatchObject({ status: 'ready', projects: [] });
  });

  it('returns fixture banners and null when none exists', () => {
    const a = makeProject({ asciiFile: '/a.txt' });
    const b = makeProject({ id: 2, name: 'Other', asciiFile: '/b.txt' });
    const store = createInMemoryProjects({
      projects: [a, b],
      banners: { '/a.txt': 'art' },
    });
    expect(store.getBanner(a)).toBe('art');
    expect(store.getBanner(b)).toBeNull();
  });

  it('is in the error state when given an error, with no projects', () => {
    const err = new Error('boom');
    const store = createInMemoryProjects({ projects: [makeProject()], error: err });
    expect(store.status).toBe('error');
    expect(store).not.toHaveProperty('projects');
    if (store.status !== 'error') return;
    expect(store.error).toBe(err);
  });
});
