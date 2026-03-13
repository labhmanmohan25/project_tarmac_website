import { useState } from "react";

export default function PricingSection() {
  const [tripDays, setTripDays] = useState(8);
  const [expandedPlans, setExpandedPlans] = useState({
    payPerTrip: false,
    subscription: false,
  });

  const payPerTripMonthlyEstimate = tripDays;
  const subscriptionPrice = 15;
  const savings = Math.max(payPerTripMonthlyEstimate - subscriptionPrice, 0);

  const togglePlanDetails = (planKey) => {
    setExpandedPlans((prev) => ({
      ...prev,
      [planKey]: !prev[planKey],
    }));
  };

  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{ background: "#eeebe6", padding: "0 48px" }}
    >
      <div style={{ maxWidth: "1020px", margin: "0 auto" }}>
        <div
          className="pricing-heading"
          style={{ textAlign: "center", marginBottom: "26px" }}
        >
          <h2
            className="app-title-font app-type-heading"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#1c1c1e",
              marginBottom: "10px",
              fontStyle: "normal",
            }}
          >
            Crisp Pricing. Zero Confusion.
          </h2>
        </div>

        <div className="pricing-split">
          <article className="plan plan-light">
            <span className="vibe-badge">For occasional travelers</span>
            <p className="plan-eyebrow">Pay Per Trip</p>
            <div className="plan-price-wrap">
              <span className="plan-price">$1</span>
              <span className="plan-per">per trip day</span>
            </div>

            <p className="plan-copy">
              Automatically calculated from your synced trip calendar.
            </p>

            <div
              id="pay-per-trip-details"
              className={`plan-details ${expandedPlans.payPerTrip ? "expanded" : ""}`}
            >
              <div className="estimator">
                <div className="estimator-row">
                  <p>Trip days this month</p>
                  <strong>{tripDays} days</strong>
                </div>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={tripDays}
                  onChange={(event) => setTripDays(Number(event.target.value))}
                  aria-label="Estimated trip days this month"
                />
                <p className="estimate-total">
                  Estimated monthly cost: ${payPerTripMonthlyEstimate}
                </p>
              </div>
              <p className="plan-copy" style={{ marginTop: "10px" }}>
                New accounts get the first 2 trip days free on their first
                login.
              </p>
            </div>

            <button
              className="know-more-toggle"
              onClick={() => togglePlanDetails("payPerTrip")}
              aria-expanded={expandedPlans.payPerTrip}
              aria-controls="pay-per-trip-details"
              type="button"
            >
              {expandedPlans.payPerTrip ? "Show less" : "Know more"}
            </button>

            <button className="cta cta-dark">Choose Pay Per Trip</button>
          </article>

          <article className="plan plan-dark">
            <span className="best-badge">Best For Frequent Travelers</span>
            <p className="plan-eyebrow">Subscription</p>
            <div className="plan-price-wrap">
              <span className="plan-price">$15</span>
              <span className="plan-per">per month</span>
            </div>

            <p className="plan-copy">
              One predictable monthly plan for frequent travelers.
            </p>

            <div
              id="subscription-details"
              className={`plan-details ${expandedPlans.subscription ? "expanded" : ""}`}
            >
              <div className="value-box">
                <p>
                  At <strong>20 traveling days/month</strong>
                </p>
                <p>
                  Pay per trip: <strong>$20</strong>
                </p>
                <p>
                  Frequent Flyer: <strong>$15</strong>
                </p>
                <p className="save-line">You save $5/month with Frequent Flyer.</p>
                <p className="value-note">
                  With your current {tripDays} trip days, the saving is
                  <strong> ${savings}</strong> vs pay per trip.
                </p>
              </div>
            </div>

            <button
              className="know-more-toggle know-more-toggle-dark"
              onClick={() => togglePlanDetails("subscription")}
              aria-expanded={expandedPlans.subscription}
              aria-controls="subscription-details"
              type="button"
            >
              {expandedPlans.subscription ? "Show less" : "Know more"}
            </button>

            <button className="cta cta-light">Choose Subscription</button>
          </article>
        </div>
      </div>

      <style jsx>{`
        .pricing-split {
          display: grid;
          grid-template-columns: repeat(2, minmax(280px, 1fr));
          gap: 14px;
        }

        .plan {
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 16px 34px rgba(24, 58, 84, 0.08);
          border: 1px solid rgba(28, 28, 30, 0.1);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .plan-light {
          background: linear-gradient(150deg, #ffffff, #f3f7f8);
        }

        .plan-dark {
          background: linear-gradient(150deg, #1c1c1e, #262f34);
          color: #f5f7f8;
          border-color: rgba(255, 255, 255, 0.12);
        }

        .best-badge {
          display: inline-block;
          align-self: flex-start;
          width: fit-content;
          margin-bottom: 10px;
          border-radius: 999px;
          padding: 5px 11px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: "DM Sans", sans-serif;
          background: rgba(255, 255, 255, 0.14);
          color: #f8f8f8;
        }

        .vibe-badge {
          display: inline-block;
          align-self: flex-start;
          width: fit-content;
          margin-bottom: 10px;
          border-radius: 999px;
          padding: 5px 11px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-family: "DM Sans", sans-serif;
          background: rgba(28, 28, 30, 0.08);
          color: #1c1c1e;
          border: 1px solid rgba(28, 28, 30, 0.12);
        }

        .plan-eyebrow {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 700;
          font-family: "DM Sans", sans-serif;
          color: inherit;
          opacity: 0.72;
          margin: 0 0 10px;
        }

        .plan-price-wrap {
          display: flex;
          align-items: baseline;
          gap: 8px;
          margin-bottom: 10px;
        }

        .plan-price {
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 50px;
          line-height: 1;
          letter-spacing: -0.03em;
          font-weight: 800;
        }

        .plan-per {
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          opacity: 0.7;
        }

        .plan-copy {
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.45;
          margin: 0 0 16px;
          opacity: 0.9;
        }

        .estimator {
          border: 1px solid rgba(28, 28, 30, 0.12);
          background: rgba(255, 255, 255, 0.86);
          border-radius: 14px;
          padding: 12px;
          margin-bottom: 16px;
        }

        .estimator-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          color: #5a666d;
        }

        .estimator-row strong {
          color: #1c1c1e;
          font-size: 12px;
        }

        input[type="range"] {
          width: 100%;
          accent-color: #1c1c1e;
        }

        .estimate-total {
          margin: 8px 0 0;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #1c1c1e;
        }

        .value-box {
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 14px;
          padding: 12px;
          background: rgba(255, 255, 255, 0.06);
          margin-bottom: 16px;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          line-height: 1.45;
        }

        .value-box p {
          margin: 0 0 6px;
        }

        .value-box p:last-child {
          margin-bottom: 0;
        }

        .save-line {
          margin-top: 8px !important;
          color: #d6f8dd;
          font-weight: 700;
        }

        .value-note {
          margin-top: 8px !important;
          opacity: 0.85;
        }

        .know-more-toggle {
          display: none;
          border: none;
          background: transparent;
          color: #1c1c1e;
          border-radius: 0;
          padding: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: underline;
          text-underline-offset: 2px;
          width: fit-content;
          margin: -4px 0 12px;
          cursor: pointer;
        }

        .know-more-toggle-dark {
          color: #f5f7f8;
        }

        .cta {
          width: 100%;
          border: none;
          border-radius: 999px;
          padding: 13px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          margin-top: auto;
        }

        .cta-dark {
          background: #1c1c1e;
          color: white;
        }

        .cta-light {
          background: #ffffff;
          color: #1c1c1e;
        }

        @media (max-width: 900px) {
          .pricing-split {
            grid-template-columns: 1fr;
          }

          .plan-dark {
            order: -1;
          }
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 0 16px !important;
          }

          .pricing-heading {
            margin-bottom: 18px !important;
          }

          .plan {
            border-radius: 18px;
            padding: 14px;
          }

          .plan-price {
            font-size: 36px;
          }

          .plan-copy {
            font-size: 13px;
            margin-bottom: 12px;
          }

          .plan-details {
            overflow: hidden;
            max-height: 0;
            opacity: 0;
            transition:
              max-height 0.3s ease,
              opacity 0.25s ease;
          }

          .plan-details.expanded {
            max-height: 320px;
            opacity: 1;
          }

          .know-more-toggle {
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }
        }

        @media (min-width: 769px) {
          .plan-details {
            max-height: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
