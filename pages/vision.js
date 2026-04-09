import SEO from "../components/SEO";
import Header from "../components/Header";

const paragraphs = [
  "Sarah flies into Delhi for her first India trip. It's midnight. Her onward train got cancelled. Four friends are waiting in Jaipur. The group chat has 47 messages, three different plans, no consensus.",
  "She opens Google Maps. Then Booking.com. Then Reddit. Then ChatGPT. Forty minutes later, she's still in the airport, more overwhelmed than when she landed.",
  "That's the moment every travel app fails. Not during booking, but during the trip.",
  "Tarmac is the friend in the group chat who actually has the answers. We're a proactive AI travel agent that picks up on the mood of the chat and anticipates exactly what the group needs. We factor in your location to solve the chaos before it starts—new route found, restaurant sorted, everyone moving. It feels less like software and more like magic.",
  "56% of US travellers already use AI for travel. 68% are willing to pay for in-trip help. Time is now.",
];

export default function Vision() {
  return (
    <>
      <SEO
        title="Vision | Tarmac"
        description="Tarmac is the friend in the group chat who actually has the answers — a proactive AI travel agent built for real trips, not just bookings."
        canonical="/vision"
        noindex={false}
      />

      <Header transparent dark />

      <div
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/city.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlay for readability */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.62)",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "720px",
            margin: "0 auto",
            padding: "120px 32px 96px",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: "clamp(13px, 1.4vw, 16px)",
              fontWeight: "600",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              marginBottom: "48px",
            }}
          >
            Vision
          </h1>
          <style jsx>{`
            .vision-para {
              font-family: "Georgia", "Times New Roman", serif;
              font-size: 18px;
              line-height: 1.85;
              color: rgba(255, 255, 255, 0.92);
              margin-bottom: 28px;
            }

            .vision-para:last-child {
              margin-bottom: 0;
              color: rgba(255, 255, 255, 1);
              font-weight: 600;
            }

            @media (max-width: 640px) {
              .vision-para {
                font-size: 16px;
                line-height: 1.75;
                margin-bottom: 22px;
              }
            }
          `}</style>

          {paragraphs.map((text, i) => (
            <p key={i} className="vision-para">
              {text}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
