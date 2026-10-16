# V82 — subject-matter correction

**Verified defect:** Module 22 displayed the alveolar ventilation equation with coefficient **863** while specifying VCO2 in mL/min and VA in **L/min**. That coefficient is correct only when both flows use mL/min. This unit mismatch would mislead students by a factor of 1000.

**Correction:** RU, EN, and KZ laboratory instructions now display `PaCO2 (mmHg) ≈ 0.863 × VCO2 (mL/min) / VA (L/min)`. The plotted calculation uses the algebraically identical explicit `0.863` expression. For VCO2=200 mL/min and VA=4.3 L/min, predicted PaCO2 is about 40.14 mmHg. Doubling ventilation halves PaCO2 in the simplified steady-state model.

**Scope:** This is a targeted correction, not a claim that all 425 lessons or 500 exam questions have been scientifically reviewed. Other laboratory models, media licenses, and RU/KZ/EN terminology still require expert assessment.
