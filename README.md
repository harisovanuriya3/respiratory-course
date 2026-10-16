# Respiratory physiology — consolidated development build

Latest local remediation: [audit and verification, 2026-10-16](docs/FINAL_AUDIT_2026-10-16.md). The active exam bank now contains 436 items after excluding 86 exact duplicates; source archives are retained. There are 27 advanced cases, with 25 distinct module assignments.

25 modules × 17 sections = 425 section routes, three language interfaces (RU/EN/KZ), laboratories, an exam center and educational patient cases.

**Status: NOT academically finalized.** Routes and modules do not imply 425 independently peer-reviewed lessons. The examination bank contains parameterized question families, and some learning materials repeat across sections. Clinical cases and lab models are educational approximations, not clinical decision aids. Translations, media rights and scientific citations require specialist review.

## Local build

```sh
npm run build
npm run check
npm test
npm run audit:content
npm run test:browser
python3 -m http.server 8765 --directory dist
```

Open http://localhost:8765. `npm run build` emits static routes for Vercel. Publishing is not automatic.

## Important fix in this consolidation

The 25 short patient-case choices are shuffled at render time. Original answer IDs are preserved so that scoring and feedback remain correct. This prevents the first option from always being correct.

## Acceptance criteria not yet met

- Scientific review of all 425 lessons and their numerical claims.
- Independent review of exam questions and answer explanations in all three languages.
- Browser coverage and its precise limits are recorded in the latest audit and `docs/BROWSER_AUDIT.json`.
- Item-level verification of external media licenses and attributions.
- Professional Kazakh/English medical-language editing.

See `FINAL_STATUS.md` for release limitations. Do not market this build as a peer-reviewed university textbook.

Latest content-depth pass: [51 revised sections, worked exercises and browser verification](docs/DEPTH_COMPLETION_2026-10-16.md). All 25 modules now include an original numerical practice task and an explained discussion question in RU/EN/KZ. Scientific and language review limitations above still apply.
