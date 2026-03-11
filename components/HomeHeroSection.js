import { SITE_LINKS } from "../lib/siteLinks";

export default function HomeHeroSection() {
  const destinationBubbles = [
    {
      name: "Bali",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
      size: 178,
      bottom: "6%",
      left: "-1%",
      delay: "0s",
      duration: "8.4s",
    },
    {
      name: "Bangkok, Thailand",
      image:
        "https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=900&q=80",
      size: 92,
      bottom: "28%",
      left: "31%",
      delay: "0.4s",
      duration: "7s",
    },
    {
      name: "Phuket, Thailand",
      image:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=900&q=80",
      size: 112,
      bottom: "17%",
      left: "3%",
      delay: "0.2s",
      duration: "9.2s",
    },
    {
      name: "Rome",
      image:
        "https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=700&q=80",
      size: 134,
      bottom: "12%",
      right: "18%",
      delay: "0.8s",
      duration: "8.5s",
    },
    {
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=700&q=80",
      size: 198,
      bottom: "2%",
      right: "-1.5%",
      delay: "0.35s",
      duration: "9s",
    },
    {
      name: "Paris",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=700&q=80",
      size: 182,
      bottom: "4%",
      left: "34%",
      delay: "0.9s",
      duration: "8.8s",
    },
    {
      name: "Santorini",
      image:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=700&q=80",
      size: 104,
      bottom: "24%",
      left: "24%",
      delay: "0.5s",
      duration: "7.8s",
    },
    {
      name: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
      size: 118,
      bottom: "22%",
      right: "5%",
      delay: "1s",
      duration: "8.1s",
    },
    {
      name: "New York",
      image:
        "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=700&q=80",
      size: 96,
      bottom: "30%",
      right: "30%",
      delay: "0.7s",
      duration: "7.5s",
    },
    {
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=900&q=80",
      size: 146,
      bottom: "8%",
      right: "21%",
      delay: "0.15s",
      duration: "9.4s",
    },
  ];

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ececec",
        minHeight: "74vh",
        paddingTop: "72px",
        paddingBottom: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="hero-ambient-glow hero-ambient-glow--left"
        aria-hidden="true"
      />
      <div
        className="hero-ambient-glow hero-ambient-glow--right"
        aria-hidden="true"
      />

      <div className="hero-bubble-layer" aria-hidden="true">
        {destinationBubbles.map((bubble) => (
          <div
            key={bubble.name}
            className="hero-destination-bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundImage: `url(${bubble.image})`,
              animationDuration: bubble.duration,
              animationDelay: bubble.delay,
            }}
          />
        ))}
      </div>

      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "920px",
          margin: "0 auto",
          padding: "0 48px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h1
          className="hero-main-title app-title-font"
          style={{
            fontSize: "clamp(42px, 6.6vw, 74px)",
            fontWeight: "500",
            color: "#171717",
            lineHeight: 1.04,
            letterSpacing: "-0.02em",
            margin: "0 0 14px",
          }}
        >
          Your Trip. Handled.
          <br />
          Start to Finish.
        </h1>

        <p
          className="hero-tagline app-subheading-font"
          style={{
            fontSize: "clamp(16px, 1.8vw, 26px)",
            color: "#4a4a4a",
            lineHeight: 1.45,
            maxWidth: "650px",
            margin: "0 auto 26px",
          }}
        >
          Most travel apps ghost you the moment you land. Tarmac stays — one AI
          that plans the trip, navigates the chaos, and settles the bill. Before
          you leave, while you're there, and after you're home.
        </p>

        <div
          className="hero-actions"
          style={{
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href={SITE_LINKS.appStore}
              target="_blank"
              rel="noreferrer"
              className="hero-download-btn"
              style={{
                padding: "12px 24px",
                fontSize: "15px",
                background: "#1f1f21",
                color: "#fafafa",
                border: "1px solid #1f1f21",
                borderRadius: "999px",
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: "500",
                cursor: "pointer",
                minWidth: "172px",
                transition: "opacity 0.2s ease",
                textDecoration: "none",
              }}
            >
              App Store
            </a>
            <a
              href={SITE_LINKS.googlePlay}
              target="_blank"
              rel="noreferrer"
              className="hero-download-btn"
              style={{
                padding: "12px 24px",
                fontSize: "15px",
                background: "transparent",
                color: "#1f1f21",
                border: "1px solid #8a8a8a",
                borderRadius: "999px",
                fontFamily: '"DM Sans", sans-serif',
                fontWeight: "500",
                cursor: "pointer",
                minWidth: "172px",
                transition: "opacity 0.2s ease",
                textDecoration: "none",
              }}
            >
              Google Play
            </a>
          </div>

          <div
            className="hero-socials"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "32px",
            }}
          >
            <a
              href={SITE_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hero-social-btn"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid #8a8a8a",
                background: "transparent",
                color: "#1f1f21",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="3.2"
                  y="3.2"
                  width="17.6"
                  height="17.6"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.2" cy="6.9" r="1.3" fill="currentColor" />
              </svg>
            </a>
            <a
              href={SITE_LINKS.email}
              aria-label="Email"
              className="hero-social-btn"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid #8a8a8a",
                background: "transparent",
                color: "#1f1f21",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15A2.25 2.25 0 0 1 21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.01-.45 7.31 5.55a.75.75 0 0 0 .9 0l7.31-5.55a.45.45 0 0 0-.28-.09h-15a.45.45 0 0 0-.24.09Zm15.99 1.79-6.78 5.15a2.55 2.55 0 0 1-3.08 0L3.75 8.09v9.16c0 .25.2.45.45.45h15.6c.25 0 .45-.2.45-.45V8.09Z" />
              </svg>
            </a>
            <a
              href={SITE_LINKS.linkedinCompany}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hero-social-btn"
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "999px",
                border: "1px solid #8a8a8a",
                background: "transparent",
                color: "#1f1f21",
                fontFamily: '"DM Sans", sans-serif',
                fontSize: "14px",
                fontWeight: "700",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.7 8.2a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM5.2 20V9.6h3V20h-3Zm4.8 0V9.6h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8V20h-3v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V20h-3.1Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-bubble-layer {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 260px;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 18px;
          padding: 0 16px 42px;
          pointer-events: none;
          z-index: 1;
        }

        .hero-destination-bubble {
          position: relative;
          flex: 0 0 auto;
          border-radius: 999px;
          background-size: cover;
          background-position: center;
          box-shadow: 0 16px 38px rgba(0, 0, 0, 0.16);
          filter: saturate(1.08);
          animation-name: heroBubbleFloat;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        @media (max-width: 1320px) {
          .hero-bubble-layer {
            gap: 14px;
          }

          .hero-destination-bubble:nth-child(n + 9) {
            display: none;
          }
        }

        @media (max-width: 1120px) {
          .hero-bubble-layer {
            gap: 12px;
          }

          .hero-destination-bubble:nth-child(n + 7) {
            display: none;
          }
        }

        @media (max-width: 920px) {
          .hero-bubble-layer {
            gap: 10px;
            height: 190px;
          }

          .hero-destination-bubble {
            transform: scale(0.74);
            transform-origin: bottom center;
          }

          .hero-destination-bubble:nth-child(n + 5) {
            display: none;
          }
        }

        .hero-ambient-glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(46px);
          z-index: 0;
          opacity: 0.6;
          pointer-events: none;
        }

        .hero-ambient-glow--left {
          width: 280px;
          height: 280px;
          top: -80px;
          left: -30px;
          background: radial-gradient(
            circle,
            #ffbf8a 0%,
            rgba(255, 191, 138, 0) 72%
          );
        }

        .hero-ambient-glow--right {
          width: 320px;
          height: 320px;
          right: -70px;
          bottom: -90px;
          background: radial-gradient(
            circle,
            #9dd5ff 0%,
            rgba(157, 213, 255, 0) 73%
          );
        }

        @keyframes heroBubbleFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 62vh;
            padding-top: 90px !important;
            padding-bottom: 40px !important;
          }

          .hero-bubble-layer {
            display: none;
          }

          .hero-main-title {
            font-size: clamp(34px, 12vw, 54px) !important;
          }

          .hero-tagline {
            max-width: 430px !important;
          }

          .hero-download-btn {
            min-width: 160px !important;
          }

          .hero-social-btn {
            width: 40px !important;
            height: 40px !important;
          }

          .hero-inner {
            padding: 0 20px !important;
          }

          .hero-ambient-glow--left {
            width: 220px;
            height: 220px;
            left: -70px;
          }

          .hero-ambient-glow--right {
            width: 220px;
            height: 220px;
            right: -90px;
            bottom: -100px;
          }
        }
      `}</style>
    </section>
  );
}
