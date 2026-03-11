import { useState } from "react";
import PhaseCarousel from "./PhaseCarousel";
import SectionLabel from "./SectionLabel";

const pricingTiers = [
  {
    name: "7-Day Pass",
    basePrice: 7,
    baseDays: 7,
    per: "per pass",
    accent: "#d46e2c",
    cardBackground: "#fff6eb",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    desc: "Best for short escapes and focused trips up to one week.",
    features: [
      "Full trip planning",
      "AI itinerary planning",
      "All AI travel features",
      "Real-time alerts",
      "Group coordination",
    ],
    dark: false,
  },
  {
    name: "15-Day Pass",
    basePrice: 15,
    baseDays: 15,
    per: "per pass",
    accent: "#ffd36f",
    cardBackground: "#214a66",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
    desc: "Built for longer vacations with room for changes on the go.",
    features: [
      "Full trip planning",
      "AI itinerary planning",
      "All AI travel features",
      "Real-time alerts",
      "Priority replanning",
    ],
    dark: true,
    badge: "Most Popular",
  },
  {
    name: "30-Day Pass",
    basePrice: 30,
    baseDays: 30,
    per: "per pass",
    accent: "#258b67",
    cardBackground: "#edf7ef",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    desc: "Ideal for extended journeys and multi-city adventures.",
    features: [
      "Full trip planning",
      "AI itinerary planning",
      "All AI travel features",
      "Real-time alerts",
      "Advanced multi-city planning",
    ],
    dark: false,
  },
];

