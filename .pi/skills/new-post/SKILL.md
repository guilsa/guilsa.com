---
name: new-post
description: Create a frontmatter-only skeleton for a new blog post in guilsa.com. Use when the user asks to start, draft, scaffold, or template a new post (e.g. "create a blog post about X", "skeleton for a new post").
---

# New Blog Post Skeleton

Create a new blog post file with frontmatter and section headings only. Do NOT write any body content — leave the sections empty for the user to fill in.

## Location

`src/content/post/` for regular posts, `src/content/writing/` for writing.

## Filename

`YYYY-MM-DD-kebab-case-slug.mdx` — use today's date.

## Frontmatter template

```yaml
---
draft: true
title: "TBD — keep under 60 chars"
publishDate: "DD Month YYYY"
slug: "kebab-case-slug"
description: "TBD one-line summary"
tags: ["tbd"]
---
```

Then optionally add `## Section` headings the user can expand.

## Rules (learned the hard way)

- **`draft: true`** means title+publishDate aren't strictly required by the schema, but include them anyway — the user will want to flip the draft flag and the page should already be valid.
- **MDX, not HTML.** Comments in the body must be `{/* ... */}`. An HTML `<!-- ... -->` comment throws `MDXError: Unexpected character '!'` because MDX parses the `!` as an expression start. Never use `<!--` in `.mdx`.
- **Check the dev server log** after creating: `tail /tmp/astro-dev.log`. A 500 on the new page means a parse error — usually frontmatter or a stray HTML comment.
- **Preview route** is `/posts/<slug>/` (posts live under `src/pages/posts/[slug].astro`), not `/blog/`.
