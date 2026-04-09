import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Header({ transparent = false, dark = false }) {
  const router = useRouter();
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

        {/* Vision + Team nav text links */}
        <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
          {/* Old bordered button styling intentionally removed in favor of plain text links. */}
          <span
            className="header-text-link"
            onClick={() => router.push("/vision")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span style={{ color: dark ? "rgba(255,255,255,0.92)" : "#2D2D2D" }}>Vision</span>
          </span>
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
        </div>
      </nav>
    </header>
  );
}
