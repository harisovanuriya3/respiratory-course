# Image-based mechanics laboratory

Module 4 now uses the anatomical image from lecture slide 5, with direction arrows and three synchronized quantitative plots. The former deforming lung ovals have been removed from its laboratory. Its media page no longer prepends the duplicate generic ventilation animation.

The imposed-volume model retains explicit pressure definitions and units. Added manual phase inspection, paused initial state, play/pause/reset, one-parameter comparisons, required numerical predictions and a 12-entry parameter/result history. The image is not deformed and arrows are labeled as explanatory annotations, not measured tissue motion. This prescribed-volume model does not predict spontaneous gas trapping or patient outcomes.

Verification: independent volume derivative, Ptp identity, boundary conditions and R/C effects; RU/EN/KZ controls; browser image decode, forecast grading, history, reset, reduced-motion initial pause, mobile width, and laboratory/media/practice integration. All 34 suites pass. Original lecture image provenance is retained in course-image-sources.json.

This publication replaces module 4 visuals; other historical module animations are outside this commit.

## Follow-up: synchronized anatomical motion

Following visual feedback, graph labels were reduced from 20 to 12 SVG units. Cropped anatomical lung layers now expand with normalized model volume and the diaphragm annotation descends/flattens through inspiration. These illustrative transforms and all plot cursors use the same cycle phase; they do not measure tissue displacement. Autoplay is enabled unless reduced motion is requested. Pause, reset and manual phase inspection control every animated element together. The earlier statement that the image is not deformed describes the first version, superseded by this update.

Browser verification in RU/EN/KZ covers changing lung transforms and diaphragm contours, cursor alignment at end inspiration, freezing on pause, return at end expiration, reduced-motion pause, font sizes and mobile width. All 34 existing suites and the rendered course audit pass.

## Compact layout

Anatomy and controls now share a compact side panel; synchronized plots occupy the adjacent column on desktop. On small screens the small anatomical image remains beside controls, with plots immediately below. Provenance and illustration limits are retained in the expandable Source caption. The long source statement was removed from the introduction. Numerical behavior is unchanged. RU/EN/KZ browser checks, mobile overflow checks and all 34 suites pass.
