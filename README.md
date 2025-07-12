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
