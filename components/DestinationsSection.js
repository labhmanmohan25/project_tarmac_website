import PhaseCarousel from "./PhaseCarousel";
import SectionLabel from "./SectionLabel";

const destCards = [
  {
    name: "Thailand",
    country: "Southeast Asia",
    price: "$1,799",
    days: "9",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description:
      "Experience vibrant culture, pristine beaches, and legendary temples in this Southeast Asian paradise. From Bangkok's bustling streets to Phuket's turquoise waters, Thailand offers unforgettable experiences at incredible value.",
    shortDescription: "Temples, beaches & vibrant culture",
  },
  {
    name: "Kyoto",
    country: "Japan",
    price: "$2,340",
    days: "7",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    shortDescription: "Ancient temples & lush gardens",
  },
  {
    name: "Santorini",
    country: "Greece",
    price: "$2,199",
    days: "6",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    shortDescription: "Sunset views & white cliffs",
  },
  {
    name: "Morocco",
    country: "Marrakech",
    price: "$1,450",
    days: "7",
    image:
      "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80",
    shortDescription: "Desert, souks & Sahara magic",
  },
  {
    name: "New Zealand",
    country: "South Island",
    price: "$2,899",
    days: "10",
    image:
      "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&q=80",
    shortDescription: "Mountains, fjords & adventure",
  },
  {
    name: "Amalfi",
    country: "Italy",
    price: "$1,899",
    days: "6",
    image:
      "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=800&q=80",
    shortDescription: "Coastal charm & Italian cuisine",
  },
];

export default function DestinationsSection() {
  return (
    <section
      id="destinations"
      className="destinations-section"
      style={{ background: "#eeebe6", padding: "108px 48px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          className="destinations-heading"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <h2
              className="app-title-font app-type-heading"
              style={{
                fontSize: "clamp(36px, 4vw, 54px)",
                color: "#1c1c1e",
              }}
            >
              Where Will You
              <br />
              Go Next?
            </h2>
          </div>
          <p
            className="app-subheading-font app-type-subheading"
            style={{
              color: "#888",
              maxWidth: "280px",
              fontSize: "clamp(12px, 1.1vw, 16px)",
              fontStyle: "italic",
            }}
          >
            destinations curated by our AI — each with a detailed,
            personalized itinerary built just for your group.
          </p>
        </div>

        <div className="destinations-desktop">
          <div className="destinations-grid">
            {destCards.map((card, idx) => (
              <div
                key={card.name}
                className={`dest-card-light ${idx === 0 ? "dest-card-featured" : ""}`}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                }}
              >
                <div
                  className={
                    idx === 0 ? "dest-card-image" : "dest-card-image-regular"
                  }
                  style={{
                    backgroundImage: `url(${card.image})`,
                  }}
                >
                  {idx === 0 && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "0",
                        right: "0",
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                        padding: "24px 18px 16px",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: '"Bricolage Grotesque", sans-serif',
                          fontSize: "22px",
                          fontWeight: "800",
                          color: "white",
                        }}
                      >
                        {card.name}
                      </p>
                      <p
                        style={{
                          fontFamily: '"DM Sans", sans-serif',
                          fontSize: "12px",
                          color: "rgba(255,255,255,0.75)",
                        }}
                      >
                        {card.country}
                      </p>
                    </div>
                  )}
                </div>
                <div
                  style={{
                    padding: idx === 0 ? "16px 18px 20px" : "13px 16px 16px",
                  }}
                >
                  {idx === 0 && (
                    <div className="dest-card-short-description">
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#1c1c1e",
                          marginBottom: "4px",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {card.name}{" "}
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "400",
                            color: "#999",
                          }}
                        >
                          · {card.country}
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#888",
                          marginBottom: "8px",
                          fontFamily: '"DM Sans", sans-serif',
                          lineHeight: "1.3",
                        }}
                      >
                        {card.shortDescription}
                      </p>
                    </div>
                  )}

                  {idx !== 0 && (
                    <div>
                      <p
                        style={{
                          fontSize: "15px",
                          fontWeight: "700",
                          color: "#1c1c1e",
                          marginBottom: "4px",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        {card.name}{" "}
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "400",
                            color: "#999",
                          }}
                        >
                          · {card.country}
                        </span>
                      </p>
                      <p
                        style={{
                          fontSize: "12px",
                          color: "#888",
                          marginBottom: "8px",
                          fontFamily: '"DM Sans", sans-serif',
                          lineHeight: "1.3",
                        }}
                      >
                        {card.shortDescription}
                      </p>
                    </div>
                  )}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: idx === 0 ? 0 : "4px",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "#bbb",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        From · {card.days} days
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "800",
                          color: "#1c1c1e",
                          fontFamily: '"Bricolage Grotesque", sans-serif',
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {card.price}
                      </p>
                    </div>
                  </div>
                  {idx === 0 && (
                    <p
                      className="dest-card-full-description app-type-body"
                      style={{
                        color: "#666",
                        marginTop: "16px",
                      }}
                    >
                      {card.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="destinations-mobile">
          <PhaseCarousel
            slides={destCards}
            cardWidth={280}
            cardGap={12}
            autoplay={true}
            autoplaySpeed={2500}
            showDots={false}
            showArrows={false}
            pauseOnHover={true}
            minHeight="auto"
            renderCard={(card) => (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: "white",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    height: "160px",
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div
                  style={{
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    flex: 1,
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#1c1c1e",
                        marginBottom: "2px",
                        fontFamily: '"DM Sans", sans-serif',
                      }}
                    >
                      {card.name}{" "}
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "400",
                          color: "#999",
                        }}
                      >
                        · {card.country}
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "11px",
                        color: "#888",
                        fontFamily: '"DM Sans", sans-serif',
                        lineHeight: "1.3",
                      }}
                    >
                      {card.shortDescription}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: "12px",
                      borderTop: "1px solid #f0ede8",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: "9px",
                          color: "#bbb",
                          fontFamily: '"DM Sans", sans-serif',
                        }}
                      >
                        From · {card.days} days
                      </p>
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: "800",
                          color: "#1c1c1e",
                          fontFamily: '"Bricolage Grotesque", sans-serif',
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {card.price}
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
          .destinations-section {
            padding: 72px 16px !important;
          }

          .destinations-heading {
            margin-bottom: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
