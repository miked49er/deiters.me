import type { Project } from './project';
import type { ProjectsStore } from './projectsStore';
import { createInMemoryProjectsStore } from './inMemoryProjects';

/** Loads projects.json and each distinct banner file once, before first render. */
export async function loadProductionProjectsStore(): Promise<ProjectsStore> {
  try {
    const res = await fetch(`${import.meta.env.BASE_URL}data/projects.json`);
    if (!res.ok) {
      throw new Error(`Failed to load projects.json: ${res.status}`);
    }
    const { projects } = (await res.json()) as { projects: Project[] };

    const banners: Record<string, string> = {};
    const asciiFiles = [...new Set(projects.map((p) => p.asciiFile))];
    await Promise.all(
      asciiFiles.map(async (file) => {
        try {
          const bannerRes = await fetch(file);
          if (bannerRes.ok) banners[file] = await bannerRes.text();
        } catch {
          // A missing banner falls back to the project name; it must not fail the site.
        }
      }),
    );
    return createInMemoryProjectsStore({ projects, banners });
  } catch (error) {
    return createInMemoryProjectsStore({ error });
  }
}
