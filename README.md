# BetaWeb.ca

Production-ready marketing site for [BetaWeb](https://betaweb.ca) — affordable website design for small businesses.

Built with **React**, **Vite**, and **Tailwind CSS v4**.

## Requirements

- Node.js 18+ (20+ recommended)
- npm 9+

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
```

Output is written to `dist/`. Preview the production build:

```bash
npm run preview
```

## Edit content

All copy lives in one file:

```
src/data/siteContent.js
```

Update business name, headings, services, pricing, FAQs, contact fields, and footer links there. Components read from this file automatically.

## Project structure

```
src/
  assets/          # Images and static assets (optional)
  components/      # React section components
  data/
    siteContent.js # All website text
  App.jsx
  main.jsx
  index.css        # Tailwind + global styles
public/
  favicon.svg
```

## Contact form

Submit opens the visitor’s default email app (Mail, Outlook, Gmail, etc.) with a pre-filled message to the address in `site.email` (`src/data/siteContent.js`). The visitor taps **Send** in their mail app to deliver it.

To switch to server-side delivery later (Formspree, Resend, etc.), replace `handleSubmit` in `src/components/ContactForm.jsx`.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial BetaWeb.ca site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/betaweb-ca.git
git push -u origin main
```

## Deploy

### Vercel

1. Import the GitHub repo at [vercel.com](https://vercel.com)
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy

### Netlify

1. Import the repo at [netlify.com](https://netlify.com)
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

### Custom hosting

Upload the contents of `dist/` to any static host (S3 + CloudFront, Nginx, cPanel, etc.) after running `npm run build`.

## License

Private — BetaWeb.
