# Scientific and technical review — current revision

## Changes made in this revision

- Receptor animation: activation set to zero now produces a labeled baseline rather than a falsely stimulated pattern.
- Irritant receptor cough sequence and pulmonary C-fiber apnea are presented as one-time illustrative events rather than spontaneous, repeated rhythmic events.
- Stretch receptor activation is labeled as inspiratory termination, without claiming that breathing rate can be predicted from a single receptor input.
- Cortical and humoral inputs remain explicitly context-dependent.
- RU / EN / KZ introductory text now describes qualitative patterns rather than promising a quantitative rate/depth comparison.
- Added `test-receptor-physiology-regression.mjs` to guard these constraints.

## Verification performed

- `npm run build`: passed.
- `npm run check`: passed.
- `npm test`: 23/23 suites passed.
- `npm run audit:content`: passed with zero detected empty sections, absent patient scenarios, and labs without controls.
- `npm run test:browser`: NOT completed: Playwright package is unavailable in this environment (`ERR_MODULE_NOT_FOUND`).

## Scientific limitations and outstanding work

- Receptor visualization is a *qualitative teaching animation*, not a validated mathematical model of ventilatory control. The slider does not represent receptor firing rates, tidal volume, or breaths per minute.
- No local video files (MP4/WebM) were found in `public`; a complete verified educational video library has **not** been added.
- This revision does not constitute a line-by-line independent medical peer review of all 425 sections or professional RU/EN/KZ translation certification.
- Patient scenarios and laboratory numerical models require external subject-matter review before the project is presented as a fully peer-reviewed clinical or medical reference.
- Compare this source snapshot with the current GitHub `main` before publishing; do not overwrite newer repository changes blindly.
