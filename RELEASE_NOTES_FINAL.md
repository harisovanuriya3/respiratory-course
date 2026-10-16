# Respiratory physiology — release candidate

This is a consolidated working edition for GitHub review, not an independently peer-reviewed medical textbook.

## Verified
- `npm run verify`: production build, route/content checks, 19 test suites, UI integrity check, and 1,275-language-page audit pass.
- Study tools include localized search across module/section titles, a clock, and a countdown timer. Timer uses an absolute deadline to remain accurate when the browser tab is inactive.
- Responsive layout safeguards and a cover illustration are present.

## Editorial limitations
- Automated checks cannot establish the scientific accuracy of all 425 sections or the professional quality of Kazakh/English translations.
- Search is based on titles and topic aliases, not a complete full-text index.
- The cover image is an authored schematic SVG, not a realistic anatomical photograph.
- Browser-device validation and independent expert review remain necessary before describing this as a final academically certified edition.

## Publishing
Review differences against current `main` before merging. Publish via a separate pull request and verify the Vercel preview before production.
