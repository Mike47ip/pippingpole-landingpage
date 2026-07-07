# Forgeworks — Custom Software Studio Landing Page

Astro + React + Tailwind landing page for a custom software development company.

## Stack
- **Astro** — static-first output for SEO (fast, minimal JS shipped)
- **React** — interactive islands (mobile nav, etc.) via `@astrojs/react`
- **Tailwind CSS** — utility styling, custom theme in `tailwind.config.mjs`
- **Google Font: Outfit** — display/heading font, paired with Inter (body) and JetBrains Mono (labels)

## Structure
```
src/
  components/
    Header.jsx     # sticky nav + mobile menu
    Hero.jsx        # hero with schematic/blueprint illustration
    Services.jsx    # what we build grid
    Process.jsx     # 4-step build process (revision-tag numbering)
    WhyUs.jsx        # value props
    CTA.jsx          # closing call-to-action + email capture
    Footer.jsx
  layouts/
    Layout.astro     # <head> SEO tags, fonts, JSON-LD
  pages/
    index.astro       # assembles the page
  styles/
    global.css
```

## Getting started
```bash
npm install
npm run dev
```
Then open http://localhost:4321

## Build for production
```bash
npm run build
npm run preview
```

## Customizing
- **Colors**: edit `tailwind.config.mjs` → `theme.extend.colors` (ink / blue / signal / cyan / paper)
- **Copy**: edit the arrays at the top of each component (SERVICES, STEPS, POINTS, NAV_LINKS, COLUMNS)
- **Form submission**: the email input in `CTA.jsx` is a static form — wire `onSubmit` to your backend, form service (e.g. Formspree), or an Astro API route.
