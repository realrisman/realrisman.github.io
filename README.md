# Muhamad Risman — Portfolio & Writing

Personal portfolio and engineering notes for [realrisman.github.io](https://realrisman.github.io/).

## Stack

- Astro 7 with static output
- Tailwind CSS 4 through the first-party Vite plugin
- Astro Content Layer for Markdown posts
- TypeScript 6
- Partytown for optional analytics isolation
- GitHub Pages deployment

## Development

```sh
pnpm install
pnpm dev
```

The local site runs at `http://localhost:4321`.

## Quality checks

```sh
pnpm build
```

The production command runs Astro's type/content checks before generating the static site in `dist/`.

## Content

Blog posts live in `src/content/blog`. Project data lives in `src/data/projects.ts`.

## Environment variables

Optional integrations use:

- `GTAG_MEASUREMENT_ID`
- `GISCUS_REPO`
- `GISCUS_REPO_ID`
- `GISCUS_CATEGORY`
- `GISCUS_CATEGORY_ID`
