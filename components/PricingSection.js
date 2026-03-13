import { useState } from "react";
import PhaseCarousel from "./PhaseCarousel";

const pricingTiers = [
  {
    name: "7-Day Pass",
    basePrice: 7,
    baseDays: 7,
    per: "per pass",
    accent: "#1c1c1e",
    cardBackground: "#ffffff",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    desc: "Best for short escapes and focused trips up to one week.",
    dark: false,
  },
  {
    name: "15-Day Pass",
    basePrice: 15,
    baseDays: 15,
    per: "per pass",
    accent: "#ffffff",
    cardBackground: "#1c1c1e",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=1200&q=80",
    desc: "Built for longer vacations with room for changes on the go.",
    dark: true,
    badge: "Most Popular",
  },
  {
    name: "30-Day Pass",
    basePrice: 30,
    baseDays: 30,
    per: "per pass",
    accent: "#1c1c1e",
    cardBackground: "#ffffff",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    desc: "Ideal for extended journeys and multi-city adventures.",
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
      style={{ background: "#eeebe6", padding: "108px 48px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="pricing-heading" style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2
            className="app-title-font app-type-heading"
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              color: "#1c1c1e",
              marginBottom: "16px",
            }}
          >
            Simple, Per-Trip Pricing
          </h2>
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
                    height: "110px",
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
                      background: "#1c1c1e",
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
                <div style={{ padding: "22px" }}>
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
                        fontSize: "42px",
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
                      marginBottom: "12px",
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
                    className="app-type-body"
                    style={{
                      color: tier.dark ? "rgba(255,255,255,0.76)" : "#5f6b73",
                      marginBottom: "10px",
                    }}
                  >
                    {tier.desc}
                  </p>

                  <p
                    style={{
                      margin: "0 0 14px",
                      fontSize: "12px",
                      fontWeight: "600",
                      color: tier.dark ? "rgba(255,255,255,0.86)" : "#405058",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    Includes all AI travel planning features.
                  </p>

                  <p
                    style={{
                      margin: "0 0 16px",
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: "13px",
                      fontWeight: "700",
                      color: tier.dark ? "#f8f8f8" : tier.accent,
                    }}
                  >
                    Total: ${totalPrice}
                  </p>

                  <button
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "100px",
                      background: tier.dark ? "white" : "#1c1c1e",
                      color: tier.dark ? "#1c1c1e" : "white",
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
            pauseOnHover={false}
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
                      height: "92px",
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
                        background: "#1c1c1e",
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
                      className="app-type-body"
                      style={{
                        color: tier.dark ? "rgba(255,255,255,0.76)" : "#5f6b73",
                        marginBottom: "8px",
                      }}
                    >
                      {tier.desc}
                    </p>

                    <p
                      style={{
                        margin: "0 0 10px",
                        fontSize: "11px",
                        fontWeight: "600",
                        color: tier.dark ? "rgba(255,255,255,0.84)" : "#405058",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      Includes all AI travel planning features.
                    </p>

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
                        background: tier.dark ? "white" : "#1c1c1e",
                        color: tier.dark ? "#1c1c1e" : "white",
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

      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .pricing-section {
            padding: 0 16px 48px !important;
          }

          .pricing-heading {
            margin-bottom: 20px !important;
          }

          .pricing-mobile {
            padding: 0 !important;
          }

          .pricing-mobile :global(.slick-list) {
            padding-top: 0 !important;
            padding-bottom: 16px !important;
          }

        }
      `}</style>
    </section>
  );
}
