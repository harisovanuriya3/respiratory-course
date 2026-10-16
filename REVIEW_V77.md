# V77 — Scientific and code audit

- Replaced dynamic `new Function` evaluation in the 25 guided workshops with a fixed, auditable set of functions.
- Fixed the alveolar-ventilation slider precision (4.2 L/min is now a valid initial value).
- Constrained the educational FEV1 slider to FEV1 <= fixed FVC of 4 L, avoiding an impossible ratio above 100%.
- **Verified** the CO2 relation: PaCO2 (mmHg) = 0.863 × VCO2 (mL/min) / VA (L/min). For VCO2=200 and VA=4.2, PaCO2=41.1 mmHg. The coefficient 0.863 is correct with these units; 863 applies when VA is in mL/min.
- This audit is limited to these specific findings; no full medical or language peer review is claimed.
