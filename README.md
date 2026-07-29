# CareRelay Web

Marketing landing page for [CareRelay](../CareRelay) — the family caregiving
coordination app. Built with Next.js (App Router) and Tailwind CSS, using the
same design tokens (colors, brand mark) as the mobile app.

## Pages

- `/` — Home: who we are, what we offer, and a (currently disabled) download
  call-to-action.
- `/terms` — Terms & Conditions.
- `/privacy` — Privacy Policy.

The download buttons are intentionally disabled until the app ships on the
App Store / Google Play — update `components/Navbar.tsx`, `components/Hero.tsx`,
and `components/Download.tsx` with real store links when it does.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploying

This project is set up to deploy on [Vercel](https://vercel.com) (see
`vercel.json`). Connect the GitHub repo to a new Vercel project, then attach
the `familycarerelay.com` domain from the Vercel project's Domains settings
once it's purchased.

## Brand

Colors and the "relay circle" mark mirror `composeApp`'s
`presentation/theme/Theme.kt` and `presentation/components/BrandMark.kt` in
the CareRelay app repo, so the web and the app stay visually consistent.