export default function PricingSection() {
  const [additionalDaysByPlan, setAdditionalDaysByPlan] = useState({
    "7-Day Pass": 0,
    "15-Day Pass": 0,
    "30-Day Pass": 0,
  });

  return (
    <section
      id="pricing"
      className="pricing-section"
      style={{ background: "#dbe7ee", padding: "108px 48px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            className="app-title-font"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: "800",
              color: "#1c1c1e",
              lineHeight: 1,
              letterSpacing: "-0.025em",
              marginBottom: "16px",
            }}
          >
            Simple, Per-Trip Pricing
          </h2>
          <p
            className="app-subheading-font"
            style={{
              fontSize: "15px",
              color: "#5d6971",
              maxWidth: "460px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Choose a travel pass based on your trip length. All passes include
            full planning and all AI features.
          </p>
        </div>

        <div
          className="pricing-desktop"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "16px",
          }}
        >
          {pricingTiers.map((tier) => {
            const additionalDays = additionalDaysByPlan[tier.name] ?? 0;
            const totalPrice = tier.basePrice + additionalDays;

            return (
              <div
                key={tier.name}
                style={{
                  background: tier.cardBackground,
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: tier.dark
                    ? "1px solid rgba(24,58,84,0.16)"
                    : "1px solid rgba(93,105,113,0.12)",
                  boxShadow: "0 14px 32px rgba(24,58,84,0.09)",
                  position: "relative",
                  transform: tier.dark ? "scale(1.02)" : "none",
                }}
              >
                <div
                  style={{
                    height: "148px",
                    backgroundImage: `url(${tier.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {tier.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#f97316",
                      color: "white",
                      borderRadius: "100px",
                      padding: "5px 16px",
                      fontSize: "11px",
                      fontWeight: "700",
                      fontFamily: '"DM Sans", sans-serif',
                      whiteSpace: "nowrap",
                    }}
                  >
                    {tier.badge}
                  </div>
                )}
                <div style={{ padding: "30px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: "600",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: tier.dark ? "rgba(255,255,255,0.62)" : "#7b868d",
                      marginBottom: "10px",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {tier.name}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "6px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Bricolage Grotesque", sans-serif',
                        fontSize: "48px",
                        fontWeight: "800",
                        color: tier.dark ? "white" : tier.accent,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      ${tier.basePrice}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: tier.dark ? "rgba(255,255,255,0.62)" : "#7b868d",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {tier.per}
                    </span>
                  </div>

                  <div
                    style={{
                      border: tier.dark
                        ? "1px solid rgba(255,255,255,0.14)"
                        : "1px solid rgba(93,105,113,0.14)",
                      borderRadius: "14px",
                      padding: "12px",
                      marginBottom: "14px",
                      background: tier.dark
                        ? "rgba(255,255,255,0.06)"
                        : "#ffffff",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 8px",
                        fontSize: "12px",
                        color: tier.dark ? "rgba(255,255,255,0.72)" : "#64727a",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      Add additional days ($1/day)
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <button
                          onClick={() =>
                            setAdditionalDaysByPlan((prev) => ({
                              ...prev,
                              [tier.name]: Math.max(
                                0,
                                (prev[tier.name] ?? 0) - 1,
                              ),
                            }))
                          }
                          aria-label={`Decrease additional days for ${tier.name}`}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "999px",
                            border: tier.dark
                              ? "1px solid rgba(255,255,255,0.25)"
                              : "1px solid rgba(93,105,113,0.18)",
                            background: tier.dark ? "transparent" : "#f9fbfc",
                            color: tier.dark ? "white" : tier.accent,
                            cursor: "pointer",
                            fontSize: "18px",
                            lineHeight: 1,
                          }}
                        >
                          -
                        </button>
                        <span
                          style={{
                            minWidth: "28px",
                            textAlign: "center",
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: "14px",
                            fontWeight: "600",
                            color: tier.dark ? "white" : "#1c1c1e",
                          }}
                        >
                          {additionalDays}
                        </span>
                        <button
                          onClick={() =>
                            setAdditionalDaysByPlan((prev) => ({
                              ...prev,
                              [tier.name]: Math.min(
                                30,
                                (prev[tier.name] ?? 0) + 1,
                              ),
                            }))
                          }
                          aria-label={`Increase additional days for ${tier.name}`}
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "999px",
                            border: tier.dark
                              ? "1px solid rgba(255,255,255,0.25)"
                              : "1px solid rgba(93,105,113,0.18)",
                            background: tier.dark ? "transparent" : "#f9fbfc",
                            color: tier.dark ? "white" : tier.accent,
                            cursor: "pointer",
                            fontSize: "18px",
                            lineHeight: 1,
                          }}
                        >
                          +
                        </button>
                      </div>

                      <span
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: "12px",
                          color: tier.dark
                            ? "rgba(255,255,255,0.72)"
                            : "#64727a",
                        }}
                      >
                        Total days: {tier.baseDays + additionalDays}
                      </span>
                    </div>
                  </div>

                  <p
                    style={{
                      margin: "0 0 12px",
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "13px",
                      fontWeight: "700",
                      color: tier.dark ? "#f8f8f8" : tier.accent,
                    }}
                  >
                    Total: ${totalPrice}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: tier.dark ? "rgba(255,255,255,0.76)" : "#5f6b73",
                      lineHeight: 1.6,
                      marginBottom: "24px",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {tier.desc}
                  </p>

                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 28px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    {tier.features.map((feat) => (
                      <li
                        key={feat}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          fontSize: "13px",
                          color: tier.dark
                            ? "rgba(255,255,255,0.84)"
                            : "#405058",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        <svg
                          width="14"
                          height="14"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke={tier.dark ? "#ffd36f" : tier.accent}
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          />
                        </svg>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "100px",
                      background: tier.dark ? "#ffd36f" : tier.accent,
                      color: tier.dark ? "#1f3551" : "white",
                      border: "none",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      fontFamily: '"DM Sans", sans-serif',
                      transition: "opacity 0.2s",
                    }}
                  >
                    {additionalDays > 0
                      ? `Choose ${tier.baseDays}-Day + ${additionalDays} Day${additionalDays === 1 ? "" : "s"}`
                      : `Choose ${tier.baseDays}-Day`}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pricing-mobile">
          <PhaseCarousel
            slides={pricingTiers}
            cardWidth={280}
            cardGap={12}
            autoplay={false}
            showDots={false}
            showArrows={false}
            pauseOnHover={true}
            infinite={false}
            initialSlide={1}
            minHeight="auto"
            renderCard={(tier) => {
              const additionalDays = additionalDaysByPlan[tier.name] ?? 0;
              const totalPrice = tier.basePrice + additionalDays;

              return (
                <div
                  style={{
                    background: tier.cardBackground,
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: tier.dark
                      ? "1px solid rgba(24,58,84,0.16)"
                      : "1px solid rgba(93,105,113,0.12)",
                    boxShadow: "0 14px 32px rgba(24,58,84,0.09)",
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "112px",
                      backgroundImage: `url(${tier.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  {tier.badge && (
                    <div
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: "#F97316",
                        color: "white",
                        borderRadius: "100px",
                        padding: "4px 12px",
                        fontSize: "10px",
                        fontWeight: "700",
                        fontFamily: '"DM Sans", sans-serif',
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tier.badge}
                    </div>
                  )}
                  <div style={{ padding: "20px 18px 24px" }}>
                    <p
                      style={{
                        fontSize: "10px",
                        fontWeight: "600",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: tier.dark ? "rgba(255,255,255,0.62)" : "#7b868d",
                        marginBottom: "8px",
                        fontFamily: '"DM Sans", sans-serif',
                        marginTop: tier.badge ? "8px" : 0,
                      }}
                    >
                      {tier.name}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "4px",
                        marginBottom: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: '"Bricolage Grotesque", sans-serif',
                          fontSize: "36px",
                          fontWeight: "800",
                          color: tier.dark ? "white" : tier.accent,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        ${tier.basePrice}
                      </span>
                      <span
                        style={{
                          fontSize: "11px",
                          color: tier.dark
                            ? "rgba(255,255,255,0.62)"
                            : "#7b868d",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {tier.per}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "12px",
                        color: tier.dark ? "rgba(255,255,255,0.76)" : "#5f6b73",
                        lineHeight: 1.5,
                        marginBottom: "12px",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {tier.desc}
                    </p>

                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 14px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        flex: 1,
                      }}
                    >
                      {tier.features.slice(0, 3).map((feat) => (
                        <li
                          key={feat}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "11px",
                            color: tier.dark
                              ? "rgba(255,255,255,0.84)"
                              : "#405058",
                            fontFamily: '"DM Sans", sans-serif',
                          }}
                        >
                          <svg
                            width="11"
                            height="11"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke={tier.dark ? "#ffd36f" : tier.accent}
                            strokeWidth={2.5}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div
                      style={{
                        border: tier.dark
                          ? "1px solid rgba(255,255,255,0.14)"
                          : "1px solid rgba(93,105,113,0.14)",
                        borderRadius: "10px",
                        padding: "10px",
                        marginBottom: "12px",
                        background: tier.dark
                          ? "rgba(255,255,255,0.06)"
                          : "#ffffff",
                      }}
                    >
                      <p
                        style={{
                          margin: "0 0 6px",
                          fontSize: "10px",
                          color: tier.dark
                            ? "rgba(255,255,255,0.72)"
                            : "#64727a",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        Add days ($1/day)
                      </p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <button
                            onClick={() =>
                              setAdditionalDaysByPlan((prev) => ({
                                ...prev,
                                [tier.name]: Math.max(
                                  0,
                                  (prev[tier.name] ?? 0) - 1,
                                ),
                              }))
                            }
                            aria-label={`Decrease additional days for ${tier.name}`}
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "999px",
                              border: tier.dark
                                ? "1px solid rgba(255,255,255,0.25)"
                                : "1px solid rgba(93,105,113,0.18)",
                              background: tier.dark ? "transparent" : "#f9fbfc",
                              color: tier.dark ? "white" : tier.accent,
                              cursor: "pointer",
                              fontSize: "14px",
                              lineHeight: 1,
                            }}
                          >
                            -
                          </button>
                          <span
                            style={{
                              minWidth: "24px",
                              textAlign: "center",
                              fontFamily: '"DM Sans", sans-serif',
                              fontSize: "12px",
                              fontWeight: "600",
                              color: tier.dark ? "white" : "#1c1c1e",
                            }}
                          >
                            {additionalDays}
                          </span>
                          <button
                            onClick={() =>
                              setAdditionalDaysByPlan((prev) => ({
                                ...prev,
                                [tier.name]: Math.min(
                                  30,
                                  (prev[tier.name] ?? 0) + 1,
                                ),
                              }))
                            }
                            aria-label={`Increase additional days for ${tier.name}`}
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "999px",
                              border: tier.dark
                                ? "1px solid rgba(255,255,255,0.25)"
                                : "1px solid rgba(93,105,113,0.18)",
                              background: tier.dark ? "transparent" : "#f9fbfc",
                              color: tier.dark ? "white" : tier.accent,
                              cursor: "pointer",
                              fontSize: "14px",
                              lineHeight: 1,
                            }}
                          >
                            +
                          </button>
                        </div>

                        <span
                          style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: "10px",
                            color: tier.dark
                              ? "rgba(255,255,255,0.72)"
                              : "#64727a",
                          }}
                        >
                          {tier.baseDays + additionalDays}d
                        </span>
                      </div>
                    </div>

                    <p
                      style={{
                        margin: "0 0 12px",
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: "12px",
                        fontWeight: "700",
                        color: tier.dark ? "#f8f8f8" : tier.accent,
                      }}
                    >
                      Total: ${totalPrice}
                    </p>

                    <button
                      style={{
                        width: "100%",
                        padding: "10px",
                        borderRadius: "100px",
                        background: tier.dark ? "#ffd36f" : tier.accent,
                        color: tier.dark ? "#1f3551" : "white",
                        border: "none",
                        fontSize: "12px",
                        fontWeight: "600",
                        cursor: "pointer",
                        fontFamily: '"DM Sans", sans-serif',
                        transition: "opacity 0.2s",
                      }}
                    >
                      {additionalDays > 0
                        ? `Choose +${additionalDays}d`
                        : "Choose"}
                    </button>
                  </div>
                </div>
              );
            }}
          />
        </div>

        <div
          className="pricing-enterprise"
          style={{
            marginTop: "20px",
            borderRadius: "24px",
            padding: "24px",
            background: "#fff7ee",
            boxShadow: "0 14px 32px rgba(24,58,84,0.08)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "14px",
          }}
        >
          <div style={{ flex: "1 1 280px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#a56c43",
                marginBottom: "8px",
                fontFamily: '"DM Sans", sans-serif',
              }}
            >
              Enterprise Plan
            </p>
            <h3
              style={{
                margin: 0,
                color: "#1c1c1e",
                fontFamily: '"Bricolage Grotesque", sans-serif',
                fontSize: "clamp(24px, 2.8vw, 34px)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Coming Soon
            </h3>
            <p
              style={{
                margin: "10px 0 0",
                color: "#66615a",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "14px",
              }}
            >
              Custom pricing, controls, and support for travel teams and
              organizations.
            </p>
          </div>

          <span
            style={{
              background: "#F97316",
              color: "white",
              borderRadius: "999px",
              padding: "10px 16px",
              fontSize: "12px",
              fontWeight: "700",
              fontFamily: '"DM Sans", sans-serif',
              whiteSpace: "nowrap",
            }}
          >
            Join Enterprise Waitlist
          </span>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-section {
            padding: 72px 16px !important;
          }

          .pricing-mobile {
            padding: 12px 0 16px !important;
          }

          .pricing-mobile :global(.slick-list) {
            padding-top: 12px !important;
            padding-bottom: 16px !important;
          }

          .pricing-enterprise {
            padding: 22px 18px !important;
            border-radius: 16px !important;
            margin-top: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
