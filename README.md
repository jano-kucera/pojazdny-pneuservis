# pojazdny-pneuservis

Angular single-page application for a mobile tire service (pojazdný pneuservis).

## Quick Start

Prerequisites

- Node.js (recommended LTS) and npm

Install dependencies

```bash
npm install
```

Run development server

```bash
npm start
```

The dev server runs via `ng serve` and opens the app in your browser.

Build for production

```bash
npm run build
```

Deploy (uses angular-cli-ghpages)

```bash
npm run deploy
```

Lint & format

```bash
npm run lint
```

## Project Structure (important paths)

- `src/` — application source
    - `src/app/` — Angular components and services
    - `src/styles/` — global styles and theme (`_theme-colors.scss`, `m3-theme.scss`)
- `public/` — static assets served or used for deployment
- `angular.json`, `tsconfig.json`, `package.json` — project config

## Notes

- Uses Angular 21 and Angular Material.
- Dev scripts available in `package.json` (`start`, `build`, `deploy`, `lint`).

## Contributing

Feel free to open issues or PRs for fixes and improvements.
