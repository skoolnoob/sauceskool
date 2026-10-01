# The Sauce

Community landing page for **The Sauce** (for Skoolers).

Live destination: [sauceskool.com](https://sauceskool.com)

Join link: `https://www.skool.com/sauce?ref=sauceskool`

Free trial, then $99/mo until 120 members. Night mode. Yellow call to action.

## App

Next.js App Router.

- `app/page.tsx` community landing page
- `app/globals.css` night mode styles
- `public/inside/` classroom lesson tiles

`MEMBERS_NOW` in `app/page.tsx` is the live seat count. Do not invent it.

## Publish

Vercel project **sauceskool**. This branch sets `framework` to `nextjs` in `vercel.json` so the preview builds the App Router page.

Do not promote production from a draft. Landing Pages promotes after the preview check.

The old free training funnel lives in `archive/v2-webinar/` and is not deployed (`.vercelignore` skips `archive`).
