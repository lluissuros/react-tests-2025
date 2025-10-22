## React + Vite + Tailwind + Router

A small React app scaffolded with Vite, styled with Tailwind, and using React Router for navigation. Includes a simple example page with a local counter and a Jotai-based counter.

### Stack
- React 19 + TypeScript
- Vite 6
- Tailwind (via `@tailwindcss/vite` v4)
- React Router v7 (`react-router-dom`)
- Jotai for small state examples

### Getting started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```

### Available scripts
- `npm run dev` – start Vite dev server
- `npm run build` – type-check and build for production
- `npm run preview` – preview the production build
- `npm run lint` – run ESLint

### Routing
The app uses a simple 3-tab navbar.
- `/` → `Welcome` (includes classic counter and Jotai counter)
- `/tab-2` → placeholder page
- `/tab-3` → placeholder page

Key files:
- `src/main.tsx` – wraps the app with `BrowserRouter`
- `src/App.tsx` – defines routes and renders the navbar
- `src/components/Navbar.tsx` – responsive Tailwind navbar using `NavLink`
- `src/components/Welcome.tsx` – example with counters and logos
- `src/components/Placeholder.tsx` – generic placeholder for other tabs

### Tailwind
Configured via the official Vite plugin: `@tailwindcss/vite`. Global styles are in `src/index.css` (imports `tailwindcss`).

### Project structure
```
src/
  components/
    Navbar.tsx
    Welcome.tsx
    Placeholder.tsx
  App.tsx
  main.tsx
  index.css
```

### Notes
- Ready for adding more routes/pages (e.g., under `src/pages/`).
- The navbar is mobile-friendly and highlights the active tab.
