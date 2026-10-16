# Update: interactive physiology laboratory and exam practice

Implemented a three-language ventilation laboratory on the `interactive` page of all 25 modules, with an SVG lung animation and live minute/alveolar ventilation calculations. This is the SAME general ventilation model reused on each module page, not 25 unique experiments. The simplified model is explicitly labelled educational and non-diagnostic.

Implemented an eight-item three-language exam practice bank at `/exam` with automatic scoring and explanations. Questions are original educational practice items, not a validated summative examination. Answer order is fixed; further work is required for randomization, more question types, per-module question banks and expert review.

Original 25x17 routes preserved. Existing first module lessons and the short draft lessons for modules 2-25 remain unchanged. This update does not claim to provide 425 full lessons or complete virtual patients. External sources are linked, not downloaded or embedded. Medical faculty and Kazakh-language editing are required before teaching use.

Checks: `npm run build`, `npm run check` passed on 2026-10-15.
