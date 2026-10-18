# Respiratory course — progress

## 2026-10-15: structure only, per user's latest instruction

User explicitly requested ALL pages WITHOUT learning content, the previously agreed 25 topics × 17 sections, a lung-background cover, examination center, laboratories and virtual patients. Daily continuation replaces weekly; do not populate lessons until the user proceeds beyond reviewing this structure.

- Recovered the exact 25 Russian topic names and order from the earlier agreed outline (2026-10-15 03:15 UTC); RU names are authoritative. EN/KZ translations supplied.
- Preserved the neuro-course 17-section order and slugs, including `interactive` and `virtual-patient`.
- Created 455 HTML page routes: cover + 4 hubs + 25 module landing pages + 425 section pages. Each route has RU/EN/KZ UI.
- All sections intentionally empty and visibly marked. No question bank, patient scenario or laboratory is represented as functional.
- Cover uses an AI-generated illustrative photograph of a lung teaching model and spirometer, not a diagnostic anatomical diagram.
- Search across all three languages; module sidebar; horizontal navigation 1–17; previous/next links; responsive layout; keyboard focus; reduced-motion CSS.
- No login, analytics, external fonts, paid services or API secrets required.
- Build: `npm run build`; structural verification: `npm run check`. Both passed locally. Node syntax check passed.
- First browser check blocked because Playwright's default browser executable is missing; final verification result to be recorded after finding an available browser or publishing.
- The existing neuro-course repository was read only and not modified.

## Next step
Review the cover and structure with the user. Only after their instruction, start original educational content with authoritative sources, and implement/test the labs, patients, exam and audio. Do not treat placeholder page count as completed educational content.

## Publication and observed verification

- Vercel project: prj_MpAThsKhxPB5wKn0S6CbFWXbbFbx, team team_kLxQutTWfYYsnhcF7BqthuHY.
- Production: https://respiratory-course.vercel.app/ — deployment dpl_6vzNmhCSGwMjvQiiHSaEsqWgAAWK reached READY, source commit 452a1c5d5a0a35aa088739bb86dcb672c41f0252.
- Public root opened in the cloud browser without sign-in. Lung cover and author credit rendered correctly; screenshot saved as docs/title-preview.jpg.
- Browser verified contents, title search (сурфактант), transition to module 5 and all 17 section links. Full mobile/browser sweep not completed; structural routes and syntax verified locally.
- GitHub integration linking failed in Vercel. Published identical source files via the Vercel deployment API instead. Auto-deploy from GitHub is NOT configured. Future updates need explicit deployment or user setup of Vercel's GitHub integration. Reuse the existing project, do not create duplicates.
- Daily automation changed to morning Asia/Almaty, starting 2026-10-16; actual execution depends on available quota.

## 2026-10-15: first content iteration
- Following user authorization, module 1 now has original RU/EN/KZ educational material across all 17 section types, including a ventilatory calculation slider, SVG breathing-path animation, quizzes, patient calculation exercise, glossary, and external educational resource links.
- This is a first teaching prototype, NOT a finished expert-reviewed module or finished textbook. Module 2-25 remain empty. External media are linked, not downloaded or licence-verified for embedding. No independent medical peer review or browser-based interactive testing has yet been completed.
- Build and structural check passed.

## 2026-10-17: mechanics laboratory correctness and accessible interaction

- Synced current main 5ff3a2b80496b3a8b120cc8dba008e57488cf657 before editing. Earlier entries about empty modules are historical, not a description of current coverage. Preserved current course, restored photographic cover, examination bank and virtual patients. Neuro-course and Next.js migration branch untouched.
- Scope: module 5 existing mechanics laboratory only. Fixed alveolar pressure sign: with inward flow positive and atmospheric pressure zero, Palv = -R*flow. Labelled pleural output as delta Ppl relative to start of inspiration, with delta Ppl = Palv - delta V/C; it is not absolute pleural pressure. No claim of measured patient data.
- Read supplied Hall, Guyton and Hall 13e (2016), chapter38 printed pp497–499 (PDF480–482); Ganong 23e (2010), chapter35 printed pp597–598 (PDF609–610). Added precise bibliographic references and original trilingual explanation. Verified OpenStax A&P2e section22.3, linked figures22.16–22.17 at source rather than copying media.
- Animation now starts only after a written prediction and explicit Start. Reduced-motion users receive a static inspiratory frame; calculations remain available. Pause cancels animation callbacks; input changes pause the animation; reset clears comparison. Both comparison traces now share volume, time and flow scales; the ranges are printed in RU/EN/KZ.
- New deterministic regression harness passes: inspiratory/expiratory pressure sign, pressure-volume identity, three languages, no autoplay, prediction gate, reduced motion, pause, shared-scale overlap and reset. Existing mechanics tests, build456 pages and structural/import checks pass (425 section routes,102 JS files).
- Limits: no real-browser/mobile audit in this run, no independent professional KZ review. The existing sinusoidal/clipped volume approximation is retained; not a validated clinical simulator. This is a bounded correction, not completion or peer review of the entire textbook. Next scientific priority: review drive amplitude/clipping assumptions and add numerical tick marks to plots.

- Publication confirmed: source 69073f171c5c109cf80fbc326f3d02e2502f3c9d; Vercel dpl_GRTDq2gM8KvC8omCHzDKb8rd5PuY READY, production alias respiratory-course.vercel.app assigned without error. This is deployment-state verification, not a live-browser audit. Logs/monitoring not audited in this run.

## 2026-10-18: guided mechanics experiment and quantitative axes

- Read current main 1b29cd777881d3108e531b6e410ae3b64456a13d and progress before changes. Verified all deploy source files against GitHub blob hashes (normalised only the extra local trailing newline); cover bytes identical. No title, module names, exam, patient or neuro-course changes.
- Public browser on module5 interactive RU confirmed the actual lab rendered and responded: baseline VT0.78, R2; save comparison, change only R to8 => VT0.56, tau0.80; Start and Pause worked. This is UI evidence, not a patient measurement.
- Added an original four-step RU/EN/KZ investigation protocol: baseline, written prediction, save reference, change R only, start/pause, compare and explain. Uses the existing textbook-grounded model and references; no new physiological equations introduced or new textbook chapters claimed read today.
- Added numeric tick labels to volume/time and flow/volume graphs from the exact shared projection limits, including signed flow and zero reference. No auto-animation introduced; prior reduced-motion behaviour preserved.
- New axes/protocol tests and prior mechanics regression pass. Build456 pages and check425 section routes/102JS pass. Full mobile-device testing and professional translation review still pending. Only this laboratory block was improved; no claim of whole-course completion.

- Published 04081d279949dfd17249d814f03bcb893723e3b5: deployment dpl_8vUqhtC6cGuMYeRn1yU64CW7waeU READY, production alias assigned. Browser reload confirmed four-step RU protocol and graph ticks (time0/2.5/5; signed flow-1.2/0/1.2). Repeated prediction/save/R8/start/pause successfully, reviewed desktop screenshot. Browser console sample contained extension-metadata errors, not application-origin errors; this is not a full log audit. EN/KZ content tested structurally, not browser/device audited today.
