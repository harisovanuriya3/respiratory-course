# Module 1 animation verification — 2026-10-20

Scope: `fix/module-1-breathing-lab-visual`, Next.js only. Module 3 mechanics and the nervous-system textbook are unchanged.

## Implementation

- The supplied clinical scene remains intact. A separate chest highlight indicates 7 breaths/minute without warping faces. The six existing case stages retain decision checking and written answers; the final review includes all six answers and explanations.
- Existing v2 answers in RU/EN/KZ migrate to a shared v3 case record without deleting the old records. Switching language preserves case progress. Ventilation predictions/trials and the breathing cycle also survive language navigation.
- The supplied inspiration/expiration illustration is overlaid with localized labels and pressure panels. The original printed pressures are masked. Only the active phase displays current pressures; the inactive phase displays a dash.
- One phase state controls anatomical motion cues, current pressure values and the five graph cursors. `Ptp` is derived from `Palv - Ppl`. Endpoint buttons distinguish zero flow from mid-inspiration/mid-expiration.
- This is an approximate teaching model: the reference pressure states are not universal constants. Flow is the time derivative of the displayed volume. The background illustration itself is static; motion is represented by separate contours and arrows.
- Patient and instructor each have speech controls. Strict locale selection avoids silently substituting Russian speech for Kazakh. Unavailable voice/microphone services leave manual input available.

## Checks

- TypeScript: `node next-platform/node_modules/typescript/bin/tsc --noEmit -p next-platform/tsconfig.json`.
- Targeted academic contract: `node next-platform/tests/module-one.test.mjs`.
- Model tests: `node next-platform/tests/module-one-animation.test.mjs` (all reference states, pressure identity, volume/flow derivative, flow direction, finite domain).
- Next.js: `npm run build --prefix next-platform`.
- Browser: `node next-platform/tests/module-one-browser.mjs` against the built application; supports `PREVIEW_URL` for preview verification.

Browser coverage in RU/EN/KZ: manual phases and endpoints, automatic cycle, pause, replay, five synchronized cursors, pressure values, language retention, ventilation prediction/trial retention, 390px mobile overflow, reduced-motion initial pause, patient questions, incorrect-decision feedback, all six stages, reload persistence and final review. Also checks migration of old RU/KZ answers and manual input when voice APIs are unavailable. Screenshots are saved locally in `.audit-baseline/module-one-animation/`.

Speech synthesis and recognition are exercised with browser API test doubles, including locale, volume and transcript delivery. This does not verify audible output, microphone hardware or the availability/quality of installed Kazakh voices.

Physiology reference: [OpenStax — The Process of Breathing](https://openstax.org/books/anatomy-and-physiology-2e/pages/22-3-the-process-of-breathing). Numerical control states follow the task specification; the model is an educational illustration, not a clinical measurement.

Deployment scope: Vercel Preview only. No production promotion.
