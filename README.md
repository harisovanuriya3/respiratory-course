# Respiratory physiology

Interactive textbook structure: **25 agreed modules × 17 sections**, **RU / EN / KZ**, separate examination, laboratory and virtual-patient hubs.

**Current stage: pages without learning content**, requested 2026-10-15. There are no executable exams, clinical scenarios or lab simulations yet. All empty sections are explicitly labelled.

## Run

```sh
npm run build
npm run check
python -m http.server 8765 --directory dist
```

Open http://localhost:8765. Build has no dependencies and emits 455 static page routes. Vercel uses `vercel.json` and the `dist` output. Language is kept in the `?lang=RU|EN|KZ` query. The site does not require student accounts.

- `public/content.js`: agreed module titles and section structure, no lesson text.
- `public/app.js`: navigation and empty-page UI.
- `public/style.css`: responsive layout and accessibility styling.
- `public/lungs-cover.webp`: generated illustrative cover asset.
- `docs/progress.md`: current scope and next steps.

Author: Харисова Нурия Мансуровна / Nuriya Mansurovna Kharissova.
