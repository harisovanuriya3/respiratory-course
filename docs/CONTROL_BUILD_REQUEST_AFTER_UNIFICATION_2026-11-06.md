# Control build request after assessment unification

Date: 2026-11-06
Branch: integration/respiratory-latest-20261106
Purpose: request a fresh GitHub Actions offline archive build for the latest unified 25-module respiratory textbook.

Acceptance gates:
- 25 modules and 17 sections, RU/EN/KZ.
- 20 tests and 20 case tasks per module.
- Duplicate-prompt checks, correct answer structure, explanations.
- Media and laboratory route checks, student drawing component.
- Local downloadable archive with immutable build provenance.

Do not merge to main or publish to Vercel. The result is determined by GitHub Actions, not by this request file.
