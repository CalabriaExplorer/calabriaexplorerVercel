## License

This project is licensed under the [MIT License](LICENSE).

// trigger CI
<!-- trigger CI -->

## Development

This project targets **Node.js 20** in CI. Using the same version locally helps
avoid mismatches.

Install dependencies with:

```bash
npm ci
```

If you prefer, `npm install` also works.

Before running the map locally, fetch the latest city boundary:

```bash
node scripts/fetchCiroBoundary.mjs
```

Start the development server with:

```bash
npm run dev
```

The interactive map component lives in `src/pages/CiroMap.tsx`. An older
Next.js variant existed at `pages/ciro-map.tsx` but it is no longer used
and has been removed.

## Linting

Before running ESLint make sure dependencies are installed.

```bash
npm install
npm run lint
```

Without the install step ESLint may report "Cannot find package '@eslint/js'".
