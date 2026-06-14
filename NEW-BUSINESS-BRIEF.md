# New Business Website — Template Brief

This project is a reusable website template, originally built for a gardening
business. It is a **Next.js** site (plain JavaScript, App Router) with a polished,
animated, mobile-first design. Use it as the starting point for another business.

---

## How to start a new business site from this template

1. **Duplicate this whole folder** and rename it for the new business
   (e.g. copy `Website-Template` → `AcmePlumbing`).
2. Open the new folder in **VS Code**.
3. Start a **new Claude chat** in that folder and paste the prompt at the bottom
   of this file, with the new business's details filled in.
4. Preview locally with `npm install` then `npm run dev` → http://localhost:3000
5. Publish via GitHub + Vercel (same as before).

---

## What the template already includes
- 6 pages: Home, Services, About, Gallery, Reviews, Contact
- Shared header (with mobile menu) and footer
- Full-screen hero, scroll animations, animated stat counters, gallery lightbox,
  sticky/glass header, "Book Now" placeholder, contact form, map placeholder
- Design system driven by CSS variables (easy colour re-theme)

## Where things live (the customisation map)
| What you want to change | File |
|---|---|
| **Colours / fonts** | `app/globals.css` — the `:root` variables at the very top |
| **Business name, logo text, nav** | `components/Header.js` |
| **Phone, email, hours, social links** | `components/Footer.js` |
| **Home page text & services overview** | `app/page.js` |
| **Services list & descriptions** | `app/services/page.js` |
| **About story & values** | `app/about/page.js` |
| **Gallery photos** | `app/gallery/page.js` (the `photos` list at the top) |
| **Reviews** | `app/reviews/page.js` (the `reviews` list at the top) |
| **Contact details, form, map, booking** | `app/contact/page.js` |
| **Browser tab titles / SEO descriptions** | the `metadata` block in each page file |
| **Your own images** | put files in `public/images/`, reference as `/images/file.jpg` |

The fonts are loaded in `app/layout.js` (Google Fonts link). To change them,
swap the font names there and in the `globals.css` variables.

---

## Intake form — fill this in for the new business
```
Business name:
What they do (trade/services):
Short description / about:
Areas covered or address:
Phone:
Email:
Opening hours:
Instagram / Facebook / other links:
A few customer reviews to feature:
Colour preference / vibe (e.g. greens & earthy, blue & corporate, warm & friendly):
Any pages to add or remove:
```

---

## Ready-to-paste prompt for the new chat
> I'm using an existing Next.js website template in this folder as a starting point
> for a new business. Please keep the same structure, components and animation
> system, but re-theme the colours/fonts to suit the new business and replace ALL
> the text, services, reviews, gallery captions and contact details with the new
> business's information below. Update the page `metadata` titles/descriptions too.
> Use sensible placeholder text for anything missing and tell me what you still need.
> Keep it easy for a non-coder to edit, and tell me how to preview it.
>
> [paste the filled-in intake form here]
