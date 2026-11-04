# Audit: published version and virtual patients — 2026-11-04

## Published version: verified versus unknown
- User-provided Vercel production screenshot for `respiratory-course.vercel.app`: Ready / Latest, source branch `main`, source commit `75c0c3c`, deployment created around nine minutes before the screenshot.
- This proves **that deployment** used commit `75c0c3c`, not that the live site still uses it at the time of this audit.
- Later GitHub changes include exam integration, release gates, and `build-info.json`/footer version display. Therefore the screenshot does not establish that the most recent GitHub source is published.
- A direct external fetch of `https://respiratory-course.vercel.app/` and `/build-info.json` was not available in the current tool environment. No current live production SHA can be independently asserted.
- Verification procedure: open Vercel project `respiratory-course` > Deployments > current Production Ready deployment > Source SHA. When deployed, `/build-info.json` gives the exact revision and UTC build date.
- `respiratory-course-next.vercel.app` is a different, older project. Do not confuse its Production deployment with the main domain.

## Virtual patient audit: source inspection
- `public/advanced-patients.js` contains 25 case definitions with stage-based questions, explanation, scoring, and branching/evidence interactions. This is a stronger foundation than simple single-question cards.
- Five additional modules `interactive-patient-decisions.js`, `clinical-decision-extension.js`, `patient-reasoning-set.js`, `mechanics-patient-cases.js`, and `regulation-patient-cases.js` each render a nearly identical one-question, three-button UI. They are appended to the `virtual-patient` section in `public/app.js`, producing repetitive screens.
- Those supplemental cards often have correct answer index 0 and immediately show the complete explanation after one click. They are **self-checks**, not complete virtual patients.
- The 25 existing advanced cases include many template-like titles such as “Раздел N”, “Исходные данные”, “Механизм”, “Интерпретация физиологического механизма”. A case's existence does not establish realistic clinical individuality.
- A static source review cannot verify visual anatomy, patient photographs, clinical fidelity, mobile usability or browser runtime. Do not claim these passed.

## Required changes before academic release
1. Keep existing advanced multi-stage cases and all authored text, but stop presenting supplemental one-question cards as complete patients. Reclassify them as case-based self-checks with an explicit label.
2. Diversify 25 advanced patients: unique presentation, demographics when clinically relevant, history, examination, vitals, investigations, differential reasoning, changes after decisions, debrief and source references.
3. For each module, validate that calculations, physiological assumptions and choices are internally consistent, and that options do not give away answers by repetition or implausibility.
4. Use original/licensed medically accurate anatomical images with credits and rights; avoid invented “real patient” photographs.
5. Perform desktop/mobile manual tests in all three languages, including keyboard and screen-reader accessibility.
6. Verify exact live SHA and the latest control build before public academic release.

## Verdict
- **Deployment identity:** screenshot confirms commit `75c0c3c` at capture; current production revision unverified.
- **Virtual patients:** partial / revision required. One-question supplemental cards are too repetitive and not equivalent to simulations.
- **Scientific, visual, licensing audit:** incomplete.
- **Final academic release:** not approved by this audit.
