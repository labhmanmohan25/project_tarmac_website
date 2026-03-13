import { useEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    location: "New York, USA",
    rating: 5,
    text: "Tarmac completely transformed our Japan trip. When our flight was delayed, it automatically rerouted us and rebooked our dinner reservation. Incredible.",
    color: "#1c1c1e",
    background: "#ffffff",
    initials: "SM",
  },
  {
    name: "David K.",
    location: "London, UK",
    rating: 5,
    text: "Finally an app that handles group travel properly. The expense splitting alone saved us three awkward money conversations. The itinerary AI is genuinely brilliant.",
    color: "#ffffff",
    background: "#1c1c1e",
    initials: "DK",
    featured: true,
  },
  {
    name: "Priya L.",
    location: "Singapore",
    rating: 5,
    text: "Planned our Morocco trip in 10 minutes. It understood our group's vibe from our chat history and built something better than any travel agent ever has.",
    color: "#1c1c1e",
    background: "#ffffff",
    initials: "PL",
  },
];

export default function ReviewsSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;

    if (!sectionNode) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      className={`reviews-section ${isVisible ? "is-visible" : ""}`}
      style={{ background: "#eeebe6", padding: "0 clamp(16px, 4vw, 40px)" }}
    >
      <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
        <div
          className="reviews-heading"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div style={{ maxWidth: "560px", margin: "0 auto", textAlign: "center" }}>
            <h2
              className="app-title-font app-type-heading"
              style={{
                fontSize: "clamp(28px, 3.4vw, 40px)",
                color: "#1c1c1e",
                marginBottom: "8px",
                fontStyle: "normal",
              }}
            >
              Loved by Explorers
            </h2>
          </div>
        </div>
        <div
          className="reviews-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "12px",
          }}
        >
          {reviews.map((rev, index) => (
            <article
              key={rev.name}
              className="review-card"
              style={{ "--review-index": index, background: rev.background,
                borderRadius: "18px",
                border: rev.featured
                  ? "1px solid rgba(35,64,95,0.25)"
                  : "1px solid rgba(126,106,86,0.12)",
                boxShadow: "0 10px 24px rgba(55,36,20,0.08)",
                padding: "16px",
                minHeight: "160px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between" }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    gap: "2px",
                    marginBottom: "10px",
                  }}
                >
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <svg
                      key={i}
                      width="12"
                      height="12"
                      fill={rev.featured ? "rgba(255,255,255,0.75)" : "#1c1c1e"}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p
                  className="app-type-body"
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.45",
                    color: rev.featured ? "rgba(255,255,255,0.88)" : "#4f5a62",
                    marginBottom: "14px",
                  }}
                >
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    width: "34px",
                    height: "34px",
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
                      margin: 0,
                      fontSize: "13px",
                      fontWeight: "600",
                      color: rev.featured ? "white" : "#1c1c1e",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {rev.name}
                  </p>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "10px",
                      color: rev.featured ? "rgba(255,255,255,0.6)" : "#8f8173",
                      fontFamily: '"DM Sans", sans-serif',
                    }}
                  >
                    {rev.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reviews-heading,
        .review-card {
          opacity: 0;
          transform: translateY(28px);
          will-change: transform, opacity;
        }

        .reviews-section.is-visible .reviews-heading,
        .reviews-section.is-visible .review-card {
          animation: reviews-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .reviews-section.is-visible .reviews-heading {
          animation-delay: 0ms;
        }

        .reviews-section.is-visible .review-card {
          animation-delay: calc(100ms + (var(--review-index) * 130ms));
        }

        @keyframes reviews-rise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-heading,
          .review-card {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @media (max-width: 768px) {
          .reviews-section {
            padding: 0 16px !important;
          }

          .reviews-heading {
            display: block !important;
            margin-bottom: 16px !important;
          }

          .reviews-grid {
            grid-template-columns: 1fr !important;
            gap: 10px !important;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .reviews-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
}
