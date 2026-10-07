# RabTech Academy – Task 2
## Accessibility Baseline & Repository Architecture Audit

**Internship:** Full Stack Web Development  
**Task:** 02 – Accessibility Baseline & Repository Architecture Audit  
**Audited public service website:** Odisha eDistrict — https://edistrict.odisha.gov.in/

## What is included

- `docs/accessibility-audit.md` — five documented accessibility/UX findings with evidence and remediation priority.
- `docs/architecture.md` — monorepo architecture, boundaries, local setup, and first vertical feature slice.
- `docs/keyboard-test.md` — keyboard-only navigation test plan and evidence checklist.
- `client/` — minimal client application skeleton.
- `server/` — minimal server/API skeleton.
- `tests/` — test skeleton and acceptance criteria.
- `evidence/` — folder for Lighthouse and keyboard-navigation screenshots.

## Run locally

This repository intentionally uses a lightweight skeleton so it can be opened immediately.

### Client
```bash
cd client
python -m http.server 5173
```
Open http://localhost:5173

### Server
```bash
cd server
python -m http.server 3000
```

The architecture is documented in `docs/architecture.md`.

## Important audit note

The five findings are based on the publicly observable structure/content of the selected Odisha eDistrict page and the applicable Indian Government Website Guidelines/WCAG principles. A real Lighthouse score should be captured locally with Chrome DevTools and saved in `evidence/`; the report does **not** invent a Lighthouse score.

## Source references

- Odisha eDistrict: https://edistrict.odisha.gov.in/
- Guidelines for Indian Government Websites: https://it.odisha.gov.in/sites/default/files/2022-04/Guidelines%20for%20Indian%20Government%20Websites_compressed.pdf
