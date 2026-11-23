# Global AI Agent Product Backlog

| Priority | Product | Real problem | MCP / free APIs | First measurable MVP |
|---|---|---|---|---|
| P0 | ResearchGuard | Unreliable research citations | Crossref, OpenAlex | DOI validation + sourced shortlist |
| P1 | TenderPilot | Small businesses miss public tenders | EU TED, SAM.gov | Verified requirements extraction and ranked shortlist |
| P1 | ZeroWaste | Avoidable food surplus | OpenStreetMap, OR-Tools and consenting partners | Verified match rate and recovered surplus |
| P2 | EarthWatch | Fragmented natural-event information | NASA EONET, USGS | Accurate sourced event summaries |
| P2 | GrantScout | Missed grants and eligibility | Grants.gov | Deadline and eligibility tracker |
| P2 | AccessMap | Missing accessible-location information | OSM / Overpass | Verified accessibility requests and community updates |
| P3 | RecallRadar | People miss product recalls | openFDA, CPSC | Match saved products with official recalls |
| P3 | TradeBridge | Export market discovery friction | UN Comtrade, World Bank | Evidence-based target-market comparison |

Status: **backlog**. A separate ResearchGuard MCP tool proof-of-concept is included under labs/researchguard.

## Design standards
- Dedicated role-based agents for discovery, analysis, cross-check, reporting.
- MCP is used for standardized tools and resources; the MCP transport itself is not an agent.
- Provide source traceability and fallback for offline/rate-limited APIs.
- Require human approval for consequential writes.
- Evaluate with benchmark inputs and human-reviewed correct answers.
- Never market a prototype as production-ready or as if it autonomously performs tasks when it does not.

## Progress policy
Create an issue per app, implement feature slices, add tests and reproducible demos. New standalone repositories should only be opened when each project reaches a meaningful independently testable milestone.
