import { SITE_LINKS } from "../lib/siteLinks";

const capabilityCards = [
  {
    title: "Any AI, connected",
    body: "Use the AI itinerary builder with one governed workflow layer for your agency operations.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Agents that take action",
    body: "Route requests, build proposals, and keep itinerary quality consistent across your entire team.",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1400&q=80",
  },
];

const policyCards = [
  {
    title: "One planning layer",
    body: "Client context, supplier options, and trip structure in one place.",
  },
  {
    title: "One audit trail",
    body: "Track itinerary revisions and decisions across the team.",
  },
  {
    title: "One policy set",
    body: "Set process standards for output quality and approvals.",
  },
  {
    title: "One runtime",
    body: "Reliable generation workflows for day-by-day trip delivery.",
  },
];

const outcomes = [
  {
    title: "Client Onboarding Pack",
    body: "Collect traveler preferences and constraints in one guided flow.",
  },
  {
    title: "Renewal Risk Alerts",
    body: "Flag at-risk repeat clients and prompt proactive outreach.",
  },
  {
    title: "Deal Desk Approvals",
    body: "Route high-value proposal approvals quickly across your team.",
  },
  {
    title: "AI FAQ Assistant",
    body: "Answer internal process questions so agents move faster.",
  },
  {
    title: "Inbound Request Routing",
    body: "Classify and assign incoming travel requests automatically.",
  },
  {
    title: "Itinerary QA Checks",
    body: "Catch missing details before plans are shared with clients.",
  },
];

// const securityItems = [
//   { title: "SOC 2 (Type II)", body: "Enterprise-grade compliance" },
//   { title: "GDPR + CCPA", body: "Data privacy compliance" },
//   { title: "99.9% uptime", body: "Reliable service levels" },
//   { title: "SSO + provisioning", body: "SAML + SCIM ready" },
//   { title: "Model opt-out", body: "Enterprise safety controls" },
//   { title: "Observability", body: "End-to-end activity logs" },
// ];

export default function TravelAgentsLanding() {
  return (
    <div className="zap-agents-page">
      <section className="zap-agents-hero">
        <div className="zap-agents-container">
          <h1 className="zap-agents-hero-title">
            The <em>AI suite</em> built for travel agencies.
          </h1>
          <p className="zap-agents-hero-copy">
          Tools for modern travel agencies. <br></br> Your clients get polished plans fast so you can handle more clients.
          </p>
          <div className="zap-agents-hero-actions">
            <a href={SITE_LINKS.waitlistForm} target="_blank" rel="noreferrer" className="zap-agents-btn-primary">
              Join waitlist
            </a>
          </div>
        </div>
      </section>

      <section className="zap-agents-section">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title">Every team has AI. Now they need a system.</h2>
          <div className="zap-agents-feature-grid">
            {capabilityCards.map((card) => (
              <article key={card.title} className="zap-agents-feature-card">
                <span className="zap-agents-dot" />
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <img src={card.image} alt={card.title} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="zap-agents-section">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">
            AI that drives real outcomes
          </h2>
          <p className="zap-agents-section-subtitle">See what is possible when your itinerary workflow is connected.</p>
          <div className="zap-agents-outcome-grid">
            {outcomes.map((item) => (
              <article key={item.title} className="zap-agents-outcome-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="zap-agents-section zap-agents-section-muted zap-agents-section-policy-bento">
        <div className="zap-agents-container">
          <div className="zap-agents-policy-shell">
            <div className="zap-agents-policy-grid">
              {policyCards.map((item) => (
                <article key={item.title} className="zap-agents-policy-card">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
            <div className="zap-agents-policy-footer">
              <div className="zap-agents-policy-metric">
                <strong>66,000+</strong>
                <span>Travel actions and tasks</span>
              </div>
              <div className="zap-agents-policy-metric">
                <strong>9,000+</strong>
                <span>Integration-ready workflows</span>
              </div>
              <div className="zap-agents-policy-metric">
                <strong>1</strong>
                <span>System for your agency team</span>
              </div>
              <div className="zap-agents-policy-actions">
                <a href={SITE_LINKS.waitlistForm} target="_blank" rel="noreferrer" className="zap-agents-btn-primary">
                  Join waitlist for early access
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="zap-agents-section zap-agents-section-muted">
        <div className="zap-agents-container">
          <h2 className="zap-agents-section-title zap-agents-section-title-centered">
            Security built into every workflow
          </h2>
          <div className="zap-agents-security-row">
            {securityItems.map((item) => (
              <article key={item.title} className="zap-agents-security-card">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <section className="zap-agents-section">
        <div className="zap-agents-container zap-agents-split">
          <div className="zap-agents-split-copy">
            <h2 className="zap-agents-section-title">Give teams their own space</h2>
            <p>
              Each part of your agency can run approved workflows while leadership keeps full visibility and quality
              control.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1500&q=80"
            alt="Travel agency team collaboration dashboard"
            loading="lazy"
          />
        </div>
      </section>

      <section className="zap-agents-cta">
        <div className="zap-agents-container zap-agents-cta-inner">
          <h2>Go from AI experiments to real results.</h2>
          <p>Connect planning, standardize delivery, and grow your agency with AI itinerary workflows.</p>
          <a href={SITE_LINKS.waitlistForm} target="_blank" rel="noreferrer" className="zap-agents-btn-primary">
            Join waitlist
          </a>
        </div>
      </section>
    </div>
  );
}
