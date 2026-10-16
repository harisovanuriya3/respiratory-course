# Dynamic respiratory mechanics laboratory — implementation report

## Scope

The reference laboratory is attached to module 5 (`interactive`) without changing the agreed 25-module/17-section structure, the RU/EN/KZ routes, the examination bank, virtual patients, the restored `lungs-cover.webp`, or the learning workspace.

## Scientific model

The simulation uses an explicit deterministic one-compartment resistance–compliance model. Its time constant is `τ = R × C`. A periodic respiratory-muscle pressure input produces linked pleural pressure, alveolar pressure, airflow and volume samples. Minute and alveolar ventilation are calculated from the simulated tidal volume and rate. The interface states that this idealized homogeneous model is not clinical spirometry and does not represent regional heterogeneity, dynamic airway compression, patient effort, or ATS/ERS manoeuvre acceptability.

## Student workflow

Prediction → parameter change → real-time observation → saved comparison → physiological explanation. Controls provide normal, obstructive and restrictive presets; rate, muscle pressure, airway resistance and compliance; start, pause, repeat, compare and reset. Outputs include animated lungs/diaphragm, pressures, tidal/minute/alveolar ventilation, time constant, a spirogram and a flow–volume loop with labelled axes and units.

## Course-wide audit evidence

The production build contains 25 module routes and 425 section routes (25 × 17), rendered in RU/EN/KZ. Automated audits cover 25 laboratory mappings, 25 patient mappings, 27 patient scenarios, 440 independently recomputed calculation items across 31 physiology families, 75 localized media panels, 27 topic diagrams, the examination centre, navigation, notes, progress, bookmarks and drawing workspace. The rendered-content audit reports zero missing scenarios, laboratories without controls, or self-assessments without controls.

## Remaining limits

Automated structural and numerical checks do not replace independent peer review by a respiratory physiologist, professional review of all translations, usability testing with students, or real-browser accessibility testing. Browser automation was not run because the managed workstation does not permit installing Chromium.
