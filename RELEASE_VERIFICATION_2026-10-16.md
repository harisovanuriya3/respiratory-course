# Respiratory course: release verification (2026-10-16)

Source: respiratory-course-curated-video-update.zip, verified in a clean extraction.

## Verified locally
- `npm run verify`: PASS (build, code checks, 23/23 test suites, release integrity, rendered-content audit).
- Rendered-content audit: 1,275 language variants; zero reported errors, placeholders, short pages, patients without scenarios, labs without controls, or self-assessments without controls.
- External video library source is included in `public/video-library.js` and links to third-party publishers; video availability and medical accuracy have **not** been independently confirmed.

## Not verified
- Browser automation did not run: `@playwright/test` is unavailable in the current environment.
- Independent peer review of all physiology claims, medical translations, videos and patient scenarios has not been performed.
- This is not a clinical decision-support tool.

## Publication safeguards
- Compare with the latest GitHub `main` and merge into a new branch, never overwrite blindly.
- Verify Preview on desktop/mobile, video links, accessibility, navigation, labs, patients, exams, RU/EN/KZ before merging.
- Publish as a working educational edition, not a peer-reviewed medical textbook.
