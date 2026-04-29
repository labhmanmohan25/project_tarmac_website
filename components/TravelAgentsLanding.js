"use client";

import { useMemo, useState } from "react";
import { useJoinWaitlist } from "./JoinWaitlistProvider";
import FeatureCardVideo from "./FeatureCardVideo";

const METRICS = [
  { value: "$4,300", label: "Average unpaid commissions per advisor per year" },
  { value: "3–6 hrs", label: "Time spent building each itinerary manually" },
  { value: "40%", label: "Commission statements with errors (industry data)" },
  { value: "$24,000", label: "Annual value recovered (median, AI tools)" },
];

const PAIN_POINTS = [
  {
    title: "3–6 hours per itinerary. Every time.",
    body: "You're rebuilding the same structure in Word or Google Docs for every client. You copy-paste from last trip, fix formatting, add supplier details manually. It's the biggest time sink in your business.",
    stat: "12 hrs/week → 2 hrs/week",
  },
  {
    title: "$4,300 disappears every year without you knowing.",
    body: "Commission statements from 12+ suppliers, each formatted differently. 40% contain errors or underpayments (industry data). Most advisors don't have time to cross-check every line.",
    stat: "$4,300/yr recovered on average",
  },
  {
    title: "You're pricing from memory and spreadsheets.",
    body: "Calculating total trip cost, your commission, markup, and net client price across suppliers takes ~45 minutes per quote. One error and you're undercharging or losing the booking.",
    stat: "Close rate +30% with instant quotes",
  },
  {
    title: "Your best clients leave before you notice.",
    body: "Past clients in your inbox — you're not tracking who booked last, who's due for an anniversary trip, or who you haven't heard from in 18 months.",
    stat: "+23% repeat booking rate",
  },
  {
    title: "2 hours searching for what you already know exists.",
    body: "The right hotel at the right rate for your commission tier means jumping between supplier portals, GDS screens, and your own spreadsheet.",
    stat: "2 hrs/day → 20 min",
  },
];

/** Mixkit.co stock footage — 720p MP4 + poster; free license per clip (see mixkit.co/license). */
const FEATURES = [
  {
    eyebrow: "ITINERARY BUILDING",
    title: "From client brief to polished PDF in 30 minutes.",
    body: `Describe the trip in plain language. Tarmac generates a full day-by-day itinerary — hotels, activities, transfers, dining — formatted and branded for your agency. Edit inline, export PDF or share a client link.

No more Word templates. No more copy-paste from last year.`,
    metric: "Saves 3–5 hrs per booking",
    videoSrc: "https://assets.mixkit.co/videos/40102/40102-720.mp4",
    posterSrc: "https://assets.mixkit.co/videos/40102/40102-thumb-720-0.jpg",
    videoLabel: "Video: view from an airplane window over land and water at dusk.",
  },
  {
    eyebrow: "QUOTING & PROPOSALS",
    title: "Accurate prices. Your commission. In seconds.",
    body: `Input suppliers, rates, and your commission tier. Tarmac calculates trip total, gross commission, client net price, and markup — for every configuration.

Send a professional proposal in the time it used to take to open a spreadsheet.`,
    metric: "Close rate up 30%",
    videoSrc: "https://assets.mixkit.co/videos/308/308-720.mp4",
    posterSrc: "https://assets.mixkit.co/videos/308/308-thumb-720-0.jpg",
    videoLabel: "Video: professional working on a laptop with spreadsheet and charts.",
  },
  {
    eyebrow: "COMMISSION RECOVERY",
    title: "Stop losing $4,300 a year to invisible errors.",
    body: `Upload commission statements — any format. Tarmac parses, matches payments to bookings, flags discrepancies, and helps you prepare chargeback-friendly reports.

Many advisors recover meaningful commission in the first 90 days.`,
    metric: "$4,300/yr recovered avg",
    videoSrc: "https://assets.mixkit.co/videos/18296/18296-720.mp4",
    posterSrc: "https://assets.mixkit.co/videos/18296/18296-thumb-720-0.jpg",
    videoLabel: "Video: hands counting bills.",
  },
  {
    eyebrow: "CLIENT MANAGEMENT",
    title: "200 clients. Tarmac remembers all of them.",
    body: `Preferences, dietary restrictions, past bookings, anniversaries — in one place. Surface who to reach out to, when, and why. Auto-draft follow-ups. Flag clients who haven't booked in 12 months.`,
    metric: "+23% repeat booking rate",
    videoSrc: "https://assets.mixkit.co/videos/4809/4809-720.mp4",
    posterSrc: "https://assets.mixkit.co/videos/4809/4809-thumb-720-0.jpg",
    videoLabel: "Video: business colleagues in a meeting with laptops and documents.",
  },
  {
    eyebrow: "SUPPLIER RESEARCH",
    title: "Stop jumping between 6 portals. Search once.",
    body: `Search preferred inventory from one place — hotels, tours, cruises — filtered by destination, dates, commission tier, and client preferences. AI ranks by fit for your brief, not just price.`,
    metric: "2 hrs/day → 20 min",
    videoSrc: "https://assets.mixkit.co/videos/5371/5371-720.mp4",
    posterSrc: "https://assets.mixkit.co/videos/5371/5371-thumb-720-0.jpg",
    videoLabel: "Video: aerial view of a beach, palm trees, boats, and shoreline hotels.",
  },
];

