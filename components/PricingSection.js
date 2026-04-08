export default function PricingSection() {
  const plans = [
    {
      badge: "Trip Pricing",
      badgeType: "vibe",
      eyebrow: "Per Trip",
      price: "7 / 15 / 30 Days",
      per: "$10 / $20 / $30",
      copy: "Simple fixed pricing based on total trip length.",
      rows: [
        { label: "7-Day Trip", value: "$10" },
        { label: "15-Day Trip", value: "$20" },
        { label: "30-Day Trip", value: "$30" },
      ],
      cardStyle: "plan-light",
    },
    {
      badge: "Frequent Traveller",
      badgeType: "best",
      eyebrow: "Subscription",
      price: "$20",
      per: "per month",
      copy: "For regular travelers who want one predictable monthly plan.",
      rows: [{ label: "Minimum Commitment", value: "2 months" }],
      cardStyle: "plan-dark",
    },
  ];

  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{ background: "#eeebe6", padding: "0 48px 56px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
          {plans.map((plan) => (
            <article key={plan.eyebrow} className={`plan ${plan.cardStyle}`}>
              <span className={plan.badgeType === "best" ? "best-badge" : "vibe-badge"}>
                {plan.badge}
              </span>
              <p className="plan-eyebrow">{plan.eyebrow}</p>
              <div className="plan-price-wrap">
                <span className="plan-price">{plan.price}</span>
                <span className="plan-per">{plan.per}</span>
              </div>
              <p className="plan-copy">{plan.copy}</p>
              <div className="plan-rows">
                {plan.rows.map((row) => (
                  <div className="plan-row" key={row.label}>
                    <span className="plan-row-label">{row.label}</span>
                    <span className="plan-row-value">{row.value}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
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
          font-size: 44px;
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

        .plan-rows {
          margin-top: auto;
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(28, 28, 30, 0.12);
          background: rgba(255, 255, 255, 0.72);
        }

        .plan-dark .plan-rows {
          border-color: rgba(255, 255, 255, 0.16);
          background: rgba(255, 255, 255, 0.06);
        }

        .plan-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .plan-row-label {
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          opacity: 0.7;
        }

        .plan-row-value {
          font-family: "DM Sans", sans-serif;
          font-size: 13px;
          font-weight: 700;
          opacity: 0.9;
        }

        @media (max-width: 900px) {
          .pricing-split {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .pricing-section {
            padding: 0 16px 40px !important;
          }

          .pricing-heading {
            margin-bottom: 18px !important;
          }

          .plan {
            border-radius: 18px;
            padding: 14px;
          }

          .plan-price {
            font-size: 34px;
          }

          .plan-copy {
            font-size: 13px;
            margin-bottom: 12px;
          }
        }
      `}</style>
    </section>
  );
}
