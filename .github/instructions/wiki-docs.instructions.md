---
description: "Use when editing the Minecraft server wiki, patch notes, installed mod lists, or connection guidance in docs."
applyTo: "docs/**/*.md"
---
# Server Wiki Documentation

- `docs/index.md` is the wiki home page and source for the server/client installed-mod tables; `docs/updates.md` is the chronological patch-note history.
- Put new patch-note sections under the matching date, newest first. When a date has multiple changes, use separate `###` headings under that date.
- Match the existing patch-note style: use `::: info <emoji> <category>` blocks for grouped items, with concise Korean descriptions.
- Link each named mod to its Modrinth project page using `https://modrinth.com/mod/<project-slug>` in patch notes and installed-mod tables.
- Keep server and client additions in separate groups and update only the installed-mod list(s) that match where the mod is installed.
- When changing installed-mod tables, update the list date and displayed mod count; count table entries rather than inferring the number from patch notes.
- Keep the home page's latest-patch teaser consistent with the newest significant update and link it to `/updates`.
- Do not publish a server address unless its exact current value is confirmed; otherwise direct readers to Discord as the source of truth.
