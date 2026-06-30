# guilsa.com deployment

## How to deploy to production

```bash
pnpm build && make deploy
```

This builds the Astro site then rsyncs `dist/` to `deploy@racknerd:/var/www/html/guilsa.com`.
