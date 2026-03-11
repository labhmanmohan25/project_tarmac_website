import PhaseCarousel from "./PhaseCarousel";
import SectionLabel from "./SectionLabel";

const reviews = [
  {
    name: "Sarah M.",
    location: "New York, USA",
    rating: 5,
    text: "Tarmac completely transformed our Japan trip. When our flight was delayed, it automatically rerouted us and rebooked our dinner reservation. Incredible.",
    color: "#F97316",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
    background: "#fff3e7",
    initials: "SM",
  },
  {
    name: "David K.",
    location: "London, UK",
    rating: 5,
    text: "Finally an app that handles group travel properly. The expense splitting alone saved us three awkward money conversations. The itinerary AI is genuinely brilliant.",
    color: "#6366f1",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80",
    background: "#23405f",
    initials: "DK",
    featured: true,
  },
  {
    name: "Priya L.",
    location: "Singapore",
    rating: 5,
    text: "Planned our Morocco trip in 10 minutes. It understood our group's vibe from our chat history and built something better than any travel agent ever has.",
    color: "#10b981",
    image:
      "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=1200&q=80",
    background: "#eef8f1",
    initials: "PL",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="reviews-section"
      style={{ background: "#f4eadc", padding: "108px 48px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="reviews-heading"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "28px",
            marginBottom: "56px",
          }}
        >
          <div style={{ maxWidth: "560px" }}>
            <h2
              className="app-title-font"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: "800",
                color: "#1c1c1e",
                lineHeight: 1,
                letterSpacing: "-0.025em",
              }}
            >
              Loved by Explorers
              <br />
              <span
                className="app-title-font"
                style={{
                  fontStyle: "italic",
                  fontWeight: "600",
                  fontSize: "0.9em",
                  color: "#b45f2a",
                }}
              >
                Around the World
              </span>
            </h2>
            <p
              className="app-subheading-font"
              style={{
                fontSize: "15px",
                color: "#6e6256",
                lineHeight: 1.7,
                marginTop: "18px",
              }}
            >
              Traveler stories should feel as alive as the destinations above,
              so this section now carries warmer color and real trip imagery.
            </p>
          </div>

          <div
            className="reviews-snapshots"
            style={{ display: "flex", gap: "14px" }}
          >
            {reviews.slice(0, 2).map((rev, index) => (
              <div
                key={rev.name}
                style={{
                  width: index === 0 ? "160px" : "120px",
                  height: index === 0 ? "180px" : "140px",
                  borderRadius: "22px",
                  backgroundImage: `url(${rev.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  boxShadow: "0 18px 34px rgba(55,36,20,0.16)",
                  border: "4px solid rgba(255,255,255,0.7)",
                  transform: index === 0 ? "rotate(-4deg)" : "translateY(24px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="reviews-desktop">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: "20px",
            }}
          >
            {reviews.map((rev) => (
              <div
                key={rev.name}
                style={{
                  background: rev.background,
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: rev.featured
                    ? "1px solid rgba(35,64,95,0.25)"
                    : "1px solid rgba(126,106,86,0.12)",
                  boxShadow: "0 12px 30px rgba(55,36,20,0.08)",
                }}
              >
                <div
                  style={{
                    height: rev.featured ? "190px" : "150px",
                    backgroundImage: `url(${rev.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: "28px 28px 32px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      marginBottom: "18px",
                    }}
                  >
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <svg
                        key={i}
                        width="14"
                        height="14"
                        fill="#F97316"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: "14px",
                      color: rev.featured
                        ? "rgba(255,255,255,0.84)"
                        : "#584a3d",
                      lineHeight: 1.75,
                      marginBottom: "22px",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    &ldquo;{rev.text}&rdquo;
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: rev.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "13px",
                        fontWeight: "700",
                        fontFamily: '"DM Sans", sans-serif',
                        flexShrink: 0,
                      }}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "600",
                          color: rev.featured ? "white" : "#1c1c1e",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {rev.name}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: rev.featured
                            ? "rgba(255,255,255,0.56)"
                            : "#9b8d7f",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {rev.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-mobile">
          <PhaseCarousel
            slides={reviews}
            cardWidth={300}
            cardGap={12}
            autoplay={true}
            autoplaySpeed={2800}
            showDots={false}
            showArrows={false}
            pauseOnHover={true}
            minHeight="auto"
            renderCard={(rev) => (
              <div
                style={{
                  background: rev.background,
                  borderRadius: "20px",
                  overflow: "hidden",
                  border: rev.featured
                    ? "1px solid rgba(35,64,95,0.25)"
                    : "1px solid rgba(126,106,86,0.12)",
                  boxShadow: "0 12px 30px rgba(55,36,20,0.08)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "130px",
                    backgroundImage: `url(${rev.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "3px",
                      marginBottom: "14px",
                    }}
                  >
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <svg
                        key={i}
                        width="12"
                        height="12"
                        fill="#F97316"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      color: rev.featured
                        ? "rgba(255,255,255,0.84)"
                        : "#584a3d",
                      lineHeight: 1.6,
                      marginBottom: "16px",
                      fontFamily: '"DM Sans", sans-serif',
                      flex: 1,
                    }}
                  >
                    &ldquo;{rev.text}&rdquo;
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: rev.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "11px",
                        fontWeight: "700",
                        fontFamily: '"DM Sans", sans-serif',
                        flexShrink: 0,
                      }}
                    >
                      {rev.initials}
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: rev.featured ? "white" : "#1c1c1e",
                          fontFamily: '"DM Sans", sans-serif',
                          margin: 0,
                        }}
                      >
                        {rev.name}
                      </p>
                      <p
                        style={{
                          fontSize: "10px",
                          color: rev.featured
                            ? "rgba(255,255,255,0.56)"
                            : "#9b8d7f",
                          fontFamily: '"DM Sans", sans-serif',
                          margin: 0,
                        }}
                      >
                        {rev.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .reviews-section {
            padding: 72px 16px !important;
          }

          .reviews-heading {
            display: block !important;
          }

          .reviews-snapshots {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
