import { describe, expect, it } from 'vitest';
import { createInMemoryProjects } from './inMemoryProjects';
import { makeProject } from './testProject';

describe('in-memory projects adapter', () => {
  it('exposes fixture projects and no error', () => {
    const seam = createInMemoryProjects({ projects: [makeProject({ id: 7 })] });
    expect(seam.data?.projects.map((p) => p.id)).toEqual([7]);
    expect(seam.error).toBeNull();
  });

  it('returns fixture banners and null when none exists', () => {
    const a = makeProject({ asciiFile: '/a.txt' });
    const b = makeProject({ id: 2, name: 'Other', asciiFile: '/b.txt' });
    const seam = createInMemoryProjects({
      projects: [a, b],
      banners: { '/a.txt': 'art' },
    });
    expect(seam.getBanner(a)).toBe('art');
    expect(seam.getBanner(b)).toBeNull();
  });

  it('can represent a load error', () => {
    const err = new Error('boom');
    const seam = createInMemoryProjects({ error: err });
    expect(seam.data).toBeNull();
    expect(seam.error).toBe(err);
  });
});
