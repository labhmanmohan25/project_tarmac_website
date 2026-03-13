import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { SITE_LINKS } from "../lib/siteLinks";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
        background: scrolled ? "rgba(238,235,230,0.94)" : "rgba(238,235,230,0.74)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.06)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 24px rgba(28, 28, 30, 0.05)" : "none",
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

        @media (max-width: 768px) {
          .header-nav {
            padding: 0 16px;
            height: 64px;
          }

          .header-logo-text {
            font-size: 15px !important;
          }

          .header-cta {
            width: 38px;
            height: 38px;
            min-width: 38px;
            min-height: 38px;
            padding: 0 !important;
            border-radius: 999px;
            display: inline-flex !important;
            align-items: center;
            justify-content: center;
          }

          .header-cta-label {
            display: none;
          }

          .header-cta-icon {
            display: inline-flex !important;
          }

          .header-cta-group {
            gap: 6px !important;
          }
        }

        .header-cta-icon {
          display: none;
          width: 18px;
          height: 18px;
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
            <Image
              src="/tarmac-logo-transparent-bg.png"
              alt="tarmac"
              width={40}
              height={40}
              priority
            />
          </div>
          <span
            className="header-logo-text"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "17px",
              fontWeight: "390",
              color: "#2D2D2D",
              letterSpacing: "0.11em",
              textTransform: "lowercase",
            }}
          >
            tarmac
          </span>
        </Link>

        {/* CTA */}
        <div
          className="header-cta-group"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <a
            href={SITE_LINKS.appStore}
            target="_blank"
            rel="noreferrer"
            className="btn-dark-outline header-cta"
            style={{
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="header-cta-icon" aria-hidden="true">
              <FaApple size={18} />
            </span>
            <span className="header-cta-label">Download iOS</span>
          </a>
          <a
            href={SITE_LINKS.googlePlay}
            target="_blank"
            rel="noreferrer"
            className="btn-dark-outline header-cta"
            style={{
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="header-cta-icon" aria-hidden="true">
              <FaAndroid size={18} />
            </span>
            <span className="header-cta-label">Download Android</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
