# Prepublication review: respiratory physiology educational edition

## Status and scope

Reviewed the supplied local release-candidate snapshot. This is a **technical and targeted scientific/pedagogical review**, not an independent external peer-review of all 1,275 localized pages. No university department, faculty panel, physician, or native-language editor has signed off this edition. The version in this archive has **not** been reconciled against the live GitHub `main` branch.

## Scientific spot-checks

- Module 8: minute versus alveolar ventilation; calculations 500/150/12 -> 4.2 L/min and 250/150/24 -> 2.4 L/min are correct **under the stated constant-dead-space assumption**.
- Module 13: weighted O2 content 0.2 x 15 + 0.8 x 20 = 19 mL/dL is correct; oxygen partial pressures must not be averaged to model mixing.
- Module 14: arterial oxygen content and oxygen delivery formulas have coherent units. For Hb=8 g/dL, SaO2=0.98, PaO2=95 mmHg, CaO2 is about 10.79 mL/dL. The approximation and its assumptions should remain explicit.
- Module 16: Winter's expected PaCO2 for HCO3=12 mmol/L is 26 +/- 2 mmHg. This does not independently establish the cause of acidosis.
- Module 24: reduced FVC alone does not confirm restriction; TLC below LLN is needed, consistent with current interpretation principles.

These checks cover examples only, not every equation, question or clinical statement in the course.

## Student and faculty usability

- Automated source checks cover 25 x 17 sections in RU/EN/KZ. Their `nonempty` status does not establish equivalent depth or translation quality.
- Navigation, site search, clock and timer are present. Search currently indexes module and section titles and selected aliases, **not full chapter bodies**; avoid describing it as full-text search.
- Improved timer-completion announcement for assistive technologies and added bottom spacing so floating controls are less likely to cover content.
- Independent hands-on usability tests with keyboard, screen readers, and real mobile devices remain outstanding.

## Public-release caveats

1. Label as a working educational edition, not a fully peer-reviewed medical textbook.
2. Do not treat simulated patient cases as individual medical advice or a substitute for clinical supervision.
3. Arrange external faculty review, clinician case review, Kazakh/Russian/English professional language review, and bibliographic verification before asserting final academic accreditation.
4. Compare this archive against the current GitHub `main` before merging; preserve newer commits.
5. Preview the branch, test the live interactions, then merge and check Production Vercel only after approval.

## Automated verification

Run `npm run verify`. Browser test requires installing Playwright dependencies and browser binaries; it could not be run in the present offline environment. A successful static audit must not be represented as a successful real-browser audit.
