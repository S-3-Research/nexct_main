# NEXCt

A responsive Next.js / TypeScript landing page for nexct.io, reconstructed from `reference/nexct_09242026.mhtml`.

## Run locally

```sh
npm install
npm run dev
```

Open http://127.0.0.1:3000. For production, run `npm run build` followed by `npm start`.

## Structure

- `src/app`: page composition, metadata, favicon, and styles.
- `src/components`: section components, shared UI, partner/product cards, and interactive navigation.
- `src/data/content.ts`: navigation, partner/product content, and process steps.
- `public/images`: original hero image extracted from the supplied archive.

Tailwind CSS 4 provides layout utilities via `@apply` and shared theme tokens. Exact reference gradients, dimensions, typography, and 900px / 620px breakpoints are retained in `globals.css`. Preflight is intentionally omitted to preserve the reference's browser-default margins and font metrics. No external fonts or image downloads are required.

Only the header needs client-side React. TrialChat is a decorative static preview, as in the reference. Contact links open email or phone applications; partner links open external websites.

## Checks

```sh
npm run lint
npm run typecheck
npm run build
```

The source reference remains unchanged. The original image is served without lossy transformation for faithful reproduction.

Visual and navigation checks: start the app on port 3001 (`npm run dev -- --port 3001`), then run `npm run verify`. Requires Python 3 and Playwright Chromium (`npx playwright install chromium`). Override the server URL with `PREVIEW_URL`. The check extracts the MHTML baseline, compares section geometry at 1440, 768, 390, and 320px, checks overflow and navigation, and saves screenshots/report under `/tmp/nexct-qa`.
