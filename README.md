# Bharat AI Solutions

Premium marketing website for **Bharat AI Solutions** — an AI agency helping Indian SMBs grow with websites, automation, chatbots, and custom AI software.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion / Lucide icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

1. **WhatsApp number** — update `SITE.whatsapp` in `src/lib/constants.ts` (digits only, with country code, e.g. `9198XXXXXXXX`).
2. **Email / URL** — update `SITE.email` and `SITE.url` in the same file.
3. **Google Analytics** — copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_GA_ID`.

WhatsApp clicks push `whatsapp_click` events to `dataLayer` / `gtag` when Analytics is configured.

## Scripts

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint
```
