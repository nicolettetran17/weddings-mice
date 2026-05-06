# All In Weddings — Prototype

End-to-end destination wedding planning prototype: a **landing page** + **conversational AI planner** for a multi-brand hotel portfolio (Hard Rock, UNICO 20°87°, Nobu, AVA Resort).

> **Status:** Personal prototype for design review. Not affiliated with the brands referenced.

## Live site

After GitHub Pages is enabled on `main`:

- Landing page: `https://nicolettetran.github.io/aiw-wedding-prototype/`
- Planner chatbot: `https://nicolettetran.github.io/aiw-wedding-prototype/aiw-prototype/plan.html`
- Design system showcase: `https://nicolettetran.github.io/aiw-wedding-prototype/rcd-design-system/`

## Repo layout

```
.
├── index.html                # Root redirect → aiw-prototype/index.html
├── rcd-design-system/        # The design system the prototype consumes
│   ├── tokens.css            # Global tokens (colors, fonts, spacing, radii)
│   ├── fonts/                # Isabella Grand (titles) + Poppins (body)
│   ├── assets/logos/         # Brand logos (33 PNGs + manifest.json)
│   └── index.html            # Token + button + logo showcase page
└── aiw-prototype/            # The product prototype
    ├── index.html            # Marketing landing page
    ├── plan.html             # Conversational chatbot wedding planner
    ├── _data.js              # Mocked catalog (hotels, spaces, vendors, brides, vibes)
    ├── _app.js               # Shared helpers (nav, footer, SVG mocks, state, currency)
    └── _theme.css            # Site-only styles (chat, urgency pulse, glass, grain)
```

## Run locally

The prototype uses ES modules, which require an HTTP server (not `file://`).

```bash
git clone https://github.com/nicolettetran/aiw-wedding-prototype.git
cd aiw-wedding-prototype
python3 -m http.server 8000
# then open http://localhost:8000/
```

## Stack

- **No build step.** Tailwind v4 runs in the browser via the official CDN.
- Design tokens declared once in `rcd-design-system/tokens.css` (CSS custom properties) and surfaced as Tailwind utilities via `@theme {}` in each page.
- Data is in-memory ES modules — replace `_data.js` with a real CMS / API.
- State persists in `localStorage` with a 24-hour TTL (the date-hold mechanic).
- Imagery is generated SVG, not photography — easy to swap for real assets later.

## What the chatbot flow does

1. **Intro** — greets, asks date, region, guest count, vibe
2. **Browse venues** — 13 properties across 4 brands, region-filtered
3. **See spaces** — per-venue space grid with capacity + "from $"
4. **Imagine the design** — picks a vibe, re-colors the space SVG side-by-side
5. **Social proof** — verified-bride cards filtered to the brand
6. **Verified vendor marketplace** — Hair/Makeup, Florists, DJs, Bands with ratings
7. **Package summary** — full breakdown with running total
8. **24-hour hold** — countdown timer + "100+ couples watching" urgency
9. **$500 deposit** — fully-refundable date-save modal
10. **Confirmation** — concierge follow-up promise

## Notices

- **Fonts** — `Isabella Grand` (titles) and `Poppins` (body) are bundled in `rcd-design-system/fonts/`. Poppins is open-source (SIL OFL). Isabella Grand is included on the assumption that the repo owner holds an appropriate license; remove the `.otf` files if redistribution isn't permitted.
- **Brand references** — Hard Rock, UNICO 20°87°, Nobu, AVA Resort, and "All In Weddings" are referenced as a fictional consolidated wedding brand for prototyping purposes only. No affiliation or endorsement implied.
- **No real payment integration.** The "$500 hold" step is a UI demo.
