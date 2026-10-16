# Next.js migration inventory and acceptance boundary

## Baselines

- Respiratory source baseline: `5ff3a2b80496b3a8b120cc8dba008e57488cf657`.
- Read-only neuro architecture baseline: `59cbd7088401250e2579d2f590bc3dfa2e7b75b8`.
- Production remains the legacy static build until migration acceptance.

## Material inventory

The legacy release builds 456 documents: cover, five hubs, 25 module pages, 425 section pages and 404. Each module retains the same 17 section identifiers. Automated inventories additionally cover 27 patient scenarios, 25 laboratory mappings, 440 calculation questions, 75 localized media panels, 27 topic diagrams, the examination centre, learning workspace and `lungs-cover.webp`.

## Route mapping

| Legacy | Next pilot | Decision |
|---|---|---|
| `/` | `/` | Public course shell; cover migration pending |
| `/modules/:id` | `/modules/:id` | Planned compatibility route |
| `/modules/:id/:section?lang=RU` | same | Implemented for module 5 pilot; typed language/section validation |
| `/exam`, `/labs`, `/patients` | same | Reserved; legacy production remains authoritative |

## Component correspondence

| Legacy responsibility | New boundary |
|---|---|
| `app.js` shell/router | App Router layouts and route segments |
| `content.js` | typed `ModuleRecord`, `SectionId`, `Localized` data |
| laboratory scripts | client React laboratory components plus pure calculation libraries |
| patient scripts | planned typed patient engine |
| exam scripts | planned assessment engine |
| learning workspace | planned client storage adapter |
| speech utilities | `VoiceTools`, with permission/unsupported fallback |
| future AI feedback | server-only `/api/assess` contract; returns 503 until a provider is configured |

## Pilot acceptance

Module 5 demonstrates App Router, React state, strict TypeScript, three-language routing, an independently testable RC calculation boundary, speech synthesis, opt-in speech recognition, editable text fallback, a transparent local rubric preview, and an honest server-side AI contract. It does not claim that the remaining 24 modules or legacy content have been migrated.

## Explicit non-acceptance conditions

Do not merge the migration into `main` or replace Vercel production until all 25 × 17 bodies, labs, patients, exam data, workspace storage, old URL compatibility and assets pass parity tests. Browser/accessibility testing remains outstanding on this managed workstation because Chromium installation is prohibited.
