# amranirich — Portfolio

Personal portfolio for **Abdelali El Amrani** — RWA & Tokenization Strategist, Founder of Amrania, Performance Media Buyer, AI Systems Builder.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS variables
- **3D / Particles**: Three.js canvas-based particle network
- **Icons**: Lucide React + custom SVGs
- **Fonts**: Playfair Display · Inter · JetBrains Mono (next/font/google, self-hosted on Vercel)
- **Deployment**: Vercel

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, featured project, LinkedIn feed preview, stats |
| `/about` | Biography, vertical timeline, tech stack |
| `/projects` | All projects with category filters |
| `/credentials` | 29 verified certificates grid |
| `/ventures` | Amrania + AmraniAds deep-dive |
| `/contact` | Contact form + social links |

## Customisation

### Certificates
Edit [`data/certificates.ts`](data/certificates.ts) — each entry = one card on `/credentials`.

### Projects
Edit [`data/projects.ts`](data/projects.ts).

### Social links
Edit [`data/social.ts`](data/social.ts).

### Contact form (Formspree)
Replace `YOUR_FORMSPREE_ID` in [`app/contact/page.tsx`](app/contact/page.tsx) with your Formspree form ID from [formspree.io](https://formspree.io).

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (requires internet for Google Fonts)
```

## Deploy

Push to GitHub → connect to [Vercel](https://vercel.com) → auto-deploys on every push to `main`.

## Why no Sanity CMS?

Content lives in TypeScript data files (`data/`). For this stage — infrequently-updated portfolio content managed by the developer — file-based data is simpler, faster, and free. Sanity can be layered on top if a blog or non-technical editor is needed later.
