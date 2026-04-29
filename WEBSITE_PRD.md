# Tarmac Website — Product Requirements Document
**Version:** 1.0 | **Date:** April 2026 | **For:** Coding agent implementation

---

## Overview

Tarmac is an AI-native workspace for independent travel advisors. The website at travelwithtarmac.com needs to be updated to:

1. Remove the dual "Travelers / Travel Agents" toggle — the product is **Travel Agents only** going forward
2. Completely replace the Travel Agents landing with a new page that reflects the full product vision
3. The hero and all key sections must lead with **revenue impact and time saved** (specific dollar figures)
4. Design inspiration: n8n.io — dark sections with gradient/glow accents, bold feature grids, clear metric callouts
5. The consumer traveler sections should be removed or deprioritized (they are not the current focus)

**Primary audience going forward:** Independent travel advisors (ICs) working under host agencies (Virtuoso, Nexion, KHM, Dream Vacations, etc.) with $250K–$1M+ in annual bookings. They are experienced, full-time, already have tools — but those tools are bad.

---

## What to Keep, Remove, Change

### KEEP
- Domain, branding, color system (sand/ink/flame palette)
- Bricolage Grotesque + Serif italic heading style
- Header and Footer structure (minor copy updates)
- Waitlist CTA modal (keep, update copy)
- Overall component architecture (Next.js, Tailwind)

### REMOVE
- Audience segmented control toggle (Travelers / Travel Agents)
- Consumer traveler landing content (HeroPhaseSection, DestinationsSection, TarmacExplainerSection, HomeHeroSection)
- All copy referring to "group trips," "expense splitting," "travelers"
- The "66K travel actions / 9K workflows" placeholder metrics (replace with real research numbers)
- `/vision` page (already hidden — leave disabled)

### CHANGE
- Home page `/` becomes the Travel Agents product landing (no toggle)
- Header CTA: "Join waitlist" stays, but secondary nav should add "Features" and "How It Works" anchor links
- Footer tagline: Update to reflect B2B focus

---

## Page Architecture

```
/ (Home) — Full product landing page for travel advisors
  ├── HeroSection
  ├── MetricsBarSection
  ├── PainPointSection  
  ├── FeaturesSection (5 modules)
  ├── ROICalculatorSection
  ├── HowItWorksSection
  ├── ComparisonSection
  ├── SocialProofSection
  └── FinalCTASection
```

---

## Section-by-Section Spec

---

### 1. HeroSection

**Layout:** Full-width, dark background (`#050e1f` navy), centered content, large headline

**Headline (display size, serif italic):**
```
Stop leaving $24,000 on the table every year.
```

**Sub-headline (DM Sans, 20px, ink-300):**
```
Tarmac is the AI workspace that gives experienced travel advisors
back their time — and their missing commissions.
```

**Supporting line (smaller, muted):**
```
Built for ICs who already book $250K+/year and want to reach $1M without hiring staff.
```

**CTAs:**
- Primary button: "Join the waitlist" (flame orange `#ff5a00`)
- Secondary: "See how it works →" (ghost, white border)

**Hero visual:** 
A dark UI mockup / screenshot of the Tarmac product dashboard showing:
- An itinerary being built on the left
- Commission tracker panel on the right with a "$4,300 recovered" callout
- A "Quote ready" notification badge

