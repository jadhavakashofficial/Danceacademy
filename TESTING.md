# Test Coverage Analysis & Proposal

**Repo:** Sanchay Kathak Academy (Next.js 15, Pages Router, static export)
**Date:** 2026-08-22
**Baseline coverage:** 0% — there is no test framework, no test file, and no CI.

---

## 1. What we have today

| Signal | State |
|---|---|
| Test runner | None. No Jest/Vitest/Playwright in `package.json`. |
| Test files | Zero (`*.test.js`, `*.spec.js`, `__tests__/` — none exist). |
| npm scripts | `dev`, `build`, `start`, `export`. No `test`. |
| CI | No `.github/` directory. Nothing runs on push or PR. |
| Lint gate | ESLint is configured but **disabled at build time** (`next.config.js`: `eslint.ignoreDuringBuilds: true`, `typescript.ignoreBuildErrors: true`). |
| `/coverage` in `.gitignore` | Present — aspirational only; nothing produces it. |

**Codebase shape:** 6,695 lines across 21 JS files. All presentational React. No API routes, no database, no auth, no server code. All page content is hardcoded arrays inside components. `output: 'export'` produces a fully static site.

That shape matters: there is no backend logic to unit test. The risk in this codebase is concentrated in three places — **form submission**, **interactive widgets** (lightbox, mobile nav), and **content/SEO data integrity**. A test plan should be weighted accordingly, not spread evenly across files.

---

## 2. Defects found while analyzing — all of these are currently untested

Verified by running `next build`, `next lint`, and driving the built static export in headless Chromium.

### 2.1 The homepage contact form silently discards every submission — **critical**

`components/home/ContactSection.js:34-37` is rendered on the homepage (`pages/index.js:2040`) and again at `/home/contact`.

```js
console.log('Form submitted:', formData);
setFormSubmitted(true);
setFormData({ name: '', email: '', phone: '', message: '' });
```

Browser probe on a valid submit: **zero network requests**, one `console.log`, and the visitor is shown *"Thank you for contacting us!"*. Every enquiry submitted through the homepage form is lost, and the visitor believes it was received. For a business whose site exists to generate class enquiries, this is the highest-severity issue in the repo.

### 2.2 Duplicate `style` prop drops a style — `pages/contact.js:996`

ESLint reports `react/jsx-no-duplicate-props`. The element carries two `style` objects; React keeps the last, so `backgroundColor: branch.color` is silently discarded and the floating particles render with no colour. The lint rule already catches this — but lint does not run in CI or at build time.

### 2.3 Gallery lightbox has no keyboard or backdrop handling — `pages/gallery.js:311-359`

Probe results with the lightbox open:

| Interaction | Expected | Actual |
|---|---|---|
| `Escape` | closes | stays open |
| `ArrowRight` / `ArrowLeft` | next / prev image | no change (stuck on "Image 1 of 30") |
| Click on backdrop | closes | stays open |
| Body scroll while open | locked | `overflow: visible` — page scrolls behind the overlay |

The prev/next buttons call `e.stopPropagation()`, which implies backdrop-to-close was intended but the handler was never attached. The same lightbox pattern is duplicated in `pages/index.js:1184-1227` with the same gaps.

### 2.4 Collapsed mobile menu stays in the accessibility tree — `components/Header.js:120-149`

The menu collapses with `max-h-0 opacity-0`, which hides it visually but leaves the links visible to assistive tech and reachable by keyboard. Probe confirms `isVisible() === true` for "Contact Us" after closing the menu. Keyboard and screen-reader users tab into invisible links. (`aria-expanded` on the button is wired correctly — that part works.)

### 2.5 Homepage carousel shows the same image twice — `pages/index.js:29`

`galleryImages` has 8 entries but 7 unique URLs — `/images/2231-1-scaled.jpg` appears at both index 0 and index 7.

### 2.6 Section-preview routes ship publicly — `pages/home/{hero,gurus,contact}.js`

The build emits `/home/hero`, `/home/gurus`, `/home/contact` as real static pages. They duplicate homepage sections, carry no `noindex`, are not in `sitemap.xml`, and `robots.txt` allows everything. `/home/contact` ships a second copy of the broken form from §2.1. These look like development scaffolding that was never removed.

### 2.7 Google Analytics is still a placeholder — `pages/_document.js:5`

`const GA_ID = "G-XXXXXXXXXX";` — the GA script loads against a placeholder ID. No analytics is being collected.

### 2.8 Config and dependency drift

- `next.config.js` **and** `next.config.mjs` both exist with **different settings**. Only the `.js` one has `output: 'export'`. Next resolves one and ignores the other; editing the wrong file is a silent no-op.
- `postcss.config.js` (Tailwind v3 style) **and** `postcss.config.mjs` (Tailwind v4 `@tailwindcss/postcss` style) both exist. `package.json` depends on both `tailwindcss@^3.4.17` and `@tailwindcss/postcss@^4`.
- Unused dependencies: `claude`, `react-icons`. Unused file: `components/Particles.js`. Unused import shipped to the bundle: `Lightbox` from `yet-another-react-lightbox` in `pages/index.js:9` (a hand-rolled lightbox is used instead).

### 2.9 16 ESLint errors never block anything

Current `next lint` output: 16 errors, 3 warnings — including the real bug in §2.2, an `<a>` used for internal navigation in `Footer.js:477`, and `<img>` instead of `next/image` in three places on the homepage.

### 2.10 WhatsApp popup fires outside the user gesture — `pages/contact.js:150-151`

