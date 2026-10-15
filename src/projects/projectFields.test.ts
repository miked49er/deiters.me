import { describe, it, expect } from 'vitest';
import { imageSrc, windowLabel } from './projectFields';
import { makeProject } from './testProject';

describe('projectFields', () => {
  it('imageSrc joins the project location and file', () => {
    expect(imageSrc(makeProject({ location: '/assets/img/rtg/' }), 'a.png')).toBe('/assets/img/rtg/a.png');
  });

  it('windowLabel appends .tsx to the link', () => {
    expect(windowLabel(makeProject({ link: 'rtg' }))).toBe('rtg.tsx');
  });
});