If a real screenshot is not available, use an abstract dark card grid with glow highlights (same style as n8n's hero — dark cards with gradient borders, glowing metrics)

**Background treatment:** 
Dark navy (`#050e1f`) with a subtle radial gradient glow (flame orange, very low opacity ~5%) emanating from top center. Matches n8n's treatment. No full-screen background images.

---

### 2. MetricsBarSection

**Layout:** Full-width band, dark sand or dark navy, 3–4 metrics in a horizontal row with dividers

**Metrics to display (all from verified research):**

| Metric | Label |
|--------|-------|
| **$4,300** | Average unpaid commissions per advisor per year |
| **3–6 hrs** | Time spent building each itinerary manually |
| **40%** | Commission statements with errors or discrepancies |
| **$24,000** | Total annual value recovered by a median advisor using AI tools |

**Design:** Simple, clean. Large number in flame orange or white. Label below in muted ink-300. Dividers between. No icons needed.

---

### 3. PainPointSection

**Headline:**
```
Every advisor knows these problems.
Nobody has built the fix. Until now.
```

**Layout:** 3-column card grid on desktop, 1-column on mobile

**Cards (5 pain points — show 3 on first row, 2 centered below or show all 5 in scroll):**

**Card 1 — Itinerary Hell**
- Icon: Document/time icon
- Title: "3–6 hours per itinerary. Every time."
- Body: "You're rebuilding the same structure in Word or Google Docs for every client. You copy-paste from last trip, fix formatting, add supplier details manually. It's the biggest time sink in your business."
- Stat callout: `12 hrs/week → 2 hrs/week`

**Card 2 — Missing Commissions**
- Icon: Dollar/alert icon
- Title: "$4,300 disappears every year without you knowing."
- Body: "Commission statements from 12+ suppliers, each formatted differently. 40% contain errors or underpayments. Most advisors don't have the time to cross-check every line. That money is just gone."
- Stat callout: `$4,300/yr recovered on average`

**Card 3 — Quote Roulette**
- Icon: Calculator icon
- Title: "You're pricing from memory and spreadsheets."
- Body: "Calculating total trip cost, your commission, markup, and net client price across 5 suppliers takes 45 minutes per quote. One error and you're either undercharging or losing the booking."
- Stat callout: `Close rate +30% with instant quotes`

**Card 4 — Client Churn You Can't See Coming**
- Icon: User/alert icon
- Title: "Your best clients leave before you notice."
- Body: "You have 200 past clients in your Gmail. You're not tracking who booked last, who's overdue for an anniversary trip, or who you haven't heard from in 18 months. The repeat business is there — you just can't see it."
- Stat callout: `+23% repeat booking rate`

**Card 5 — Supplier Research Rabbit Holes**
- Icon: Search icon
- Title: "2 hours searching for what you already know exists."
- Body: "Finding the right hotel at the right rate with your commission tier for a specific destination requires jumping between 6 supplier portals, two GDS screens, and a spreadsheet you built yourself."
- Stat callout: `2 hrs/day → 20 min`

**Card design:** White cards on light sand background. Stat callout in a small orange/flame badge at bottom of card. Subtle hover lift. Same `.card-white` style already in the codebase.

---

### 4. FeaturesSection

**Section header:**
```
Everything you need to run a $1M advisory practice.
Nothing you don't.
```

**Sub-header:**
```
Five AI-powered tools. One workspace. Works with any host.
```

**Layout:** Alternating full-width feature rows (image/visual left, text right — then flip). Similar to n8n's "Build powerful workflows" section. Dark background for this section (navy `#0A1628`).

---

**Feature 1 — AI Itinerary Builder**

Eyebrow: `ITINERARY BUILDING`
Headline: `From client brief to polished PDF in 30 minutes.`
Body:
```
Describe the trip in plain language. Tarmac generates a 
full day-by-day itinerary — hotels, activities, transfers, 
dining suggestions — formatted and branded for your agency. 
Edit inline, add supplier notes, export to PDF or share a 
client link.

No more Word doc templates. No more copy-paste from last year.
```
Metric callout: `Saves 3–5 hrs per booking`
Visual: Dark mockup of the itinerary builder UI

---

**Feature 2 — Smart Quote Generator**

Eyebrow: `QUOTING & PROPOSALS`
Headline: `Accurate prices. Your commission. In seconds.`
Body:
```
Input your suppliers, their rates, and your commission tier. 
Tarmac calculates total trip cost, your gross commission, 
client net price, and your markup — for every configuration 
automatically.

Send a professional proposal in the time it used to take to 
open a spreadsheet.
```
Metric callout: `Close rate up 30%`
Visual: Quote calculation UI with commission breakdown visible

---

**Feature 3 — Commission Tracker**

Eyebrow: `COMMISSION RECOVERY`
Headline: `Stop losing $4,300 a year to invisible errors.`
Body:
```
Upload commission statements from any supplier — any format. 
Tarmac parses them, matches payments to bookings, flags 
discrepancies, and generates a chargeback report you can 
send to the supplier in one click.

The average advisor recovers $4,300/year in the first 90 days.
```
Metric callout: `$4,300/yr recovered avg`
Visual: Commission statement with highlighted discrepancies, recovery alert

---

**Feature 4 — Client Intelligence CRM**

Eyebrow: `CLIENT MANAGEMENT`
Headline: `200 clients. Tarmac remembers all of them.`
Body:
```
Every client preference, dietary restriction, past booking, 
anniversary, and travel history — in one place. Tarmac 
surfaces who to reach out to, when, and why. 

Auto-draft follow-up emails. Flag clients who haven't booked 
in 12 months. Never miss a repeat booking again.
```
Metric callout: `+23% repeat booking rate`
Visual: CRM view with "Reach out now" smart alerts

---

**Feature 5 — Supplier Intelligence Search**

Eyebrow: `SUPPLIER RESEARCH`
Headline: `Stop jumping between 6 portals. Search once.`
Body:
```
Search your preferred supplier inventory from one place. 
Hotels, tours, cruises — filtered by destination, dates, 
your commission tier, and client preferences. 

AI ranks results by best fit for your specific client brief, 
not just price.
```
Metric callout: `2 hrs/day → 20 min`
Visual: Unified search UI with commission rate displayed on results

---

**Section footer note:**
```
Works with your existing host — Virtuoso, Nexion, KHM, Dream Vacations, 
or any other. You keep 100% of your commissions.
```

---

### 5. ROICalculatorSection

**Headline:**
```
What's Tarmac worth to your business?
```

**Layout:** Interactive calculator card (center-aligned, max-width 640px, white card on sand background)

**Inputs:**
- "How many bookings per month?" → Slider: 5 to 40 (default: 15)
- "Average booking value?" → Slider: $3K to $30K (default: $8K)

**Outputs (auto-calculated, update live):**

| Output | Formula |
|--------|---------|
| **Hours saved per month** | bookings × 4 hrs avg × 0.7 reduction = X hrs |
| **Estimated commission recovered** | (bookings × 12 × avgValue × 0.10 × 0.40 × 0.30) / 12 = $/mo |
| **Revenue unlocked (more bookings)** | hours_saved × $150/hr value = additional capacity $/mo |
| **Total annual value** | (recovered + unlocked) × 12 |

**Callout line:**
```
At $79/month, most advisors see full payback in under 3 weeks.
```

**CTA below calculator:**
"Join the waitlist" button (flame orange)

**Note for implementation:** This can be a simple React state component with controlled inputs. No backend needed — all client-side math.

---

### 6. HowItWorksSection

**Headline:**
```
Set up in a day. Productive from day one.
```

**Layout:** 3 horizontal steps with connectors (desktop) or vertical (mobile). Light sand background.

**Step 1 — Connect**
Icon: Plug/link
Title: "Connect your host and suppliers"
Body: "Link your host agency credentials. Add your preferred supplier relationships. Takes 10 minutes."

**Step 2 — Import**
Icon: Upload
Title: "Bring in your client list"
Body: "Import your existing clients from Gmail, a spreadsheet, or TravelJoy/ClientBase. Tarmac structures everything automatically."

**Step 3 — Work**
Icon: Lightning/spark
Title: "Build your first itinerary in 30 minutes"
Body: "Open a new booking, describe the trip, and let Tarmac generate the draft. You review, refine, and send."

---

### 7. ComparisonSection

**Headline:**
```
Not a new host. Not a new GDS. Just better tools.
```

**Sub-headline:**
```
Tarmac sits on top of what you already have. 
You keep your host, your commissions, your clients.
```

**Layout:** Comparison table, 3 columns

| | **Without Tarmac** | **With Tarmac** |
|--|-------------------|-----------------|
| Itinerary building | 3–6 hrs each, Word/Docs | 30 min, AI-drafted + branded |
| Commission tracking | Spreadsheets, 40% error rate | Automated, discrepancies flagged |
| Quoting | Manual spreadsheet, error-prone | Instant, accurate, commission calculated |
| Client follow-up | Manual memory + Gmail | Auto-surfaced, draft written |
| Supplier research | 6 portals, 2 hrs | Unified search, 20 min |
| Monthly cost | $0 (and $24K lost) | $79/mo |

**Design:** Clean table on white card. Red/orange "without" column indicators. Green/positive "with Tarmac" indicators. No over-styling.

**Disclaimer line (small, muted):**
```
Works alongside any host agency — Virtuoso, Nexion, KHM, Dream Vacations, and others.
You keep 100% of your existing commission relationships.
```

---

### 8. SocialProofSection

**Headline:**
```
Built with advisors who've been doing this for years.
```

**Layout:** 2–3 testimonial cards. If no real testimonials yet, use placeholder structure with `[ADVISOR NAME]` tags so the coding agent knows where to inject them later.

**Placeholder card structure:**
```
"[Quote about specific pain point solved and result achieved]"
— [Name], Independent Travel Advisor, [X] years experience, [Host Agency]
[Niche: Luxury / Adventure / Family / Corporate]
```

**Add a "Design partner" badge/tag to each card:** "Early Access Member"

---

### 9. FinalCTASection

**Layout:** Full-width dark section (navy), centered

**Headline:**
```
Your first recovered commission pays for a year of Tarmac.
```

**Sub-headline:**
```
Join the waitlist. Early members get 3 months free and hands-on onboarding.
```

**CTA:**
- Single large button: "Join the waitlist" (flame orange, large)
- Below button: "No credit card. No commitment. Just your email."

**Trust signals (small, below CTA):**
- "Your data is yours. Always." 
- "Works with any host agency."
- "Cancel anytime."

---

## Header Updates

**Current:** Logo | [Team link] | [Join waitlist button]

**Updated:** Logo | Features | How It Works | [Join waitlist button (flame orange)]

- "Features" anchors to `#features` section
- "How It Works" anchors to `#how-it-works` section
- Both links are smooth-scroll anchors, not page navigations
- On mobile: hamburger menu with same links

---

## Footer Updates

**Current tagline:** "Travel with tarmac — your personal concierge for every trip and adventure."

**Updated tagline:** "Tarmac — the AI workspace for independent travel advisors."

**Update nav links:**
- Remove: any consumer/traveler links
- Keep: Team, Privacy Policy, Terms of Service
- Add: Features (anchor), How It Works (anchor)

---

## Waitlist Modal Updates

**Current:** Dual choice — Travelers / Travel Agents

**Updated:** Single focused form — Travel Advisors only

**Modal headline:** "Join the waitlist for early access."

**Fields:**
1. Full name
2. Email
3. "How many bookings do you handle per month?" — dropdown: 1–5, 6–15, 16–30, 30+
4. "Which host agency are you with?" — text field (optional)

**Confirmation message:**
```
You're on the list. We'll reach out to early members personally 
before public launch. Expect to hear from us within 2 weeks.
```

---

## Design Language (n8n-inspired additions to existing system)

The existing color system and typography stay. Add these patterns:

### Dark Section Treatment
For `HeroSection`, `FeaturesSection`, `FinalCTASection`:
- Background: `#050e1f` (navy-950) or `#0A1628` (navy-900)
- Text: white primary, `#aeaeb2` (ink-300) secondary
- Card borders: `1px solid rgba(255,255,255,0.08)`
- Subtle glow: `radial-gradient(ellipse at 50% 0%, rgba(249,115,22,0.06) 0%, transparent 70%)` — flame orange glow from top

### Feature Card (Dark Version)
For feature highlights in dark sections:
```css
.card-dark {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 28px;
}
.card-dark:hover {
  border-color: rgba(249,115,22,0.3);
  background: rgba(255,255,255,0.05);
}
```

### Metric Callout Badge
For the stat callouts on feature cards and pain point cards:
```css
.metric-badge {
  display: inline-block;
  background: rgba(249,115,22,0.12);
  color: #fb923c;
  border: 1px solid rgba(249,115,22,0.25);
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 13px;
  font-weight: 600;
  font-family: 'DM Sans', sans-serif;
}
```

### Section Label / Eyebrow
```css
.section-eyebrow {
  font-family: 'DM Sans', sans-serif;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fb923c; /* flame-400 */
  margin-bottom: 12px;
}
```

---

## Component Mapping (What to Build / Reuse)

| New Section | Build New? | Reuse What? |
|------------|-----------|-------------|
| HeroSection | Build new | Use `.card-dark` pattern |
| MetricsBarSection | Build new | DM Sans type styles |
| PainPointSection | Build new | Reuse `.card-white` cards |
| FeaturesSection | Build new (alternating rows) | Section padding utilities |
| ROICalculatorSection | Build new (React state) | `.card-white` wrapper |
| HowItWorksSection | Build new | Existing step/icon patterns |
| ComparisonSection | Build new | `.card-white` table wrapper |
| SocialProofSection | Build new | `.card-white` testimonial cards |
| FinalCTASection | Build new | Reuse existing CTA button styles |

**Delete these existing components (no longer needed):**
- `HomeHeroSection`
- `HeroPhaseSection`
- `DestinationsSection`
- `TarmacExplainerSection`
- `TravelAgentsLanding` (will be replaced by new Home page)
- `SegmentedControl` (audience toggle)
- `PhaseCarousel`
- `BubbleCarousel`

---

## Implementation Order (Priority)

1. **HeroSection** — First impression, highest impact
2. **FeaturesSection** — Core product explanation
3. **MetricsBarSection** — Credibility/numbers
4. **PainPointSection** — Resonance with target user
5. **ComparisonSection** — Converts the fence-sitters
6. **ROICalculatorSection** — Interactive engagement
7. **HowItWorksSection** — Reduces friction
8. **FinalCTASection** — Conversion
9. **SocialProofSection** — Add last (needs real content)
10. **Header/Footer updates** — Final cleanup
11. **Modal update** — Final cleanup

---

## Out of Scope for This PRD

- Backend waitlist storage (keep existing integration)
- Blog / content pages
- Pricing page (product not launched yet)
- Auth / login / dashboard (product not built yet)
- Mobile app pages
- Team / About pages (no changes needed)
- `/vision` page (stays disabled)

---

## Copy Guardrails for Coding Agent

- Never use "travelers" or "group trips" on the new home page
- Never use "expense splitting" or "bill settling"
- Always say "independent travel advisors" not "travel agents" (more respected term)
- Always say "works with any host" not "host-agnostic" (too jargony)
- Metric: "$24,000/yr value" is the headline annual number — use it prominently
- Metric: "$79/month" is the price — use it in the ROI calculator section
- Metric: "$4,300 recovered commissions" — always attribute to "avg per advisor"
- Metric: "30 minutes per itinerary" vs "3–6 hours" — always use both for contrast
- Commission stat: "40% of commission statements contain errors" — always include source note "(industry data)"

---

*End of PRD v1.0*
