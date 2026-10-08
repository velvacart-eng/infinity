# Infinity Techiez

Official website for **Infinity Techiez**, a brand operated by **Advanced Vision Software LLC**.

A professional B2B IT services and business technology company.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Lucide icons
- Supabase (ready for future integration)
- Vercel (target deployment platform)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Scripts

- `npm run dev` — start development server
- `npm run build` — create production build
- `npm run start` — start production server
- `npm run lint` — run ESLint
- `npm run typecheck` — run TypeScript checks

## Environment variables

Copy `.env.example` to `.env.local` and fill in real values before production.

```bash
cp .env.example .env.local
```

## Project structure

```
app/              — Next.js App Router pages
components/       — React components
components/ui/    — shadcn/ui style components
lib/              — Utilities, config, data helpers
lib/supabase/     — Supabase client/server placeholders
supabase/         — Supabase schema SQL
types/            — Shared TypeScript types
public/           — Static assets
```

## Notes

- Placeholder business information is controlled by environment variables. Do not publish fake addresses, phone numbers or certifications.
- Service pages are generated from `lib/services-data.ts` so services can be added or removed easily.
- The `/admin` area is a placeholder for future CMS functionality.
