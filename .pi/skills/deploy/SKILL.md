---
name: deploy
description: Deploy the guilsa.com Astro site to production. Use when the user asks to deploy, publish, or push the site live.
---

# guilsa.com Deployment

## Deploy to Production

```bash
pnpm build && make deploy
```

This builds the Astro site and rsyncs `dist/` to `deploy@racknerd:/var/www/html/guilsa.com`.

Always run `pnpm build` before `make deploy` to ensure the latest code is deployed.
