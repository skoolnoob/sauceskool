# The Sauce · VERSION 2.0

Static 2 page free training funnel for **The Sauce** (for Skoolers).

Destination: [skool.com/sauce](https://www.skool.com/sauce)

This replaces the v1.x Next.js landing. Site root now serves `index.html` (opt in) and `watch.html` (recorded training). Old v1 files live in `archive/v1-next/` and are not deployed.

## Pages

1. `index.html` · opt in (first name + email) → `watch.html`
2. `watch.html` · recorded training player · checkout bar after minute 35

## Ryan placeholders

Edit `js/main.js` (`CONFIG`) and the matching notes in the HTML comments.

| Key | Status |
| --- | --- |
| `VIDEO_URL` | `[paste]` |
| `CHECKOUT_URL` | `https://www.skool.com/sauce` (prefilled) |
| `PRICE` | `[paste]` · optional. Live Sauce price is $99/mo. Show after the video CTA only. Never above the video. |
| `DEADLINE` | none · countdown OFF until this is a real date. If you turn it on, the end time persists and does not reset on refresh. |

Preview the checkout bar on the training page with `watch.html?revealCta=1`.

## Publish

Production is Vercel at [sauceskool.com](https://sauceskool.com). The project must use the **Other** framework preset (not Next.js). `vercel.json` sets `framework` to `null`, skips install/build, and serves the repo root. `.vercelignore` keeps `archive/v1-next` out of the deploy so Vercel cannot pick up the archived Next app.

No build step. No React. Open `index.html` locally if you want to click through first.

GitHub Pages still works: Settings → Pages → deploy from `main` → `/ (root)`.

## Brand

The Sauce only. Not a Skool classroom clone. Not a fake live webinar.
