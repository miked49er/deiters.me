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
The full content for a project (description, visit link, images). Presented as an inline expand on the Landing Page and as a modal on the Projects Page (intentional: the Projects Page is a card grid). Same content and open/closed behaviour either way. Not a separate route.
