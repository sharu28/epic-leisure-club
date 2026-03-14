# Epic Collection — Website Design

## Project Purpose
Marketing and showcase site for Epic Collection, a curated portfolio of boutique properties along Sri Lanka's southern coast. No booking backend — goal is to surface the properties beautifully and drive enquiries.

**Primary conversion goal:** Get visitors to submit an enquiry (contact/booking form).

## Target Audience
Local and regional guests — South Asian travellers familiar with Sri Lanka. Design and copy should feel aspirational but not alienating; these are not first-time visitors to the country.

## Status
Site is live. All work should be production-ready before merging. Vercel deploys automatically on push to `master`.

**Live URL:** https://epic-collection-website.vercel.app
**GitHub:** https://github.com/sharu28/epic-leisure-club

## Remaining Work
- [ ] Contact / enquiry form (dedicated page or modal — primary conversion point)
- [ ] More journal articles

## Stack
- **Framework:** Vite + React (JSX)
- **Routing:** react-router-dom v7
- **Styling:** CSS Modules (`.module.css` per component)
- **Fonts:** Playfair Display (serif) + Inter (sans) via Google Fonts
- **Dev server:** `npm run dev` → http://localhost:5173 (or next available port)
- **Deploy:** Vercel (auto-deploy on push to `master`)

## Design System
All design tokens are CSS custom properties in `src/index.css`:

```
--font-sans: 'Inter', -apple-system, sans-serif
--font-serif: 'Playfair Display', Georgia, serif
--color-white: #ffffff
--color-off-white: #e4e4e4
--color-bg-dark: #0a0c0b        ← primary background
--color-border: rgba(255,255,255,0.15)
--color-text-muted: rgba(255,255,255,0.6)
--layout-padding: clamp(1.5rem, 5vw, 4rem)
```

**Aesthetic:** Dark editorial luxury. Think art magazine meets boutique hotel. Playfair Display for all headings, Inter Light (300) for body. Hover interactions are slow and cinematic (1.2s easing). No bright colors — everything lives in near-black, white, and muted opacity.

## Image Sources
All property images are hosted on Squarespace CDN:
`https://images.squarespace-cdn.com/content/v1/678b887f4efaf402bd6ced91/[image-id]/[filename]`

Do not hotlink from other sources — always use the Squarespace CDN URLs for Epic Collection images.

## Properties & Routes
| Property | Route | Tagline |
|---|---|---|
| Epic Unawatuna | `/epic-unawatuna` | A Gateway to Relaxation and Elegance |
| Bliss by Epic | `/bliss-by-epic` | Discover Peace, Embrace Sophistication |
| Aura by Epic | `/aura-by-epic` | Your Sanctuary of Serenity in Mirissa |

## Contact Info
- **Email:** info@epicleisureclub.com
- **Phone:** +94 76 290 02 03
- **Address:** 26, Lower Dickson Road, Galle, Sri Lanka

## File Structure
```
src/
  components/       ← shared/reusable components
    Header.jsx/.module.css
    Hero.jsx/.module.css
    BookingBar.jsx/.module.css
    Manifesto.jsx/.module.css
    Collection.jsx/.module.css
    Footer.jsx/.module.css
    PropertyPage.jsx/.module.css  ← shared property detail layout
    ArticlePage.jsx/.module.css
    ScrollToTop.jsx
  pages/            ← one file per route
    HomePage.jsx
    EpicUnawatuna.jsx
    BlissByEpic.jsx
    AuraByEpic.jsx
    JournalPage.jsx/.module.css
  data/
    articles.js     ← journal article content
  App.jsx           ← route definitions
  main.jsx          ← BrowserRouter wrapper
  index.css         ← global reset + CSS custom properties
```

## Conventions
- CSS Modules for all component styles — no global class names except in `index.css`
- Use `<Link>` from react-router-dom for internal navigation (not `<a href>`)
- Images use the `loading="lazy"` attribute
- Hover transitions: `cubic-bezier(0.16, 1, 0.3, 1)` for cinematic easing
- Never add inline styles except for dynamic values (e.g., index-based heights)
- All new work must be production-ready — site is live
