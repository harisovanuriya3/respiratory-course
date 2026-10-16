# Scientific and media review — 16 October 2026

## Scope and actual verification

This revision is based on the supplied `respiratory-course-publication-reviewed.zip` source, not on a fresh checkout of the GitHub `main` branch. The entire project was built and checked with `npm run verify`; the resulting 19/19 test suites and 1,275 rendered-page structural audit passed. This is automated verification, not a peer-reviewed validation of all educational claims.

## Corrections made in this revision

- Translated the **embedded labels and accessible descriptions** of the ventilation–perfusion, breathing-cycle, alveolar-diffusion and acid–base diagrams into RU/EN/KZ. Previously the surrounding explanation was translated while several SVG labels remained English-only.
- Replaced the potentially misleading breathing-cycle heading `VT ↑ / Palv ↓` with a clear two-curve legend identifying volume (blue) and alveolar pressure (orange), without implying that both remain monotonic throughout a cycle.
- Clarified that the linked English-language OpenStax/Wikimedia material is a reference, not a locally hosted illustration or a blanket permission to reproduce images.
- Added regression checks for translated figure labels.

## Remaining editorial and publication limitations

1. **Videos:** No local educational video files or verified video embeds were found in this release. External scientific reading links must not be represented as videos. Do not claim a complete video library.
2. **Illustrations:** Original schematic SVGs exist, but some modules contain conceptual pathways only. This is not equivalent to a curated, licensed atlas of anatomical photos, micrographs and clinical imaging.
3. **Animations:** Several CSS/SVG educational animations exist, but this check does not establish that every module has an appropriate, scientifically validated dynamic simulation.
4. **Clinical accuracy:** Passing interaction tests cannot establish clinical realism or guideline concordance for all virtual patients. Expert case-by-case review is still necessary.
5. **Three-language quality:** Automated coverage and spot checks do not substitute for professional Russian, English and Kazakh medical-language editing.
6. **Text sufficiency and references:** Automated length checks are not a proof of pedagogical depth or bibliographic correctness for each of 425 sections.
7. **Accessibility and browser QA:** Programmatic checks were run; full real-device and assistive-technology review was not performed in this revision.
8. **Source freshness:** Before merging, compare this archive against the current GitHub `main` to avoid overwriting newer changes.

## Release guidance

Publish only as a **working educational edition** until a named qualified physiology reviewer and language editors sign off on the entire course. Keep the existing production site intact until the candidate is tested as a preview build. Avoid direct overwrites of `main` from this archive.
