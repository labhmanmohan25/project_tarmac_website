import { SITE_LINKS } from "../lib/siteLinks";

export default function WaitlistForm({ dark = false }) {
  return (
    <>
      <div
        className="waitlist-form"
        style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
      >
        <a
          href={SITE_LINKS.waitlistForm}
          target="_blank"
          rel="noreferrer"
          className="waitlist-submit"
          style={{
            padding: "14px 28px",
            borderRadius: "100px",
            background: dark
              ? "linear-gradient(135deg, #f97316 0%, #fb923c 100%)"
              : "#cb6c2d",
            color: "white",
            border: "none",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            fontFamily: '"DM Sans", sans-serif',
            boxShadow: dark
              ? "0 8px 24px rgba(249, 115, 22, 0.35)"
              : "0 10px 24px rgba(203,108,45,0.28)",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Join Waitlist
        </a>
      </div>

      <style jsx>{`
        @media (max-width: 640px) {
          .waitlist-form {
            width: 100%;
          }

          .waitlist-submit {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
