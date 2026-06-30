# guilsa.com deployment

## Deploy to production

```bash
pnpm build && make deploy
```

Builds the Astro site and rsyncs `dist/` to `deploy@racknerd:/var/www/html/guilsa.com`.
