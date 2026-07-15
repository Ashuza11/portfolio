# Muhigiri Ashuza — Portfolio

A responsive React portfolio for Muhigiri Ashuza Albin, a full-stack and AI engineer based in Kigali, Rwanda.

## Features

- Routed pages for projects, experience, facilitation and mentorship, and contact
- Persistent dark and light themes
- Filterable projects and photos
- Accessible slideshow and keyboard-operated photo viewer
- Direct email, phone, and social contact options
- Route-aware titles, descriptions, focus, and scroll behavior
- Reduced-motion support and responsive layouts

## Development

Requirements: Node.js 22 and npm.

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm test
npm run build
npm run preview
```

## Updating content

Edit `src/data/portfolio.js` to update personal information, skills, projects, experience, and facilitated programs. Public assets belong in `public/`. Keep event images at or below 1920 pixels on their longest edge and compress them for the web.

## Deployment

The included `netlify.toml` builds the site with `npm run build`, publishes `dist`, and configures the history fallback required by React Router.
