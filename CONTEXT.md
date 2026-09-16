# deiters.me

Personal portfolio site (React + Vite + Tailwind), single context.

## Language

**Featured Project**:
A project flagged to appear as a highlight on the Landing Page. Backed by a `featured: boolean` field on the project record.
_Avoid_: Primary (legacy field of the same shape — previously meant "render this project's card with the primary theme color," unrelated to landing-page selection, and is being removed).

**Landing Page**:
The single scrolling page at `/`. Contains the hero, About section, and Featured Project highlights in the order they appear in `projects.json`.

**Projects Page**:
The `/projects` route. Lists every project, not just Featured ones.

**Project Detail**:
The full content for a project (description, images) shown via inline expand at the point of click, on whichever page (Landing or Projects) the project card lives. Not a separate route.
