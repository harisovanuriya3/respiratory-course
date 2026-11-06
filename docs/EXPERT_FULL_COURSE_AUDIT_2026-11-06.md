# Expert course audit, 2026-11-06

Scope: 25 modules, 17 sections, RU/EN/KZ. This is a source-code and data review, not independent peer review of 425 lessons.

Confirmed findings:
- All 25 modules and 17 section definitions exist.
- The media catalogue has 25 cards but only 9 unique preview asset names. These do not count all images inside modules.
- Module 1 has 20 tests and 20 case problems per language in the source bank.
- The core assessment bank for modules 2-25 contains 4 to 20 base questions per module; generated questions fill remaining slots. Module 2 has 20 base records but only 12 distinct Russian prompts before normalization.
- Media links and drawing tools are connected in app.js. Real mobile browser interaction was not tested in this audit.
- Reading references are thematic; they are not verified page-level citations.

Required before academic release: validate all answer keys and clinical explanations, inspect anatomical images and media licenses, check every numerical lab model and mobile interaction, perform medical language review of RU/EN/KZ, verify preservation of older laboratory visuals. Do not replace older files without comparison.

Status: NOT academically approved. No Vercel publication or merge into main.
