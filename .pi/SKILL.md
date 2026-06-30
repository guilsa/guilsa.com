# guilsa.com deployment

## How to deploy to production

```bash
pnpm deploy
```

This runs `pnpm build` then `make deploy` (rsyncs `dist/` to `deploy@racknerd:/var/www/html/guilsa.com`).
