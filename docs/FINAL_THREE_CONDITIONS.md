# Three acceptance conditions — evidence-based status

## 1. Scientific acceptance — NOT YET PASSED

All 425 route entries exist and their curated supplements are present in RU/EN/KZ. The automated review still flags 79 entries with a supplementary text shorter than 250 characters in at least one language. This metric measures only supplements, not whole lessons. The physiology reference tests independently check four numerical examples, but do not validate every model or all exam answers. Clinical cases and all 425 lessons still require documented specialist review. No independent physician or physiologist has signed off.

## 2. Educational, translation, and media acceptance — NOT YET PASSED

Navigation and a large set of exercises exist. There is no proof of individual educational review for all lessons and all 510 questions, professional RU/KZ/EN copyediting, or individual asset-license clearance. Original SVG figures are not the same as clinical images. Outbound educational links are not a license to copy third-party illustrations. Do not publish third-party images without recorded permission/license and attribution.

## 3. Technical acceptance — PARTIAL PASS

The production build generates 456 pages, including all 425 section routes. Structural, study-tool regression, and numerical reference tests pass. These tests do not constitute end-to-end browser testing on desktop/mobile, accessibility auditing, network link validation, or real-user testing. Those are outstanding.

## Release decision

**Not eligible for a claim of final, peer-reviewed university textbook.** Eligible as a development/teaching prototype with explicit caveats. Do not remove this notice until each outstanding item is evidenced, signed off, and retested.

Automated details: `docs/ACCEPTANCE_MACHINE_RESULTS.json`; reproduce with `node build.mjs && node check.mjs && node acceptance-check.mjs && node test-study-tools.mjs`.
