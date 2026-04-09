import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ transparent = false, dark = false }) {
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
        background: transparent
          ? "transparent"
          : scrolled ? "rgba(238,235,230,0.94)" : "rgba(238,235,230,0.74)",
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

        @media (max-width: 768px) {
          .header-nav {
            padding: 0 16px;
            height: 64px;
          }

          .header-logo-text {
            font-size: 15px !important;
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
              fontWeight: "390",
              color: dark ? "rgba(255,255,255,0.92)" : "#2D2D2D",
              letterSpacing: "0.11em",
              textTransform: "lowercase",
            }}
          >
            tarmac
          </span>
        </Link>

        {/* Vision CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link
            href="/vision"
            className="btn-dark-outline header-cta"
            style={{
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              ...(dark && {
                color: "rgba(255,255,255,0.92)",
                border: "1.5px solid rgba(255,255,255,0.55)",
              }),
            }}
          >
            <span className="header-cta-label">Our Vision</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