`window.open(whatsappURL, '_blank')` runs inside a 1.5-second `setTimeout`, so the browser no longer associates it with the click. Headless Chromium allowed it in our probe, but this is a classic popup-blocker pattern and Safari in particular is likely to suppress it. The visitor would then see "Message Sent Successfully!" with nothing having happened.

---

## 3. Proposed test strategy

Weighted for a static marketing site: a thin CI gate, a focused component layer, cheap data-invariant checks, and a handful of end-to-end journeys. **No DOM snapshot tests** — this codebase is animation-heavy (framer-motion, randomised decorative elements) and snapshots would be permanently flaky. Assert behaviour, not markup.

### Tier 0 — Gate what already exists *(highest value per hour)*

Before writing a single test, make the existing tooling enforceable:

1. Add `.github/workflows/ci.yml` running `npm ci`, `next lint`, `next build` on push and PR.
2. Remove `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors` from `next.config.js` (fix the 16 errors first).
3. Delete the losing half of each duplicated config file (§2.8).

This alone catches §2.2 and §2.9 and stops the next regression of that class.

### Tier 1 — Component tests (Jest or Vitest + React Testing Library + jsdom)

Target the interactive surface, in priority order:

| Target | What to assert |
|---|---|
| `ContactSection` | Required-field errors appear per field; invalid email rejected, valid accepted; errors clear on re-typing; **a valid submit reaches the intended destination** (this test fails today, by design — it documents §2.1); form resets only after a successful send. |
| `pages/contact.js` submit handler | WhatsApp URL is built for the right number; message body includes every field; `encodeURIComponent` handles `&`, `#`, newlines and emoji; submitting sets and clears `isSubmitting`; success modal auto-hides. Extract the URL builder into a pure function so it can be tested without a DOM. |
| `Header` | Active link highlighted for each of the 7 routes; hamburger toggles `aria-expanded`; menu closes on route change; **collapsed menu is not reachable by keyboard** (fails today, §2.4). |
| `Breadcrumb` | Home crumb always first; `position` values are 1..n in order; last item renders as text not a link; `dark` variant switches classes; empty `items` array does not crash. |
| Lightbox index math | Extract `nextImage`/`prevImage` wrap-around arithmetic into pure helpers and test both boundaries. Currently duplicated between `gallery.js` and `index.js` — testing forces the dedup. |

Realistic target: **70%+ statement coverage on `components/`**, and coverage of the handler functions in `pages/contact.js` and `pages/gallery.js`. Chasing high coverage on the 2,046-line `pages/index.js` is not worth it — it is almost entirely static JSX.

### Tier 2 — Content & SEO invariants *(cheapest tests in the plan)*

Plain Node assertions over the source data and `public/`. Each is a few lines and catches a whole class of bug:

- Every `/images/...` path referenced in source exists on disk. *(Passes today — 39/39 refs resolve. Worth locking in.)*
- Gallery data has unique `id`s and no duplicate URLs. *(Catches §2.5.)*
- Every page exports a non-empty `<title>`, a meta description, and a canonical URL.
- `sitemap.xml` lists exactly the routes that should be indexable — no missing pages, no stale entries. *(Catches §2.6.)*
- No placeholder strings ship: `G-XXXXXXXXXX`, `href="#"`, `lorem`. *(Catches §2.7 and the three dead social links in `pages/contact.js:212,222,232`.)*
- Phone numbers and the WhatsApp number are consistent across every file that hardcodes them.

### Tier 3 — End-to-end (Playwright, against the static export)

Keep this small — 6 to 8 specs. Build once, `serve out/`, run:

1. Homepage smoke: loads, hero renders, no console errors, no failed image requests.
2. Contact page journey: fill → submit → success state → WhatsApp URL is correct (intercept the popup rather than opening it).
3. Homepage form journey: the §2.1 regression test at the integration level.
4. Gallery lightbox: open, arrow-key navigation, `Escape` to close, backdrop to close, scroll lock. *(All fail today.)*
5. Mobile navigation at 390px: open, navigate, auto-close.
6. 404 route renders the custom page.
7. `@axe-core/playwright` accessibility scan on all 7 routes — this codebase has heavy colour-on-gradient text and would benefit.

Add `--project=chromium,webkit` for the popup-blocker behaviour in §2.10.

---

## 4. Suggested sequencing

| Phase | Work | Outcome |
|---|---|---|
| 1 | CI workflow + un-ignore lint + fix the 16 lint errors + resolve duplicate configs | Regressions of §2.2/§2.9 become impossible; every future PR is checked |
| 2 | Decide where homepage form submissions should go, implement it, and land the `ContactSection` tests | Closes the critical §2.1 lead-loss bug with a permanent guard |
| 3 | Tier 2 content invariants | Very high catch-rate per line of test code; closes §2.5, §2.6, §2.7 |
| 4 | Tier 1 component tests for `Header`, `Breadcrumb`, lightbox helpers | Locks the interactive surface; forces the lightbox dedup |
| 5 | Tier 3 Playwright specs + axe scan | Catches §2.3, §2.4, §2.10 and guards the real user journeys |

### Tooling recommendation

**Vitest + React Testing Library + Playwright.** Vitest needs less configuration than Jest for a modern ESM Next.js project and runs noticeably faster; Playwright is already the natural fit for a static export and gives the axe integration for free. Add `test`, `test:coverage`, and `test:e2e` scripts and wire the first two into CI.

---

## 5. What *not* to test

- **DOM snapshots.** Randomised decorative elements and framer-motion transforms make them flaky and low-signal.
- **Static JSX content** — hero copy, section headings, the guru biographies. Testing these just duplicates the source and creates churn on every copy edit. The Tier 2 invariants cover the parts that actually break.
- **Animation internals.** Assert that an element appears or a class toggles, never the intermediate transform values.
