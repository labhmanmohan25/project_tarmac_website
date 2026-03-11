import AvatarGroup from "./AvatarGroup";
import SectionLabel from "./SectionLabel";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="waitlist-section"
      aria-hidden="true"
      style={{ display: "none" }}
    >
      <div
        className="waitlist-photo waitlist-photo-left"
        style={{
          position: "absolute",
          top: "84px",
          left: "5%",
          width: "180px",
          height: "220px",
          borderRadius: "24px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "rotate(-6deg)",
          border: "4px solid rgba(255,255,255,0.72)",
          boxShadow: "0 18px 40px rgba(12,29,34,0.26)",
          pointerEvents: "none",
        }}
      />
      <div
        className="waitlist-photo waitlist-photo-right"
        style={{
          position: "absolute",
          right: "6%",
          bottom: "60px",
          width: "190px",
          height: "150px",
          borderRadius: "24px",
          backgroundImage:
            "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "rotate(7deg)",
          border: "4px solid rgba(255,255,255,0.72)",
          boxShadow: "0 18px 40px rgba(12,29,34,0.26)",
          pointerEvents: "none",
        }}
      />

      <div
        className="waitlist-card"
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          position: "relative",
          background: "#f6efe4",
          border: "1px solid rgba(111,94,74,0.14)",
          borderRadius: "30px",
          padding: "72px 24px",
          boxShadow: "0 22px 54px rgba(12,29,34,0.18)",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
          }}
        >
          <SectionLabel text="Early Access" accent />
          <h2
            className="app-title-font"
            style={{
              fontSize: "clamp(40px, 5.5vw, 72px)",
              fontWeight: "800",
              color: "#1f2f33",
              lineHeight: 0.95,
              letterSpacing: "-0.025em",
              marginBottom: "10px",
            }}
          >
            Ready to Travel
          </h2>
          <h2
            className="app-title-font"
            style={{
              fontStyle: "italic",
              fontWeight: "600",
              fontSize: "clamp(36px, 5vw, 66px)",
              lineHeight: 1,
              marginBottom: "28px",
              color: "#cb6c2d",
            }}
          >
            Smarter?
          </h2>
          <p
            className="app-subheading-font"
            style={{
              fontSize: "16px",
              color: "#6d645b",
              lineHeight: 1.75,
              marginBottom: "44px",
            }}
          >
            Join 1,000+ travelers on the waitlist. Be first to experience AI
            that handles your entire trip — before, during, and after.
          </p>

          <div
            className="waitlist-badges"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
            }}
          >
            <WaitlistForm />
          </div>

          <AvatarGroup label="travelers" />

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "32px",
              marginTop: "48px",
              flexWrap: "wrap",
            }}
          >
            {[
              "🔒 Privacy First",
              "✈️ 500+ Destinations",
              "⚡ Instant Setup",
              "💸 Pay Per Trip",
            ].map((badge) => (
              <span
                key={badge}
                style={{
                  fontSize: "13px",
                  color: "#35545c",
                  background: "#ffffff",
                  padding: "10px 14px",
                  borderRadius: "999px",
                  border: "1px solid rgba(53,84,92,0.12)",
                  fontFamily: '"DM Sans", sans-serif',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .waitlist-section {
            padding: 72px 16px 64px !important;
          }

          .waitlist-photo {
            display: none !important;
          }

          .waitlist-card {
            padding: 40px 16px !important;
            border-radius: 20px !important;
          }

          .waitlist-badges {
            gap: 14px !important;
            margin-top: 30px !important;
          }
        }
      `}</style>
    </section>
  );
}
