# NexusAI Pro — React + Vite + Tailwind (Dark/Light)

- 🌗 Dark/Light toggle with smooth animations (default dark)
- 📰 Blog with cover images, avatars, detail pages + links
- 💼 Jobs page with cards, icons, Apply modal, toast success
- 📩 Contact & Submit Blog forms → Netlify Forms + reCAPTCHA placeholders
- 🖼 Logo + favicon, professional Unsplash images
- ⚙️ Vite + Tailwind + React Router

## Run
```bash
npm install
npm run dev
```

## Build & Deploy (Netlify)
- Push to GitHub and connect in Netlify, or run `npm run build` then drag `dist/` to Netlify.
- Forms are automatically detected by Netlify.
- reCAPTCHA uses `<div data-netlify-recaptcha="true"></div>` — add keys in Netlify settings if needed.

## Edit Content
- Blog posts: `src/data/posts.js`
- Theme: `tailwind.config.js` + utility classes
