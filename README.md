# Jolly Goodfellows Gardening — Website

A Next.js website for Jolly Goodfellows Gardening, Bristol.

## What this is
- Built with **Next.js** (App Router) using plain JavaScript — no TypeScript.
- Pages live in `app/` (one folder per page). Shared header/footer/animations live in `components/`.
- All styling is in `app/globals.css`. The colour palette is set with CSS variables at the top of that file.
- The old plain-HTML version is kept in `legacy-static/` as a backup.

## Editing text
Open the project in VS Code and edit the `.js` files in `app/`:
- Home → `app/page.js`
- Services → `app/services/page.js`
- About → `app/about/page.js`
- Gallery → `app/gallery/page.js` (photos are listed at the top of the file)
- Reviews → `app/reviews/page.js` (reviews are listed at the top of the file)
- Contact → `app/contact/page.js`
- Header / Footer (phone, email, links) → `components/Header.js`, `components/Footer.js`

Search the files for CAPITAL-LETTER comments (e.g. `EMAIL`, `INSTAGRAM`, `OPENING HOURS`) to find the bits to personalise.

## Photos
Put your own images in `public/images/`, then reference them as `/images/your-file.jpg`.

## Run it on your computer (optional)
1. Install Node.js (LTS) from https://nodejs.org
2. In a terminal, from this folder run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Publish with GitHub + Vercel
See the step-by-step in the chat, or in short:
1. Push this folder to a GitHub repository.
2. Import the repository at https://vercel.com.
3. Vercel auto-detects Next.js, builds it, and gives you a live link.
Every time you push a change to GitHub, Vercel redeploys automatically.

## Still to switch on once live
- **Contact form:** connect Formspree (https://formspree.io) — see the comment in `app/contact/page.js`.
- **Map:** paste a Google Maps embed into `app/contact/page.js`.
- **Google reviews / booking widgets:** marked placeholders in `app/reviews/page.js` and `app/contact/page.js`.
