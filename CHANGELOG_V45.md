# V45 — Branching virtual-patient decisions

- All 25 advanced cases now have a diagnostic test choice followed by a branch-specific decision.
- Incorrect investigation selections lead to a reassessment question; correct selections lead to an evidence-interpretation question.
- The outcome now scores five decisions (three core stages, investigation choice, follow-up branch) instead of three.
- Correct evidence interpretation reveals existing case measurements when provided.
- RU, EN and KZ interface labels and explanations retained.
- These are educational branching exercises, not a clinical decision support system; further clinical review is needed.
- `node --check public/advanced-patients.js` and `npm run build` completed.
