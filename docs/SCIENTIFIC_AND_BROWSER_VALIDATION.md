# Scientific and browser verification status

This document records the distinction between automated verification and independent peer review.

## Scientific corrections made in this revision

- The animation title now explicitly includes **other controls of breathing**: cortical and humoral influences are not classified as receptor types.
- During the illustrative initial C-fiber-associated apnea, the displayed wave is flat, consistent with the pause; it no longer shows an unrelated sinusoidal breathing trace.
- During the illustrative cough event, the trace follows the staged event rather than displaying an unrelated steady respiratory cycle.
- The animation remains qualitative and explicitly does **not** infer measured respiratory rate, tidal volume, patient response, or diagnostic values.
- External video resources are described as supplementary publisher-controlled resources rather than independently verified or locally hosted videos. Availability and editorial suitability require human verification.

## Automated checks

Run `npm run verify` from the project root. The suite checks the build, JavaScript routes, 1,275 language-page combinations, and structural presence of labs and clinical cases. A new test checks receptor classification and qualitative trace safeguards.

## Browser testing

The browser audit is `npm run test:browser`. Install project dependencies first (`npm install`) and install Chromium (`npx playwright install chromium`). On systems with an existing Chromium binary, set `BROWSER_EXECUTABLE` to its path. The audit no longer assumes Microsoft Edge is installed.

A Chromium browser was available in the audit container, but the container blocked all browser navigation with `ERR_BLOCKED_BY_ADMINISTRATOR`, including local loopback URLs. Therefore interactive browser execution **was attempted but not completed** in this environment. This is a security/network policy restriction, not evidence of a website defect or success. Re-run the audit in a browser-enabled environment before public release.

## Independent academic peer review — outstanding

Automated scripts do not certify the physiological accuracy of all 425 sections, all 522+ exam items, all virtual patient decisions, numerical model assumptions, or professional medical terminology in Russian, English and Kazakh. A named qualified physiology reviewer and professional medical-language reviewers must examine those materials before the site is labelled **peer reviewed**. Do not claim that external review has taken place.

## Video and media — outstanding

External video URLs are not copied into the course and can change or be removed. Publisher identity, current availability, video-topic match, embedded playback permissions, accessibility, and copyright should be checked manually at publication time. Do not claim the presence of a complete locally hosted video library.
