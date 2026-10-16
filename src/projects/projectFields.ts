import type { Project } from './project';

/** URL of one of a project's images (feature image or gallery file). */
export function imageSrc(project: Project, file: string): string {
  return `${project.location}${file}`;
}

/** URL of a project's feature image. */
export function featureImageSrc(project: Project): string {
  return imageSrc(project, project.featureImage);
}

/** Filename-style title shown in a project's window header. */
export function windowLabel(project: Project): string {
  return `${project.link}.tsx`;
}
