"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useJoinWaitlist } from "./JoinWaitlistProvider";

export default function Header({ transparent = false, dark = false, surface = "sand", waitlistStyle = "zap" }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const baseSurface = surface === "white" ? "255,255,255" : "238,235,230";
  const isZapWaitlist = waitlistStyle === "zap";
  const { openJoinWaitlist } = useJoinWaitlist();

  useEffect(() => {
    let frameId = null;

    const updateScrollState = () => {
      const nextScrolled = window.scrollY > 20;
      setScrolled((previousValue) =>
        previousValue === nextScrolled ? previousValue : nextScrolled,
      );
      frameId = null;
    };

    const handleScroll = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(updateScrollState);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [router.asPath]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition:
          "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        background: transparent
          ? "transparent"
          : scrolled ? `rgba(${baseSurface},0.94)` : `rgba(${baseSurface},0.74)`,
        borderBottom: transparent
          ? "1px solid transparent"
          : scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        boxShadow: transparent ? "none" : scrolled ? "0 8px 24px rgba(28, 28, 30, 0.05)" : "none",
      }}
    >
      <style jsx>{`
        .header-nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 72px;
          gap: 12px;
        }

        .header-text-link {
          font-family: "Montserrat", sans-serif;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.02em;
          text-decoration: none;
          cursor: pointer;
        }

        .header-text-link span {
          position: relative;
          display: inline-block;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
          background: linear-gradient(to right, currentColor 0%, currentColor 100%) no-repeat;
          background-size: 0% 2px;
          background-position: bottom left;
          transition: background-size 0.3s ease, transform 0.3s ease;
        }

        .header-text-link:hover span {
          background-size: 100% 2px;
          transform: skewX(-10deg);
        }

        .header-waitlist-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 38px;
          padding: 0 16px;
          border-radius: 999px;
          border: 1px solid #5a4500;
          background: #ffea00;
          color: #1f1400;
          text-decoration: none;
          font-family: "Montserrat", sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          box-shadow: 0 8px 16px rgba(90, 69, 0, 0.26);
          transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
        }

        .header-waitlist-link:hover {
          transform: translateY(-1px);
          filter: brightness(1.07);
          box-shadow: 0 10px 20px rgba(90, 69, 0, 0.32);
        }

        .header-waitlist-link--zap {
          min-height: 42px;
          padding: 0 16px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: #ff5a00;
          color: #fff;
          font-family: "DM Sans", system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-transform: none;
          box-shadow: 0 2px 8px rgba(255, 90, 0, 0.22);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, filter 0.2s ease;
        }

        .header-waitlist-link--zap:hover {
          transform: translateY(-2px);
          filter: none;
          background: #e65200;
          box-shadow: 0 8px 20px rgba(255, 90, 0, 0.38);
        }

        .header-waitlist-link--zap:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(255, 90, 0, 0.28);
        }

        button.header-waitlist-link,
        button.header-mobile-waitlist {
          font: inherit;
          text-align: center;
          -webkit-appearance: none;
          appearance: none;
        }

        .header-links-wrap {
          display: flex;
          align-items: center;
          gap: 30px;
          position: relative;
        }

        .header-mobile-actions {
          display: none;
          align-items: center;
          gap: 10px;
          position: relative;
        }

        .header-mobile-waitlist {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid #5a4500;
          background: #ffea00;
          color: #1f1400;
          text-decoration: none;
          font-family: "Montserrat", sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          box-shadow: 0 6px 12px rgba(90, 69, 0, 0.26);
        }

        .header-mobile-waitlist--zap {
          min-height: 36px;
          padding: 0 12px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: #ff5a00;
          color: #fff;
          font-family: "DM Sans", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.01em;
          text-transform: none;
          box-shadow: 0 2px 8px rgba(255, 90, 0, 0.22);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
        }

        .header-mobile-waitlist--zap:hover {
          transform: translateY(-2px);
          background: #e65200;
          box-shadow: 0 8px 20px rgba(255, 90, 0, 0.38);
        }

        .header-mobile-waitlist--zap:active {
          transform: translateY(0);
          box-shadow: 0 2px 10px rgba(255, 90, 0, 0.28);
        }

        .header-mobile-menu-btn {
          width: 34px;
          height: 34px;
          border: 1px solid rgba(0, 0, 0, 0.16);
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.72);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: border-color 0.18s ease, background-color 0.18s ease;
        }

        .header-mobile-menu-btn:hover {
          border-color: rgba(0, 0, 0, 0.3);
          background: rgba(255, 255, 255, 0.9);
        }

        .header-mobile-menu-btn:focus-visible {
          outline: 2px solid #1f1400;
          outline-offset: 1px;
        }

        .header-mobile-menu-dots {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3px;
        }

        .header-mobile-menu-dots span {
          width: 4px;
          height: 4px;
          border-radius: 999px;
          background: #2d2d2d;
        }

        .header-mobile-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          min-width: 132px;
          padding: 8px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 18px 32px rgba(20, 20, 20, 0.16);
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 8;
        }

        .header-mobile-menu-item {
          width: 100%;
          border: none;
          border-radius: 8px;
          background: transparent;
          color: #2d2d2d;
          font-family: "Montserrat", sans-serif;
          font-size: 13px;
          font-weight: 600;
          text-align: left;
          padding: 8px 10px;
          cursor: pointer;
        }

        .header-mobile-menu-item:hover {
          background: rgba(0, 0, 0, 0.06);
        }

        @media (max-width: 768px) {
          .header-nav {
            padding: 0 16px;
            height: 64px;
          }

          .header-logo-text {
            font-size: 15px !important;
          }

          .header-waitlist-link {
            display: none;
          }

          .header-text-link {
            display: none !important;
          }

          .header-links-wrap {
            gap: 0;
          }

          .header-mobile-actions {
            display: inline-flex;
          }
        }
      `}</style>
      <nav className="header-nav">
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <picture>
              <img src={dark ? "/tarmac-dark.png" : "/tarmac-light.png"} alt="tarmac" width="40" height="40" loading="eager" />
            </picture>
          </div>
          <span
            className="header-logo-text"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "17px",
              fontWeight: "400",
              color: dark ? "rgba(255,255,255,0.92)" : "#2D2D2D",
              letterSpacing: "0.11em",
              textTransform: "lowercase",
            }}
          >
            tarmac
          </span>
        </Link>

        {/* Vision + Team nav text links */}
        <div className="header-links-wrap">
          <button
            type="button"
            className={`header-waitlist-link${isZapWaitlist ? " header-waitlist-link--zap" : ""}`}
            aria-label="Join waitlist"
            onClick={openJoinWaitlist}
          >
            {isZapWaitlist ? "Join waitlist" : "JOIN WAITLIST"}
          </button>

          {/* Old bordered button styling intentionally removed in favor of plain text links. */}
          {/* Vision: hidden while site defaults to B2B travel agents (page redirects home). */}
          {/* <span
            className="header-text-link"
            onClick={() => router.push("/vision")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: dark ? "rgba(255,255,255,0.92)" : "#2D2D2D" }}>Vision</span>
          </span> */}
          <span
            className="header-text-link"
            onClick={() => router.push("/team")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: dark ? "rgba(255,255,255,0.92)" : "#2D2D2D" }}>Team</span>
          </span>

          <div className="header-mobile-actions">
            <button
              type="button"
              className={`header-mobile-waitlist${isZapWaitlist ? " header-mobile-waitlist--zap" : ""}`}
              aria-label="Join waitlist"
              onClick={() => {
                setMobileMenuOpen(false);
                openJoinWaitlist();
              }}
            >
              {isZapWaitlist ? "Join waitlist" : "JOIN WAITLIST"}
            </button>

            <button
              type="button"
              className="header-mobile-menu-btn"
              onClick={() => setMobileMenuOpen((previousValue) => !previousValue)}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="header-mobile-menu"
            >
              <span className="header-mobile-menu-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>

            {mobileMenuOpen ? (
              <div id="header-mobile-menu" className="header-mobile-menu" role="menu">
                {/* <button
                  type="button"
                  className="header-mobile-menu-item"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/vision");
                  }}
                  role="menuitem"
                >
                  Vision
                </button> */}
                <button
                  type="button"
                  className="header-mobile-menu-item"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    router.push("/team");
                  }}
                  role="menuitem"
                >
                  Team
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </header>
  );
}
