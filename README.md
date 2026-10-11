# deiters.me

Personal portfolio site for Mike Deiters, built with React, Vite and Tailwind.

Live at [deiters.me](https://deiters.me).

## Development

```sh
npm install
npm run dev      # local dev server
npm test         # vitest
npm run build    # type-check and build to docs/
```

## Deployment

The site is served by GitHub Pages from `docs/`. Run `npm run build` and commit the result. `CNAME` lives in `public/` so each build keeps the custom domain.

## More

Domain terms are in [`CONTEXT.md`](CONTEXT.md). Agent and issue-tracker conventions are in [`agent-docs/`](agent-docs/).
