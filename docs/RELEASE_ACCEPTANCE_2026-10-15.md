# Respiratory physiology course — release acceptance record

Date: 2026-10-15. Status: **TECHNICAL BUILD PASSED; ACADEMIC ACCEPTANCE NOT GRANTED**.

## Verified in this run

- All 25 modules and 17 subsection types exist (425 routes).
- Static build completed successfully (456 HTML pages, as reported by the build).
- Automated structure, basic numerical reference and study-tool regression tests passed.
- Checked 4,113 local `href`/`src` references in generated HTML: **0 unresolved local targets**.
- The project has three locale entries (Russian, English, Kazakh) in its content structure.

## Unresolved blockers to a final academic release

1. Scientific correctness of each of 425 lessons and all simulation behaviors has not been individually validated by a qualified physiology reviewer.
2. The 510-item examination bank includes parametrized variants and has not received a documented item-by-item subject-matter review.
3. Independent medical copyediting of Russian, Kazakh, and English text has not been performed.
4. Third-party media URLs have not received asset-by-asset license and attribution clearance. No external media should be treated as freely reusable without this evidence.
5. Full desktop/mobile browser functional testing, accessibility testing and human student usability testing have not been completed.
6. Automated supplementary-text length check flags 72 subsection supplements below 250 characters in at least one locale. This is a triage metric, not proof that entire lessons are incomplete.

## Decision

This package is a **technical release candidate / teaching prototype**, not a certified or independently peer-reviewed university textbook. Do not present it as fully academically approved. Scientific, translation, media-rights, and end-to-end testing signoffs are still required before such a claim.

## Reproduction

Run `npm run acceptance` from the project root. The local-reference audit used Python's standard `html.parser` on generated `dist/**/*.html`.
