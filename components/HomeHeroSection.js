import { SITE_LINKS } from "../lib/siteLinks";
import HowItWorksSection from "./HowItWorksSection";

export default function HomeHeroSection() {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = SITE_LINKS.email;
  };

  return (
    <section
      id="hero"
      className="hero-section"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#eeebe6",
        paddingTop: "0",
        paddingBottom: "56px",
        display: "flex",
        flexDirection: "column",
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

      <div
        className="hero-inner"
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "920px",
          margin: "0 auto",
          // marginTop: "48px",
          padding: "0 48px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p
          className="hero-tagline app-subheading-font app-type-subheading"
          style={{
            color: "#303033",
            maxWidth: "780px",
            margin: "0 auto 26px",
            fontSize: "clamp(28px, 3.4vw, 46px)",
            lineHeight: "1.24",
            letterSpacing: "-0.02em",
            fontWeight: "520",
          }}
        >
          One AI agent that <em className="hero-tagline-emphasis"><span className="hero-tagline-keyword">plans</span> the trip</em>,
          <br className="hero-tagline-break" />
          <em className="hero-tagline-emphasis"><span className="hero-tagline-keyword">navigates</span> the chaos</em>, and{" "}
          <em className="hero-tagline-emphasis"><span className="hero-tagline-keyword">settles</span> the bill</em>.
        </p>

        <div
          className="hero-actions"
          style={{
            display: "flex",
            gap: "0",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div
            className="hero-socials"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "0",
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
              onClick={handleEmailClick}
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

      <div className="hero-how-it-works-wrap">
        <HowItWorksSection as="div" />
      </div>

      <style jsx>{`
        @keyframes aiLoaderSpin {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .ai-loader-wrapper {
          position: relative;
          display: inline-block;
        }

        .ai-loader {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: -1;
          width: 130%;
          height: 130%;
          border-radius: 50%;
          background: conic-gradient(
            from 180deg,
            rgba(251, 191, 36, 0.48),
            rgba(249, 115, 22, 0.7),
            rgba(251, 191, 36, 0.48)
          );
          box-shadow: 0 0 22px rgba(249, 115, 22, 0.2);
          animation: aiLoaderSpin 18s linear infinite;
          opacity: 0.62;
          will-change: transform;
        }

        .hero-ambient-glow {
          position: absolute;
          border-radius: 999px;
          z-index: 0;
          opacity: 0.42;
          pointer-events: none;
        }

        .hero-ambient-glow--left {
          width: 360px;
          height: 360px;
          top: -80px;
          left: -30px;
          background: transparent;
        }

        .hero-ambient-glow--right {
          width: 380px;
          height: 380px;
          right: -70px;
          bottom: -90px;
          background: transparent;
        }

        .hero-tagline-emphasis {
          font-style: italic;
          font-weight: 600;
          color: #1f1f21;
        }

        .hero-tagline-keyword {
          text-decoration: underline;
          text-decoration-thickness: 2px;
          text-underline-offset: 0.12em;
        }

        .hero-tagline-break {
          display: block;
          height: 4px;
        }

        .hero-how-it-works-wrap {
          width: 100%;
          margin-top: clamp(28px, 4vw, 56px);
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 0 !important;
            padding-bottom: 0px !important;
          }

          .hero-main-title {
            font-size: clamp(34px, 12vw, 54px) !important;
          }

          .hero-tagline {
            max-width: 430px !important;
            font-size: clamp(22px, 8.2vw, 34px) !important;
            line-height: 1.28 !important;
            letter-spacing: -0.015em !important;
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

          .hero-how-it-works-wrap {
            margin-top: 20px;
          }

          .hero-ambient-glow--left {
            width: 240px;
            height: 240px;
            left: -70px;
          }

          .hero-ambient-glow--right {
            width: 240px;
            height: 240px;
            right: -90px;
            bottom: -100px;
          }
        }
      `}</style>
    </section>
  );
}