const HOW_STEPS = [
  {
    title: "Connect your host and suppliers",
    body: "Link your host credentials and preferred supplier relationships. About 10 minutes.",
  },
  {
    title: "Bring in your client list",
    body: "Import from Gmail, a spreadsheet, or TravelJoy/ClientBase. Tarmac structures it automatically.",
  },
  {
    title: "Build your first itinerary in 30 minutes",
    body: "Open a booking, describe the trip, review the draft, refine, and send.",
  },
];

const COMPARISON_ROWS = [
  { area: "Itinerary building", without: "3–6 hrs each, Word/Docs", with: "30 min, AI-drafted + branded" },
  { area: "Commission tracking", without: "Spreadsheets; high error rate (industry data)", with: "Automated; discrepancies flagged" },
  { area: "Quoting", without: "Manual spreadsheet", with: "Instant; commission calculated" },
  { area: "Client follow-up", without: "Memory + inbox alone", with: "Surfaced; drafts ready" },
  { area: "Supplier research", without: "Many portals; hours", with: "Unified search; minutes" },
  { area: "Monthly cost", without: "$0 (and revenue left on table)", with: "$79/mo" },
];

const TESTIMONIALS = [
  {
    quote:
      "[Quote about a specific pain resolved and a concrete result — replace when you have real advisors.]",
    name: "[ADVISOR NAME]",
    meta: "Independent travel advisor · [Host] · Early Access Member",
  },
  {
    quote: "[Quote about time saved on itineraries or quoting.]",
    name: "[ADVISOR NAME]",
    meta: "Independent travel advisor · [Host] · Early Access Member",
  },
  {
    quote: "[Quote about commissions or repeat clients.]",
    name: "[ADVISOR NAME]",
    meta: "Independent travel advisor · [Host] · Early Access Member",
  },
];

