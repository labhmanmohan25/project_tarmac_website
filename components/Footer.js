import HomeLogoLink from "./HomeLogoLink";
import { SITE_LINKS } from "../lib/siteLinks";

const footerColumns = [
  {
    title: "Company",
    links: [
      // { label: "Vision", href: "/vision" },
      { label: "Team", href: "/team" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: SITE_LINKS.privacyPolicy },
      { label: "Terms & Conditions", href: SITE_LINKS.termsOfService },
    ],
  },
];

export default function Footer() {
  const handleEmailClick = (event) => {
    event.preventDefault();
    window.location.href = SITE_LINKS.email;
  };

  return (
    <footer style={{ background: "#111111", color: "#f8f4ee" }}>
      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
        }
        
        .footer-column {
          display: flex;
          flex-direction: column;
        }
        
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          
          .footer-column {
            flex-direction: row !important;
            flex-wrap: wrap;
            gap: 24px;
            align-items: baseline;
          }
          
          .footer-column h4 {
            margin: 0 !important;
            white-space: nowrap;
          }
          
          .footer-column ul {
            flex-direction: row !important;
            flex-wrap: wrap;
            gap: 16px !important;
            align-items: baseline;
          }
          
          .footer-column ul li {
            margin: 0;
          }
          
          .footer-container {
            padding: 48px 24px 32px !important;
          }
          
          .bottom-bar {
            padding: 20px 24px !important;
            flex-direction: column;
            align-items: flex-start !important;
            gap: 16px !important;
          }
          
          .bottom-links {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: flex-start;
          }
        }
      `}</style>
      <div
        className="footer-container"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "64px 48px 40px",
        }}
      >
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <HomeLogoLink
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <picture>
                  <source srcSet="/tarmac-dark.png" media="(prefers-color-scheme: dark)" />
                  <img src="/tarmac-light.png" alt="tarmac" width="40" height="40" loading="lazy" />
                </picture>
              </div>
              <span
                style={{
                  fontFamily: '"Bricolage Grotesque", sans-serif',
                  fontSize: "17px",
                  fontWeight: "400",
                  color: "white",
                  letterSpacing: "-0.01em",
                }}
              >
                tarmac
              </span>
            </HomeLogoLink>

            <p
              className="app-type-body"
              style={{
                color: "rgba(255,255,255,0.45)",
                maxWidth: "260px",
                marginBottom: "8px",
              }}
            >
              Travel with tarmac — your personal concierge for
              every trip and adventure.
            </p>
            <p
              className="app-type-caption"
              style={{
                color: "rgba(255,255,255,0.25)",
                marginBottom: "24px",
              }}
            >
              Built in NYC · By Apurva & Manmohan
            </p>

            {/* Socials */}
            <div style={{ display: "flex", gap: "10px" }}>
              {[
                {
                  label: "Instagram",
                  href: SITE_LINKS.instagram,
                  path: "M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 2.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z",
                },
                {
                  label: "LinkedIn",
                  href: SITE_LINKS.linkedinCompany,
                  path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                },
                {
                  label: "Email",
                  href: SITE_LINKS.email,
                  path: "M2.25 6.75A2.25 2.25 0 0 1 4.5 4.5h15A2.25 2.25 0 0 1 21.75 6.75v10.5A2.25 2.25 0 0 1 19.5 19.5h-15a2.25 2.25 0 0 1-2.25-2.25V6.75Zm2.01-.45 7.31 5.55a.75.75 0 0 0 .9 0l7.31-5.55a.45.45 0 0 0-.28-.09h-15a.45.45 0 0 0-.24.09Zm15.99 1.79-6.78 5.15a2.55 2.55 0 0 1-3.08 0L3.75 8.09v9.16c0 .25.2.45.45.45h15.6c.25 0 .45-.2.45-.45V8.09Z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={s.label === "Email" ? handleEmailClick : undefined}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel={s.label === "Email" ? undefined : "noreferrer"}
                  aria-label={s.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.4)",
                    transition: "color 0.2s, border-color 0.2s",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="footer-column">
              <h4
                className="app-type-label"
                style={{
                  color: "white",
                  marginBottom: "16px",
                }}
              >
                {col.title}
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      className="app-type-body"
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      style={{
                        color: "rgba(255,255,255,0.42)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="bottom-bar"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          className="app-type-body"
          style={{
            color: "rgba(255,255,255,0.25)",
          }}
        >
          © 2025 TARMAC. All rights reserved.
        </p>
        <div className="bottom-links" style={{ display: "flex", gap: "24px" }}>
          {[
            { label: "Privacy Policy", href: SITE_LINKS.privacyPolicy },
            { label: "Terms & Conditions", href: SITE_LINKS.termsOfService },
          ].map((item) => (
            <a
              className="app-type-caption"
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              style={{
                color: "rgba(255,255,255,0.25)",
                textDecoration: "none",
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
