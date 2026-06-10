# Hein Zaw Fitness — heinzawfitness.me

Immersive promo portfolio for **Hein Zaw** — Certified Personal Trainer & Body Transformation Coach, Yangon, Myanmar.

**Stack:** React 18 · Vite · Framer Motion (scroll-linked animation) · Lenis (smooth scroll). Builds to pure static files — perfect for GitHub Pages.

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # outputs dist/
npm run preview    # serve the production build locally
```

## Structure

```
index.html                  — entry + SEO/OG meta + JSON-LD
public/assets/              — photos, certificate scans, favicon
src/data/content.js         — ALL site copy lives here (edit this to update text)
src/components/             — one component per section
src/styles/global.css       — design system
src/hooks/                  — Lenis smooth-scroll + media-query hooks
.github/workflows/deploy.yml — auto build & deploy on every push to main
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "Hein Zaw Fitness portfolio"
git remote add origin git@github.com:<USER>/<USER>.github.io.git
git push -u origin main
```

Then in the repo: **Settings → Pages → Source: GitHub Actions**. Every push to `main` builds and deploys automatically.

### Link the .me domain

1. Create `public/CNAME` containing exactly:
   ```
   heinzawfitness.me
   ```
   (Vite copies it into the build automatically.)
2. At your DNS provider, add:
   - `A` records for `heinzawfitness.me` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www` → `<USER>.github.io`
3. In **Settings → Pages**, set the custom domain to `heinzawfitness.me` and enable **Enforce HTTPS** once the certificate is issued.

## Before launch — TODO

All in [src/data/content.js](src/data/content.js) (search for `TODO`):

- [ ] **Contact links** — replace `#` with real links: `https://wa.me/959XXXXXXXXX`, `https://t.me/...`, `https://instagram.com/...`, `https://m.me/...`
- [ ] **Stats** — verify years coaching / clients trained / kg numbers.
- [ ] **Testimonials** — the three quotes are samples; replace with real client quotes.
