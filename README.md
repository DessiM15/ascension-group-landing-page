# Ascension Athlete Group

Landing page for Ascension Athlete Group, a Houston based athlete development company.
Built with Next.js 15 (App Router), Tailwind CSS 4 and Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Contact form (Web3Forms)

The form posts to Web3Forms. Until a key is set it runs in demo mode and shows the success state without sending anything.

1. Create a free access key at https://web3forms.com using the inbox that should receive leads.
2. Copy `.env.example` to `.env.local` and paste the key into `NEXT_PUBLIC_WEB3FORMS_KEY`.
3. On Vercel, add the same variable under Project Settings, Environment Variables, then redeploy.

## Deploy on Vercel

Import the GitHub repository in Vercel. No extra configuration is needed. Add the environment variables above and point the custom domain at the project.

## Where to edit content

| What | File |
| --- | --- |
| Business details, domain, email, phone, Instagram, nav | `src/lib/site.ts` |
| Divisions, why athletes choose us, programs and pricing, placements, testimonials, founders, event, partners | `src/lib/content.ts` |
| Hero video clips and rotating words | `src/components/Hero.tsx` |
| Hide pricing on the Programs section | set `showPricing` to `false` in `src/lib/content.ts` |

## Media

- `public/logos` holds transparent cuts of the brand logo and the team logos.
- `public/images` holds photos from the client deck and Instagram, plus stock fallbacks. See `public/MEDIA-CREDITS.md` for stock sources.
- `public/video` holds the hero montage clips. Replace with real training footage when available (keep the same filenames or update `Hero.tsx`).
- `brand-assets` holds the original source files supplied by the client.
