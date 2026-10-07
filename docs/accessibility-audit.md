# Accessibility Audit Report

## 1. Scope

**Target:** Odisha eDistrict public service portal  
**URL:** https://edistrict.odisha.gov.in/  
**Audit focus:** accessibility baseline, keyboard usability, semantic structure, content clarity, and maintainability/architecture.

The site is a public-facing government service portal containing citizen services such as certificates and application tracking.

## 2. Method

The audit uses:

1. Review of the rendered public page structure.
2. Keyboard-only test checklist.
3. Accessibility principles from WCAG and the Guidelines for Indian Government Websites (GIGW).
4. Repository architecture review against a maintainable full-stack monorepo structure.

> **Lighthouse evidence:** Run Chrome DevTools → Lighthouse → Accessibility on the target URL and save the report/screenshot in `evidence/`. This package deliberately does not fabricate a score.

## 3. Findings

### Finding 01 — Non-descriptive image alternative text

**Severity:** Medium  
**Priority:** P1  
**WCAG:** 1.1.1 Non-text Content

**Evidence:** The rendered accessibility representation exposes several images only as `Image`, while carousel images are exposed as `First slide`, `Second slide`, and `Third slide`.

**Why it matters:** A screen-reader user cannot determine what an informative image communicates when its alternative text is only “Image”.

**Recommended remediation:**
- Give informative images concise, meaningful `alt` text.
- Use `alt=""` for purely decorative images.
- Ensure carousel controls and slide content have accessible names.

**Example:**
```html
<img src="/images/logo.png" alt="Odisha eDistrict">
```

### Finding 02 — Heading hierarchy should be validated and normalised

**Severity:** Medium  
**Priority:** P1  
**WCAG:** 1.3.1 Info and Relationships

**Evidence:** The page contains a large number of service sections with repeated headings and nested content. A semantic heading audit should ensure one clear page heading followed by logically nested section headings.

**Why it matters:** Screen-reader users commonly navigate long service portals by headings. Inconsistent heading levels make the information hierarchy harder to understand.

**Recommended remediation:**
- Use one `<h1>` for the page/service context.
- Use `<h2>` for major service groups.
- Use `<h3>` for individual service names.
- Do not choose heading levels for visual styling.

### Finding 03 — Repeated generic controls reduce context

**Severity:** Medium  
**Priority:** P2  
**WCAG:** 2.4.6 Headings and Labels / 4.1.2 Name, Role, Value

**Evidence:** Repeated controls such as `About the Service`, `Close`, and `Proceed` occur across many service sections.

**Why it matters:** Repeated labels can be ambiguous when a user navigates controls out of visual context, especially with screen readers.

**Recommended remediation:**
Use context-specific accessible names where appropriate, for example:
```html
<button aria-label="Open details for Resident Certificate">
  About the Service
</button>
```
and:
```html
<a aria-label="Proceed with Resident Certificate">
  Proceed
</a>
```

### Finding 04 — Carousel controls and changing content need a keyboard/focus verification

**Severity:** High  
**Priority:** P1  
**WCAG:** 2.1.1 Keyboard, 2.4.3 Focus Order

**Evidence:** The page exposes carousel controls (`Previous`, `Next`) and multiple slides.

**Why it matters:** Interactive carousels can become inaccessible if focus does not move predictably, controls cannot be reached with Tab, or automatic changes interrupt users.

**Recommended remediation:**
- Ensure Previous/Next controls are keyboard reachable.
- Provide visible focus indicators.
- Do not trap keyboard focus.
- Pause/stop automatic movement when appropriate.
- Give each control a meaningful accessible name.
- Test the full carousel using only Tab, Shift+Tab, Enter and Space.

### Finding 05 — Very large service content increases navigation burden

**Severity:** Medium  
**Priority:** P2  
**WCAG:** 2.4.1 Bypass Blocks / 2.4.6 Headings and Labels

**Evidence:** The page contains many service categories and long service descriptions on one page, including extensive lists of required documents.

**Why it matters:** Keyboard and screen-reader users may need to traverse a large amount of repeated content before reaching the desired service.

**Recommended remediation:**
- Provide a strong “Skip to main content” mechanism.
- Use a clear landmark structure (`header`, `nav`, `main`, `footer`).
- Provide service search/filtering with an accessible name.
- Keep each service section semantically grouped.
- Use concise summaries with progressive disclosure for long descriptions.

## 4. Keyboard-only test

The following test should be executed in Chrome/Edge with the mouse not used:

| Test | Expected result | Status |
|---|---|---|
| Tab from page start | Focus moves to the first interactive control | Verify locally |
| Shift+Tab | Focus moves backwards predictably | Verify locally |
| Enter/Space on controls | Control activates | Verify locally |
| Visible focus indicator | Focus is clearly visible | Verify locally |
| Carousel Previous/Next | Both controls are keyboard accessible | Verify locally |
| No keyboard trap | User can leave every component | Verify locally |
| Skip link | User can jump to main content | Verify locally |
| Service links | Focus order follows visual/logical order | Verify locally |

## 5. Evidence checklist

Before final submission, place these screenshots in `evidence/`:

1. `lighthouse-accessibility.png`
2. `keyboard-tab-navigation.png`
3. `carousel-keyboard-focus.png`
4. `image-alt-inspection.png`
5. `heading-structure.png`

Do not edit Lighthouse numbers after capture. The screenshot should show the real date/time and target URL.

## 6. Standards reference

The Indian Government Website Guidelines state that functionality must be operable through a keyboard interface and that input fields should have labels that can be conveyed by screen readers. The same guidance also discusses textual error messages and avoiding reliance only on visual characteristics.

Source:
https://it.odisha.gov.in/sites/default/files/2022-04/Guidelines%20for%20Indian%20Government%20Websites_compressed.pdf
