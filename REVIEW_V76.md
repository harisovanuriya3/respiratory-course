# V76 — targeted expert review and fixes

## Fixed
- Exam deadline is now checked against the absolute clock at submission, including when browser tabs have been suspended. This prevents accepting a late formal-exam submission as on-time simply because the interval callback has not yet run.
- Changing the study timer duration while paused now updates the remaining time and resets the start state.

## Remaining limitations
- This is a source-level technical review, not an independent faculty review of 425 lessons.
- The examination bank still contains parameterized variants rather than 500 independent questions.
- Licensing and medical translations require item-by-item human review.
- Full browser testing was not performed.
