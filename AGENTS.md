<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# bangla-news-24

Bengali news aggregator: Next.js 16 (App Router) + better-auth with MongoDB. Deployed on Vercel.

## Next 16 toolchain — differs from older Next.js
- `middleware.ts` is **deprecated**; the convention is `src/proxy.ts` exporting `proxy()`. This repo already uses it — do not create `middleware.ts`.
- React Compiler is enabled (`reactCompiler: true` in `next.config.ts`).
- Tailwind **v4** + daisyUI: there is no `tailwind.config.*`. All config lives in `src/app/globals.css` (`@import "tailwindcss"; @plugin "daisyui";`). Theme is set with `data-theme` on `<html>`.
- Path alias `@/*` → `./src/*`.
- Route `params` are a `Promise` and must be `await`ed. The root layout uses the global `LayoutProps<"/">` type.
- When unsure about an API, read `node_modules/next/dist/docs/` instead of relying on memory.

## Commands
- `npm run dev`, `npm run build`, `npm run start`
- `npm run lint` (ESLint 9 flat config, `eslint.config.mjs`)
- **No test, typecheck, format, or codegen scripts exist.** Use `npx tsc --noEmit` for a type check. No CI (`.github/` absent).

## Auth (better-auth + MongoDB)
- Server config `src/lib/auth.ts`; client `src/lib/auht-client.ts`. The client filename is **misspelled (`auht`)** and is imported as `@/lib/auht-client` from several files — rename it only if you update every import site.
- Catch-all handler at `src/app/api/auth/[...all]/route.ts` (`toNextJsHandler`).
- `.env` is gitignored and no `.env.example` is committed. The code reads these exact names:
  - `MONGODB_URL`
  - `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET_ID` (`_SECRET_ID`, not `_SECRET`)
  - `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET_ID`
  - `BETTER_AUTH_UR` (sic — the missing final `L` matches the code)
- MongoDB holds **auth data only** (db name `bangal-news-24`, hardcoded in `src/lib/auth.ts`). News content does not live in the database.

## News data
- Fetched server-side from the external API `https://news-api-v2.vercel.app/api/…` (`/sections`, `/article/:newsId`, `/category/:categoryId`) via plain `fetch` in page components.
- `next/image` remote hosts are allowlisted in `next.config.ts` under `images.remotePatterns` (currently only `ichef.bbci.co.uk`). An image from any other host fails until its hostname is added there.

## Repo notes
- `CLAUDE.md` is just `@AGENTS.md` — edit this file to cover both.
