# Nethmi Weththasinghe — Portfolio

A modern, dark-themed personal portfolio built with **React + Vite + Tailwind CSS**.

## Tech Stack

- React 18
- Vite
- Tailwind CSS v3
- Google Fonts (DM Serif Display, DM Mono, Outfit)

## Getting Started

```bash
npm install
npm run dev    # development
npm run build  # production build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Description.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   └── Divider.jsx
├── data/
│   └── portfolio.js   <-- Edit your info here!
├── App.jsx
└── index.css
```

## Customising

All personal data lives in `src/data/portfolio.js`. Edit that file to update content without touching components.

## Deploy to Vercel (free)

1. Push to a GitHub repo
2. Import at vercel.com
3. Click Deploy — done!

## Deploy to Netlify (free)

1. Run `npm run build`
2. Drag the `dist/` folder to netlify.com/drop
