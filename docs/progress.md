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
