# Chapter 2 image-based teaching update — 21 October 2026

Scope: respiratory-course, chapter 2. Other chapter content and neuro-course-new are unchanged.

## Changes

- Four additional explanatory theory units: convection to diffusion; pulmonary versus bronchial circulation and relative Fick calculation; regional V/Q and mixing; epithelial defense and fluid balance. RU/EN/KZ.
- Three image-based scenes: Blausen respiratory anatomy, Blausen respiratory epithelium, and an actual Wellcome scanning electron micrograph of alveoli. Ten guided stages, animated anatomical routes, controlled magnification, play/pause and step controls; all five image assets are stored locally with the course.
- Two on-demand external medical 3D video players from the Nucleus videos embedded on NIH/NHLBI's respiratory-system page. English original narration; translated observation prompts. Actual external video playback is not included in local verification.
- Existing nervous-course patient and mentor characters reused as requested. The six-stage patient now includes the image-based atlas and retains its physiology sandbox and final review. No standalone quiz is duplicated in the patient.
- Tests expanded from 4 to 12; cases expanded from 3 to 9. Entry check has 3 distinct ungraded prompts; practice keeps its separate 4-question reasoning workshop. Case cards are no longer repeated in practice.
- Answer order is permuted while preserving canonical keys. Test output reports 0–100% and unanswered count. New distractors include explanatory feedback.
- Old primitive organ diagrams are removed from chapter 2 theory/media output. Numerical bars in the physiology sandbox remain numerical teaching charts, not anatomical animations.
- The lesson-data audit resolves named module imports before evaluating data, preserving its assertions with the split question bank.

## Verification evidence

- Build: 456 static pages generated.
- Import/syntax/build consistency: passed for all 105 public JavaScript files.
- Course regression suites: 31/31 passed.
- Chapter 2: 51 language/section combinations passed. Separate checks enforce 12 unique test prompts, distinct pretest prompts, 9 case disclosures, and patient/mentor asset paths.
- Chromium UI verification on RU, EN and KZ: local image decoding, atlas scene selection, play/pause, stage advance, ciliary-condition control, 2× barrier thickness → 50.0% relative flux, all 12 correct test answers → 100%, six patient stages, summary and restart passed.
- 390px mobile viewport: no document horizontal overflow. Reduced-motion media change disables atlas animation and transitions. No JavaScript page errors observed.
- Desktop and mobile atlas screenshots visually reviewed.

## Limits

The anatomical images contain their original English labels. All controls, guided explanations and question banks are localized, but independent Kazakh editorial review has not been performed. Camera and route overlays are teaching sequences, not measured organ motion. Surface SEM does not reveal every blood–gas barrier layer. Video availability and subtitles depend on the external player.

Sources and attribution: `public/module-two-media.md`.
