# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal portfolio site (deiters.me) built with React + TypeScript on Vite, styled with Tailwind CSS. Static, client-side only — no backend. This is a from-scratch rewrite of a prior Angular version; the `react-rewrite` branch replaced `src/` in place. Project data is a static JSON file loaded at runtime rather than an API or bundled import (see Data layer below) — the goal is that adding a new project never requires a rebuild.

## Commands

```bash
npm run dev       # vite — dev server (default http://localhost:5173)
npm run build     # tsc -b && vite build — outputs to docs/ (see Deployment)
npm run preview   # vite preview — serve the docs/ build output locally
npm test          # vitest run — Vitest + Testing Library, single run
npm run lint      # oxlint
```

Run a single test file: `npx vitest run src/App.test.tsx`. Drop `run` (`npx vitest`) for watch mode during development.

## Deployment

`vite.config.ts` sets `build.outDir` to `docs/`, not the default `dist/`, so the build output is committed directly to `docs/` on `master` and served via GitHub Pages from that folder, with the custom domain in `CNAME`. `.travis.yml` still reflects the old Angular/Yarn build (`yarn lint` / `yarn build --base-href ...`) and needs updating for this stack — check it before relying on CI.

## Architecture

- **Routing** (`src/App.tsx`, via `react-router-dom`): four routes — `/` (`Home`, feature list placeholder), `/projects` (`Projects`, list view placeholder), `/projects/:link` (`ProjectDetails`), `/about` (`About`). Only `Home` currently does anything real; the rest are placeholders pending the full component rebuild.
- **Data layer — runtime-fetched, not bundled**: `public/data/projects.json` (a Vite **public asset**, copied through to the build output untouched) holds the `projects` array plus a `moreProjects` entry, typed by `Project` in `src/types/project.ts`. `src/hooks/useProjects.ts` `fetch()`s it at runtime instead of `import`-ing it. This is deliberate: because `public/` passes straight through the build, **adding a new project means editing `projects.json` and dropping its images into `public/assets/img/<project>/` — no `npm run build` required**, and that same file can be hand-edited directly in the deployed `docs/` output too.
- **Per-project ASCII banners**: each project's banner lives in its own `public/assets/img/<project>/ascii.txt`, referenced from its `projects.json` entry via `asciiFile` (a path, not inline text). Kept in a separate file rather than embedded in the JSON so `projects.json` stays legible and swapping to a pre-rendered SVG banner later is a pure file/field swap, not a data-format change.
- **Personal ASCII constants**: `src/data/ascii.ts` holds `NAME_ASCII`, `JOB_ASCII`, `MORE_INFO`, `PROJECTS_TITLE` — these are compiled TS constants (not runtime-fetched) because they're not part of the per-project workflow and change rarely.
- **`Project` type** (`src/types/project.ts`) intentionally has **no `state` field**. In the old Angular version `state: 'show'|'hide'` was mutated on the data object to drive carousel/detail-view slide animations — that's transient UI/animation state, not project data, and belongs in component state when the carousel is rebuilt, not on the data model.
- **Styling**: Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) — theme customization lives in the `@theme` block at the top of `src/index.css` (`--color-primary`/`--color-secondary`/`--color-accent` for the dark-royal-purple/white/gold palette, `--font-mono`/`--font-sans` for `Nova Mono`/`Open Sans`). The old Angular version's custom SCSS breakpoints (`480/768/1024`) were dropped in favor of Tailwind's default `sm/md/lg/xl` scale. The old z-index scale is noted in a comment in `src/index.css` for reference until the layered components (feature carousel, overlays, header) are rebuilt.
- **Testing**: Vitest + Testing Library + `jsdom`, configured inline in `vite.config.ts` (`test` block) rather than a separate config file; setup file is `src/setupTests.ts`.

## Status

This is a scaffold, not a finished rewrite: `Projects`, `ProjectDetails`, and `About` are placeholders, and the original feature carousel, wheel/scroll directives, Hammer.js touch gestures, and overlays have not been rebuilt yet. `Home` is the only route doing real work (fetching and rendering `projects.json`) and exists mainly to prove the data flow end-to-end.
