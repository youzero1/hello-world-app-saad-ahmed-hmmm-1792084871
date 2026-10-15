---
status: implemented
title: Hello World App
---

# Hello World App

A minimal app that displays a friendly "Hello, World!" welcome screen. Since the project is currently empty, this plan first scaffolds the standard project structure, then builds the single welcome page.

## Steps

1. **Create the project manifest at `package.json`.**
   - Declare the app name, private flag, ESM module type, and npm scripts (`dev`, `build`, `preview`).
   - Include runtime dependencies for React, React DOM, and TanStack Router, plus dev dependencies for Vite, the Vite React plugin, the TanStack Router Vite plugin, Tailwind CSS v4 via the official Vite plugin, and TypeScript.
   - Expected outcome: `npm install` succeeds and installs all tooling.

2. **Create `tsconfig.json`.**
   - Target modern ESM output with JSX support, strict type checking, bundler-style module resolution, and a `@/*` path alias pointing at `src/*`.
   - Expected outcome: TypeScript compiles the app with strict checks enabled.

3. **Create `vite.config.ts`.**
   - Register the TanStack Router plugin (enables file-based routing and auto-generates `src/routeTree.gen.ts`), the React plugin, and the Tailwind CSS v4 plugin.
   - Configure the `@` alias to resolve to the `src` directory so imports can use `@/components/...` style paths.
   - Expected outcome: `npm run dev` starts a dev server with routing and styling wired up.

4. **Create `index.html` at the project root.**
   - Standard HTML shell with a `<div id="root">` mount point, a page title ("Hello World"), mobile viewport meta, and a module script tag loading `src/main.tsx`.
   - Expected outcome: the browser loads the app entry point.

5. **Create the global stylesheet at `src/styles/global.css`.**
   - The file must begin with exactly `@import "tailwindcss";` on the first line.
   - Add a small base rule giving the page a full-height layout and a pleasant background (e.g. a subtle gradient) so the welcome screen looks polished rather than plain white.
   - Expected outcome: Tailwind utility classes work throughout the app.

6. **Create the app entry point at `src/main.tsx`.**
   - Import `src/styles/global.css` exactly once here.
   - Create the TanStack Router instance from the generated route tree and mount the app into the `#root` element with React's strict mode.
   - Expected outcome: the app renders into the page without console errors.

7. **Create the root layout at `src/routes/__root.tsx`.**
   - A minimal app shell that renders the router's `<Outlet />` so child routes display.
   - Expected outcome: nested routes render inside the shell.

8. **Create the home route at `src/routes/index.tsx`.**
   - A full-screen, vertically and horizontally centered welcome screen displaying a large "Hello, World!" heading with a short friendly subtitle (e.g. "Your app is up and running 🎉").
   - Style it with Tailwind utilities: generous type scale for the heading, a softer secondary color for the subtitle, and the gradient background from step 5.
   - Expected outcome: visiting `/` shows a centered, styled "Hello, World!" screen on desktop and mobile.

9. **Verify the result.**
   - Confirm the generated route tree is produced by the router plugin, TypeScript compiles cleanly, and the dev server renders the welcome screen with no console errors.
   - Expected outcome: the app loads at the root URL and matches the description in step 8.
