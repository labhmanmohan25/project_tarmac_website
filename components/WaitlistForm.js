import { useState } from "react";

export default function WaitlistForm({ dark = false }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <div
          className="waitlist-success"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: dark ? "rgba(255,255,255,0.1)" : "#fff8ef",
            borderRadius: "100px",
            padding: "14px 24px",
            border: dark
              ? "1px solid rgba(255,255,255,0.15)"
              : "1px solid #efd2b8",
          }}
        >
          <span style={{ color: "#10b981", fontSize: "16px" }}>✓</span>
          <span
            style={{
              fontSize: "15px",
              color: dark ? "rgba(255,255,255,0.8)" : "#444",
              fontFamily: '"DM Sans", sans-serif',
            }}
          >
            You&apos;re on the list! We&apos;ll be in touch.
          </span>
        </div>

        <style jsx>{`
          @media (max-width: 640px) {
            .waitlist-success {
              width: 100%;
              border-radius: 16px !important;
              padding: 12px 14px !important;
            }
          }
        `}</style>
      </>
    );
  }

  return (
    <>
      <form
        className="waitlist-form"
        onSubmit={(e) => {
          e.preventDefault();
          if (email) setSubmitted(true);
        }}
        style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="waitlist-input"
          style={{
            padding: "14px 20px",
            borderRadius: "100px",
            border: dark
              ? "1px solid rgba(255,255,255,0.2)"
              : "1.5px solid #b8cfd3",
            background: dark ? "rgba(255,255,255,0.08)" : "white",
            color: dark ? "white" : "#1c1c1e",
            fontSize: "15px",
            outline: "none",
            minWidth: "230px",
            fontFamily: '"DM Sans", sans-serif',
            boxShadow: dark ? "none" : "0 10px 24px rgba(32,75,86,0.08)",
          }}
        />
        <button
          type="submit"
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
          }}
        >
          Join Waitlist
        </button>
      </form>

      <style jsx>{`
        @media (max-width: 640px) {
          .waitlist-form {
            width: 100%;
          }

          .waitlist-input {
            width: 100%;
            min-width: 0 !important;
          }

          .waitlist-submit {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
