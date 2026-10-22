# d365-blog

A static blog about Dynamics 365 Finance & Operations development. Its look is
inspired by the D365 F&O web client and built with Fluent 2 design tokens.

## Stack

- [Astro](https://astro.build) + TypeScript, fully static output
- Plain CSS with Fluent 2–style design tokens
- Posts written in Markdown (Obsidian-compatible) in `src/content/posts/`
- Hosted on Azure Static Web Apps, deployed by GitHub Actions

## Development

Requires Node.js 22.22 or newer.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run format   # Prettier
```
