import { describe, it, expect } from 'vitest';
import { featureImageSrc, imageSrc, windowLabel } from './projectFields';
import { makeProject } from './testProject';

describe('projectFields', () => {
  it('imageSrc joins the project location and file', () => {
    expect(imageSrc(makeProject({ location: '/assets/img/rtg/' }), 'a.png')).toBe('/assets/img/rtg/a.png');
  });

  it('featureImageSrc resolves the feature image under the project location', () => {
    expect(featureImageSrc(makeProject({ location: '/assets/img/rtg/', featureImage: 'hero.png' }))).toBe(
      '/assets/img/rtg/hero.png',
    );
  });

  it('windowLabel appends .tsx to the link', () => {
    expect(windowLabel(makeProject({ link: 'rtg' }))).toBe('rtg.tsx');
  });
});
