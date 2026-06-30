---
name: serve-local
description: Serve the guilsa.com Astro site locally for development/testing. Use when the user asks to run, start, or preview the site locally.
port: 4000
---

# guilsa.com Local Server

Always run the dev server in the background with `nohup`:

```bash
cd /Users/gui/dev/guilsa.com
nohup pnpm astro dev --port 4000 > /tmp/astro-dev.log 2>&1 &
```

Kill existing: `lsof -ti:4000 | xargs kill 2>/dev/null`

Verify: `sleep 2 && cat /tmp/astro-dev.log`
