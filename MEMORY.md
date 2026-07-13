# Project notes

## Short links (`/s/`)

All shortened public URLs live under the `/s/` prefix, e.g. `https://www.digitalrilievi.it/s/rc2026`.

To add a short link:
1. Put the target file in `public/` with a full descriptive name.
2. Add one entry to the `redirects()` array in `next.config.js`:
   ```js
   { source: "/s/<slug>", destination: "/<file>", permanent: false }
   ```
3. Push to `main` — Vercel auto-deploys.

### Existing short links
| Short link | Target |
|------------|--------|
| `/s/rc2026` | `/rapporto-costruzioni-2026.pdf` — Rapporto Costruzioni article PDF |
