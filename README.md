# Brothers Remodelers website

Source code for the Brothers Remodelers site, exported from Hostinger Horizons.

- `apps/web` – the website (React + Vite + Tailwind)
- `apps/pocketbase` – backend for the quote request form (PocketBase)

## Run locally

```bash
npm install
npm run dev --prefix apps/web   # http://localhost:3000
```

## Build

```bash
npm run build                   # output in dist/apps/web
```

Business details (phone, address, services) live in `apps/web/src/data/site.js`.
