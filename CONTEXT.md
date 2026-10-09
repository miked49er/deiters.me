# deiters.me

Personal portfolio site (React + Vite + Tailwind), single context.

## Language

**Featured Project**:
A project flagged to appear as a highlight on the Landing Page. Backed by a `featured: boolean` field on the project record.
_Avoid_: Primary (legacy field of the same shape — previously meant "render this project's card with the primary theme color," unrelated to landing-page selection, and is being removed).

**Feature Image**:
The one primary image of a project, shown on its card and at the top of Project Detail. Distinct from the gallery images, which appear as thumbnails in Project Detail. Backed by the `featureImage` field on the project record.

**Landing Page**:
The single scrolling page at `/`. Contains the hero, About section, and Featured Project highlights in the order they appear in `projects.json`.

**Hero Banner**:
The ASCII rendering of the owner's name (the `//` plus "Mike Deiters") in the Landing Page's hero, typed out one whole letter at a time by a block cursor as tall as the art, over about 2 seconds, once; the cursor then blinks. Shows the full art with a blinking cursor, untyped, when the visitor prefers reduced motion. Replaces the static banner on the Landing Page only; Section Banner is still used elsewhere (Projects, Featured Projects).
_Avoid_: Section Banner (the static one still used on other pages).

**Projects Page**:
The `/projects` route. Lists every project, not just Featured ones.

**Project Detail**:
The full content for a project (description, visit link, images). Presented as an inline expand on the Landing Page and as a modal on the Projects Page (intentional: the Projects Page is a card grid). Same content and open/closed behaviour either way. Not a separate route.
