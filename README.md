# The Architecture of Anonymous Confession

An academic project website presenting a close and distant reading of 50,000 posts
from r/confession — a community that offers no verdict on the confessions it hosts.

Gyan Bhambhani · DIGHUM 160 · Summer 2026

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Static export (`output: 'export'`) — deployable as plain files
- Google Fonts via `next/font/google`: Fraunces (display), Literata (body),
  JetBrains Mono (utility)
- No database, no API routes. All prose lives in typed content files under `/content`.
- Figures live in `/public/figures` (eight PNGs from the analysis notebook).

## Structure

- `app/` — routes and root layout (header, footer, disclosure rail)
- `components/` — `DisclosureRail`, `Nav`, `Footer`, `Byline`, `PullQuote`,
  `Figure`, `DataTable`, `SourceList`
- `content/` — typed copy for each page, editable in one place
- `public/figures/` — score distribution, anonymity gradient, disclosure vs
  reward, category counts, edit artifact, topic table, feeling-word rates,
  distinctive terms

## The disclosure rail

The signature element: a fixed 1px line down the left margin with a marker that
travels on scroll and three ticks (`SETUP`, `DISCLOSURE`, `AFTERMATH`), mirroring the
three-part shape of a confession. It uses `IntersectionObserver` and CSS transforms,
collapses to a top progress bar under 900px, and respects `prefers-reduced-motion`.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
npm run lint
```

## Notes

Post text is paraphrased from public Reddit submissions; usernames are not
reproduced.
