# Metabond Frontend

A React-based single-page frontend for Metabond — an informational/marketing site showcasing Metabond's product range, company information and contact details.

## Project overview

This project is a responsive React UI that presents product categories, company information and contact details. The UI is component-driven (Header, Body, Footer) and styled with plain CSS files (per-component CSS). It appears structured like a Create React App project.

Goals:
- Simple, accessible marketing site
- Easy to run locally for development
- Easy to build for static hosting

## Technologies

- React (functional components)
- Plain CSS (component-level .css files)
- Standard npm/yarn scripts (development server, build)
- Static assets served from `public/`

## Quick start (local development)

Prerequisites
- Node.js (recommended v16+)
- npm or yarn

1. Clone the repo and enter the folder:
   git clone https://github.com/metabond-adhesive/frontend.git
   cd frontend

2. Install dependencies:
   npm install
   # or
   yarn install

3. Start development server:
   npm start
   # or
   yarn start

4. Open http://localhost:3000 in your browser. The dev server supports hot reload.

## Build for production

1. Create an optimized production build:
   npm run build
   # or
   yarn build

2. The production-ready files will be placed in the `build/` directory. Serve them with any static hosting provider (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

Note: If deploying to a subpath, set the `homepage` field in `package.json` or set `PUBLIC_URL` when building.

## Project structure (high level)

- public/
  - index.html — HTML template and meta tags
- src/
  - index.js — application entry
  - App.js — root component
  - App.css — global styles
  - components/
    - Header.js, Header.css
    - Body.js, Body.css
    - Footer.js, Footer.css
- README.old.md — previous short README

Where to look first:
- Entry: `src/index.js`
- App: `src/App.js`
- UI components: `src/components/`

## Typical scripts

(If `package.json` is present these are usually available)
- `start` — start dev server
- `build` — create production build
- `test` — run tests (if configured)
- `lint` — run linter (if configured)

## Recommendations / next steps

- Add a `LICENSE` file (MIT, Apache-2.0, etc.) if you intend to publish or allow reuse.
- Add basic CI (GitHub Actions) to run linting and tests on PRs.
- Add a `CONTRIBUTING.md` with contribution and testing guidelines.
- Add environment variable documentation if an API is later integrated.
- Consider accessibility checks and unit tests (React Testing Library).

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feat/update-readme`
3. Make changes, commit, and push
4. Open a pull request against `master` describing the changes

## Contact

Open an issue in this repository for questions or suggestions.
