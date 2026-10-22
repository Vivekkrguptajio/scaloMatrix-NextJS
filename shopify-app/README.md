# scaloMATRIX — Shopify landing page

Marketing site for scaloMATRIX's Shopify store-building service. Live at **https://www.scalomatrix.com**.
Built with **Next.js (App Router)**, **Tailwind CSS 4** and **Framer Motion**.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build — run this before every push
npm start        # serve the production build locally
```

> `AGENTS.md` / `CLAUDE.md` are notes for AI coding tools; leave them.

---

## Folder map

```
shopify-app/
├─ src/
│  ├─ app/                    ← pages + site-wide config
│  │  ├─ layout.js            fonts, <html>, SEO metadata, theme script, JSON-LD
│  │  ├─ page.jsx             THE HOME PAGE: lists every section in order
│  │  ├─ globals.css          design tokens (colours, fonts), dark theme, shared classes
│  │  ├─ terms/ privacy/ legal/   the 3 policy pages (use components/LegalLayout.jsx)
│  │  ├─ api/contact/route.js     contact form → sends an email (Resend)
│  │  ├─ sitemap.js · robots.js   generated sitemap.xml / robots.txt
│  │  ├─ opengraph-image.jsx      the image shown when the link is shared
│  │  └─ icon.png                 favicon
│  ├─ components/             ← one file per section / widget (see below)
│  ├─ data/
│  │  ├─ content.js           hero text + the 3 hero stats
│  │  └─ faq.js               FAQ questions & answers (page + Google FAQ schema)
│  └─ utils/
│     ├─ site.js              the site's canonical URL (https://www.scalomatrix.com)
│     └─ cloudinaryLoader.js  serves images straight from Cloudinary, resized
├─ public/                    static files: icon.png, work/ (store screenshots)
├─ next.config.mjs            image settings (uses cloudinaryLoader)
└─ .env.production            NEXT_PUBLIC_SITE_URL
```

## The home page, top to bottom (`src/app/page.jsx`)

| # | What the visitor sees | File |
|---|---|---|
| – | 1-second matrix loading screen | `Loader.jsx` |
| – | Navbar (+ full-screen mobile menu, dark/light toggle) | `Navbar.jsx` |
| 1 | Hero: headline, stats, rotating store previews | `Hero.jsx` |
| 2 | "Our work" — auto-scrolling, swipeable store cards | `HeroVCards.jsx` |
| 3 | "What founders say" — testimonials + orange results ticker | `HappyClients.jsx` |
| 4 | "Real stores. Real numbers." — 4 case studies | `CaseStudiesGrid.jsx` |
| 5 | "Do the math" — ROI calculator | `Calculator.jsx` |
| 6 | "Our approach" — why conversion work matters | `CroBrandExercise.jsx` |
| 7 | "Are we a good fit?" | `WhoWeDontWorkWith.jsx` |
| 8 | "Simple plans. Clear prices." — 4 pricing cards | `ServicesAndPricing.jsx` |
| 9 | "The promise" orange block | `ThePromise.jsx` |
| 10 | "Let's build something worth buying" — contact form | `ContactUs.jsx` |
| 11 | FAQ accordion | `Faq.jsx` |
| – | Footer with the big logo (revealed as you scroll) | `Contact.jsx` |

Small helpers: `AutoMarquee.jsx` (auto-scroll + swipe), `ScrollReveal.jsx` (fade-in on scroll + progress bar),
`ScrollToTop.jsx`, `WhatsAppButton.jsx`, `CustomCursor.jsx`, `SmoothScroll.jsx`,
`JsonLd.jsx` (Google structured data), `LegalLayout.jsx` (policy page frame).

## "I want to change…" cheat sheet

| Change | Edit |
|---|---|
| Hero headline / stats | `src/data/content.js` (rotating words, stats) · `Hero.jsx` (layout) |
| Prices, plans, what's included | `ServicesAndPricing.jsx` (`services` array at the top) |
| FAQ questions | `src/data/faq.js` |
| Testimonials / ticker numbers | `HappyClients.jsx` |
| Case-study numbers & screenshots | `CaseStudiesGrid.jsx` (`allStudies`) · `HeroVCards.jsx` (cards) |
| Social links (Instagram, YouTube) | `Contact.jsx` (footer icons) and `JsonLd.jsx` (`sameAs`) |
| Phone, email, WhatsApp number | `ContactUs.jsx`, `Navbar.jsx`, `LegalLayout.jsx`, `Faq.jsx`, `JsonLd.jsx`, `WhatsAppButton.jsx` |
| Colours, dark mode, fonts | `src/app/globals.css` (`@theme` + `html[data-theme='dark']`) and `layout.js` (Google Fonts link) |
| Page title / description / share image | `src/app/layout.js`, `opengraph-image.jsx` |
| Section order | `src/app/page.jsx` |
| Left/right page padding | `.container-x` in `globals.css` |
| Policy text | `terms/page.jsx`, `privacy/page.jsx`, `legal/page.jsx` |

## Adding a new store to "Our work"

1. Put the full-page screenshot in `public/work/` as a **.webp**, about 800px wide and cropped to the top ~1100px
   (the card only shows the top; a 10MB PNG will slow the site down).
2. Add one object at the top of `row1Cards` in `HeroVCards.jsx`:
   `{ id, img: '/work/<file>.webp', title, url, category, stat }`.
   `stat` (e.g. `'+30% revenue'`) is optional — leave it out until you have a real, measured number.

## Design system (all in `globals.css`)

- **Colours** are tokens: `brand` (orange), `ink` (text), `muted`, `cream` (page background),
  `paper` (cards), `panel` (dark blocks), `line` (borders). Dark mode swaps their values — never hard-code hex in components.
- **Fonts:** Plus Jakarta Sans (headlines) · Inter (body) · JetBrains Mono (small labels).
- **Helper classes:** `.h-display` / `.h-section` / `.h-card` (headings), `.accent` (orange word),
  `.eyebrow` (small label), `.lead` (intro text), `.btn-primary` / `.btn-ghost`, `.container-x` (page width + side padding).
- **Theme:** light by default; the sun/moon button saves the choice in `localStorage` (`theme-v3`).

## Contact form (important)

`ContactUs.jsx` → `POST /api/contact` → Resend email. Needs these **Vercel environment variables**:

- `RESEND_API_KEY` — required.
- `CONTACT_TO_EMAIL` — where leads are delivered (defaults to a developer address).
  Until `krafficgroup.com` is verified in Resend, only the Resend account owner's address can receive mail.

## Deploy

Push to `main` → Vercel builds automatically. **Always run `npm run build` first** — a failed build means a failed deploy.
