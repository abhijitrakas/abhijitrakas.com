# abhijitrakas.com

Personal site built with [Astro](https://astro.build).

## Editing

- **Bio and the “Beyond work” section:** `src/pages/index.astro`
- **Name, links, link-preview description:** `src/data/site.ts`
- **Colors, fonts, spacing:** `src/styles/global.css`
- **Portrait:** `src/assets/portrait.webp`. The page blends its white paper into the background, so keep a white background with a soft fade at the bottom.
- **Logo:** `src/assets/logo.svg` (page), `public/favicon.svg`, `public/apple-touch-icon.png`
- **Link-preview image:** `public/og.jpg` (1200×630)

## Commands

| Command           | Action                                  |
| ----------------- | --------------------------------------- |
| `npm install`     | Install dependencies                    |
| `npm run dev`     | Start the dev server at `localhost:4321` |
| `npm run build`   | Build the site to `./dist/`             |
| `npm run preview` | Preview the build locally               |

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). You can also run it by hand from the repo's **Actions** tab.

One-time setup:

1. **Repo → Settings → Pages:** set **Source** to "GitHub Actions" and **Custom domain** to `abhijitrakas.com`.
   (With Actions deploys, GitHub reads the domain from this setting, not from a `CNAME` file.)
2. **DNS for `abhijitrakas.com`:** remove the existing `A` record(s), then add:

   | Type    | Name  | Value                                                                       |
   | ------- | ----- | --------------------------------------------------------------------------- |
   | `A`     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`  |
   | `AAAA`  | `@`   | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
   | `CNAME` | `www` | `abhijitrakas.github.io`                                                    |

3. Once DNS has propagated and the certificate is issued, tick **Enforce HTTPS** in the same Pages settings.

GitHub Pages needs a public repo on the free plan. Private repos need GitHub Pro or higher.