function formatMoney(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

/** ROI model assumptions — transparent defaults; tune if you get advisor-specific data */
const ROI = {
  /** Hours of itinerary, quoting, supplier prep you avoid per booking (vs manual docs/spreadsheets) */
  hoursSavedPerBooking: 2.25,
  /** Typical gross commission rate on trip value (blend of FIT, cruise, tours) */
  avgCommissionRate: 0.11,
  /** Industry benchmark: unresolved statement issues (midpoint of anecdotal bands) → scaled to advisor volume */
  annualRecoveryBaselineUsd: 4_300,
  /** Volume that baseline recovery figure assumes — matches default slider midpoint */
  baselineBookingsPerMonth: 15,
  baselineTripValueUsd: 8_000,
  /** Share of reclaimed hours advisors actually redeploy toward new sales (rest = ops, family, burnout buffer) */
  redeployPct: 0.28,
  /** End-to-end hours to originate one additional trip at your desk (discovery → proposal → doc) */
  hoursPerNewBooking: 17,
  /** Benchmark $/hr for valuing reclaimed admin time (time value = hours_saved/mo × this × 12) */
  hourlyTimeValueUsd: 50,
};

export default function TravelAgentsLanding() {
  const { openJoinWaitlist } = useJoinWaitlist();
  const [bookings, setBookings] = useState(15);
  const [avgValue, setAvgValue] = useState(8000);

  const roi = useMemo(() => {
    const hoursSavedPerMonth = bookings * ROI.hoursSavedPerBooking;
    const hoursRedeployedPerYear = hoursSavedPerMonth * 12 * ROI.redeployPct;
    /** How many incremental trips/year if that time goes into new bookings */
    const extraBookingsPerYear = hoursRedeployedPerYear / ROI.hoursPerNewBooking;
    /** Opportunity $ tied to incremental trips (not arbitrary $/hr) */
    const incrementalCommissionAnnual = extraBookingsPerYear * avgValue * ROI.avgCommissionRate;

    const userAnnualTripSales = bookings * avgValue * 12;
    const baselineAnnualTripSales =
      ROI.baselineBookingsPerMonth * ROI.baselineTripValueUsd * 12;
    const commissionRecoveryAnnual =
      ROI.annualRecoveryBaselineUsd *
      (userAnnualTripSales / Math.max(baselineAnnualTripSales, 1));

    const timeValueAnnual =
      hoursSavedPerMonth * ROI.hourlyTimeValueUsd * 12;

    const totalAnnual =
      incrementalCommissionAnnual + commissionRecoveryAnnual + timeValueAnnual;

    return {
      hoursSavedPerMonth,
      hoursRedeployedPerYear,
      extraBookingsPerYear,
      incrementalCommissionAnnual,
      commissionRecoveryAnnual,
      timeValueAnnual,
      totalAnnual,
    };
  }, [bookings, avgValue]);

  return (
    <div className="zap-agents-page">
      <section className="zap-agents-hero">
        <div className="zap-agents-container">
          <h1 className="zap-agents-hero-title">
            <em>Stop leaving $24,000</em>
            <br />
            on the table every year.
          </h1>
          <p className="zap-agents-hero-copy">
            Tarmac is the AI workspace that gives independent travel advisors back their time, and their
            missing commissions.
          </p>
          {/* <p className="app-type-body" style={{ margin: "14px auto 0", maxWidth: "52ch", textAlign: "center", color: "#636366" }}>
            Built for ICs who already book $250K+/year and want to reach $1M without hiring staff.
          </p> */}
          <div className="zap-agents-hero-actions">
            <button type="button" onClick={openJoinWaitlist} className="zap-agents-btn-primary">
              Join the waitlist
            </button>
            <a href="#how-it-works" className="zap-agents-btn-secondary">
              See how it works →
            </a>
          </div>
        </div>
      </section>

      <section className="zap-agents-section zap-agents-section-muted">
        <div className="zap-agents-container">
          <div className="zap-agents-policy-shell">
            <div className="zap-agents-policy-footer">
              {METRICS.map((m) => (
                <div key={m.label} className="zap-agents-policy-metric">
                  <strong style={{ color: "#ff5a00" }}>{m.value}</strong>
                  <span>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="zap-agents-section">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">
            Every advisor knows these problems.
            <br />
            Nobody has built the fix. Until now.
          </h2>
          <div className="zap-agents-outcome-grid">
            {PAIN_POINTS.map((item) => (
              <article key={item.title} className="zap-agents-outcome-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <p className="app-type-caption" style={{ marginTop: 12, color: "#ff5a00", fontWeight: 600 }}>
                  {item.stat}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="zap-agents-section zap-agents-section-muted" id="features">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">
            Everything you need to run a $1M advisory practice.
          </h2>
          <p className="zap-agents-section-subtitle">
            Five AI-powered tools. One workspace. Works with any host.
          </p>
          <div className="zap-agents-feature-grid">
            {FEATURES.map((f) => (
              <article key={f.title} className="zap-agents-feature-card">
                <span className="zap-agents-dot" aria-hidden />
                <p className="app-type-label" style={{ color: "#8b4a20", marginBottom: 10, marginTop: 0 }}>
                  {f.eyebrow}
                </p>
                <h3>{f.title}</h3>
                <p style={{ whiteSpace: "pre-line" }}>{f.body}</p>
                <p className="app-type-caption" style={{ marginTop: 12, color: "#ff5a00", fontWeight: 600 }}>
                  {f.metric}
                </p>
                <FeatureCardVideo src={f.videoSrc} poster={f.posterSrc} label={f.videoLabel} />
              </article>
            ))}
          </div>
          <p className="zap-agents-section-subtitle" style={{ marginTop: 32 }}>
            Works with your existing host — Virtuoso, Nexion, KHM, Dream Vacations, or any other. You keep 100% of your
            commissions.
          </p>
        </div>
      </section>

      <section className="zap-agents-roi-section" id="roi-calculator" aria-labelledby="roi-section-title">
        <div className="zap-agents-container zap-agents-roi-grid">
          <div className="zap-agents-roi-left">
            <h2 id="roi-section-title" className="zap-agents-roi-headline">
              What&apos;s Tarmac worth to your business?
            </h2>
            <div>
              <label className="app-type-body" htmlFor="roi-bookings">
                How many bookings per month? <strong>{bookings}</strong>
              </label>
              <input
                id="roi-bookings"
                type="range"
                min={5}
                max={40}
                value={bookings}
                onChange={(e) => setBookings(Number(e.target.value))}
                style={{ width: "100%", marginTop: 12, accentColor: "#ff5a00" }}
              />
              <label className="app-type-body" htmlFor="roi-value" style={{ display: "block", marginTop: 18 }}>
                Average booking value? <strong>{formatMoney(avgValue)}</strong>
              </label>
              <input
                id="roi-value"
                type="range"
                min={3000}
                max={30000}
                step={500}
                value={avgValue}
                onChange={(e) => setAvgValue(Number(e.target.value))}
                style={{ width: "100%", marginTop: 12, accentColor: "#ff5a00" }}
              />
              <dl className="zap-agents-roi-metrics">
                <div className="zap-agents-roi-metric-row">
                  <dt>Admin hours reclaimed / month</dt>
                  <dd>{roi.hoursSavedPerMonth.toFixed(1)} hrs</dd>
                </div>
                <div className="zap-agents-roi-metric-row">
                  <dt>
                    Time value ({roi.hoursSavedPerMonth.toFixed(1)} hrs/mo × {formatMoney(ROI.hourlyTimeValueUsd)}/hr × 12)
                  </dt>
                  <dd>{formatMoney(roi.timeValueAnnual)}/yr</dd>
                </div>
                <div className="zap-agents-roi-metric-row">
                  <dt>Extra trips you could take on / year</dt>
                  <dd>
                    ~
                    {(roi.extraBookingsPerYear < 10 ? roi.extraBookingsPerYear.toFixed(1) : Math.round(roi.extraBookingsPerYear))}{" "}
                    trips
                  </dd>
                </div>
                <div className="zap-agents-roi-metric-row">
                  <dt>Est. commission on those trips ({Math.round(ROI.avgCommissionRate * 100)}% avg.)</dt>
                  <dd>{formatMoney(roi.incrementalCommissionAnnual)}/yr</dd>
                </div>
                <div className="zap-agents-roi-metric-row">
                  <dt>Est. recovered commissions (scaled to your volume)</dt>
                  <dd>{formatMoney(roi.commissionRecoveryAnnual)}/yr</dd>
                </div>
                <div className="zap-agents-roi-metric-total">
                  <dt>Combined annual upside (time value + capacity + recovery)</dt>
                  <dd>{formatMoney(roi.totalAnnual)}/yr</dd>
                </div>
              </dl>
              <p className="app-type-caption zap-agents-roi-caption">
                Time value = hours saved/mo × {formatMoney(ROI.hourlyTimeValueUsd)}/hr × 12. Hours = ~{ROI.hoursSavedPerBooking}{" "}
                hrs saved per booking (itineraries, quoting, supplier prep). Capacity assumes ~{Math.round(ROI.redeployPct * 100)}%
                of that time converts to new sales, ~{ROI.hoursPerNewBooking} hrs per new booking. Recovery uses the ~
                {formatMoney(ROI.annualRecoveryBaselineUsd)} yr benchmark scaled to your trip volume (
                {formatMoney(bookings * avgValue)}/mo sales). Illustrative—not a guarantee.
              </p>
              <p className="app-type-caption zap-agents-roi-caption" style={{ marginTop: 8 }}>
                At $79/month, many advisors see full payback in under 3 weeks.
              </p>
              <button type="button" onClick={openJoinWaitlist} className="zap-agents-btn-primary" style={{ width: "100%", marginTop: 16 }}>
                Join the waitlist →
              </button>
            </div>
          </div>
          <div className="zap-agents-roi-visual">
            <div className="zap-agents-roi-visual-texture" aria-hidden />
            <div className="zap-agents-roi-visual-frame">
              <img
                src="/images/tarmac-roi-visual.jpg"
                alt="Travel advisors collaborating in a bright workspace"
                width={380}
                height={253}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="zap-agents-section zap-agents-section-muted" id="how-it-works">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">Set up in a day. Productive from day one.</h2>
          <div className="zap-agents-outcome-grid" style={{ marginTop: 28 }}>
            {HOW_STEPS.map((s) => (
              <article key={s.title} className="zap-agents-outcome-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="zap-agents-section">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">Not a new host. Not a new GDS. Just better tools.</h2>
          <p className="zap-agents-section-subtitle">
            Tarmac sits on top of what you already have. You keep your host, your commissions, your clients.
          </p>
          <div className="zap-agents-comparison-shell">
            <table className="zap-agents-comparison-table">
              <caption className="zap-agents-comparison-caption">
                How your day-to-day workflows compare with and without Tarmac.
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="zap-agents-comparison-th-workflow">
                    Workflow
                  </th>
                  <th scope="col" className="zap-agents-comparison-th-before">
                    <span className="zap-agents-comparison-th-title">Without Tarmac</span>
                    <span className="zap-agents-comparison-th-hint">Typical manual stack</span>
                  </th>
                  <th scope="col" className="zap-agents-comparison-th-after">
                    <span className="zap-agents-comparison-th-title">With Tarmac</span>
                    <span className="zap-agents-comparison-th-hint">Same host &amp; suppliers</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.area}>
                    <th scope="row" className="zap-agents-comparison-area">
                      {row.area}
                    </th>
                    <td className="zap-agents-comparison-before">{row.without}</td>
                    <td className="zap-agents-comparison-after">{row.with}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="zap-agents-comparison-footer app-type-caption">
            Works alongside any host agency. You keep 100% of your existing commission relationships.
          </p>
        </div>
      </section>

      {/* <section className="zap-agents-section zap-agents-section-muted">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">
            Built with advisors who&apos;ve been doing this for years.
          </h2>
          <div className="zap-agents-outcome-grid" style={{ marginTop: 28 }}>
            {TESTIMONIALS.map((t, ti) => (
              <article key={ti} className="zap-agents-outcome-card">
                <p style={{ fontStyle: "italic", margin: 0 }}>&ldquo;{t.quote}&rdquo;</p>
                <p className="app-type-body" style={{ marginTop: 16, fontWeight: 600 }}>
                  — {t.name}
                </p>
                <p className="app-type-caption" style={{ marginTop: 6 }}>
                  {t.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="zap-agents-cta">
        <div className="zap-agents-container zap-agents-cta-inner">
          <h2>Your first recovered commission pays for a year of Tarmac.</h2>
          <p>
            Join the waitlist. Early members get 3 months free and hands-on onboarding. No credit card — just your email.
          </p>
          <button type="button" onClick={openJoinWaitlist} className="zap-agents-btn-primary">
            Join the waitlist
          </button>
          <p className="app-type-caption" style={{ marginTop: 16 }}>
            Your data is yours · Works with any host · Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
