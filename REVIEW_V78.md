# V78 — targeted audit and corrections

1. Removed both uses of `Function()` from `public/applied-labs.js`; calculations are now explicit, auditable functions for modules 6–25. Numeric outputs are preserved.
2. Added explicit result units to all 25 guided workshops (including Wood units for PVR, mL O₂/dL for CaO₂, mL O₂/min for DO₂, and dyn/cm² for the simplified Laplace pressure). The reflex and chemical-drive indices are identified as illustrative and dimensionless.
3. Clarified that AHI divides event count by **hours of sleep**, not merely time in bed; the toy model assumes eight hours of sleep.

These changes do not constitute full scientific peer review. Individual teaching models still require physiological and browser validation. No changes were made to the neurological textbook.
