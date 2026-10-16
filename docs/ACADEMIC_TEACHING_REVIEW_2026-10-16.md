# Scientific and pedagogical review — working editorial version

## Scope and evidentiary status

This review applies to the supplied local `respiratory-course` snapshot, **not** an independently fetched or synchronized GitHub `main` checkout. The source code contains 25 modules × 17 sections × three languages (1,275 route-language combinations). Automated checks can establish route coverage, nonempty rendering, selected physiological calculations, and the presence of interactive controls. They **cannot** certify every paragraph, translation, reference, image, patient decision, or clinical claim as scientifically peer-reviewed. No external faculty or clinician has signed off this edition.

## Changes made for physiology teachers and students

- Added 25 module-specific conceptual checkpoints in Russian, English and Kazakh, integrated into theory, clinical and practice pages. Each addresses a high-impact teaching confusion relevant to that module.
- Checkpoints explicitly distinguish PaO2, SaO2, CaO2 and oxygen delivery; minute from alveolar ventilation; anatomical from physiological dead space; TLC-confirmed restriction from reduced FVC; DLCO from membrane conductance alone; and pressure-dependent inspired oxygen.
- Clarified limitations of idealized models (Laplace, Poiseuille, Fick), pulmonary vascular resistance and interpretation of mixed blood streams.
- Added a regression test for the 75 localized checkpoints. All pre-existing materials are retained.

## Method and limitations

The numerical physiology exercise suite and source-rendering audit were run. The checks include model assumptions and tolerance validation but are not a substitute for a blinded independent review of all cases. The bibliography contains publisher-level book references rather than page-level citations for each claim. No copyrighted textbook content was copied.

### Human academic sign-off still required

1. Physiology faculty: review learning objectives, mechanisms, numeric examples, clinical relevance and topic depth in all 25 modules.
2. Clinical reviewer: inspect patient scenarios for unsafe generalizations, differential diagnosis, indications and limitations of simulations.
3. Native-language subject specialists: edit RU/EN/KZ terminology and idiomatic Kazakh scientific prose; automated language checks do not establish linguistic equivalence.
4. Accessibility/usability reviewer: test keyboard operation, screen readers, small screens, assessment fairness and progress tracking.
5. Bibliographic editor: map claims to editions/chapters/pages and validate all outbound URLs.

## Acceptance for publication

This snapshot may be used as a **working educational edition**, not as a formally peer-reviewed academic textbook. Preserve the current production version until a separate pull request is reviewed and all CI and preview checks pass. Do not overwrite the repository with this older snapshot without reconciling with the latest `main`.
