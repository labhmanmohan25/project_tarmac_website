import MapScrollPulseSection from "./MapScrollPulseSection";

const CARDS = [
  {
    id: "conversational",
    title: "Commerce Inside the Chat",
    description:
      "Your group says “I'm hungry.” Tarmac reads the room — dietary needs, budget, location — and surfaces three restaurants with live deals. No search bar. No app switch. One tap to book.",
    visual: "chat",
    visualTone: "warm",
  },
  {
    id: "agentic",
    title: "Search, Compare, Book — Without You Lifting a Finger",
    description:
      "One message triggers the full pipeline. Tarmac queries multiple providers, ranks by your group's preferences, runs an inline vote, and executes the booking. E-tickets land in everyone's pocket.",
    visual: "pipeline",
    visualTone: "cool",
  },
  {
    id: "personal",
    title: "The Right Offer, at the Right Moment, in the Right Place",
    description:
      "Walking past a café your friend loved? Tarmac knows. Fado show starting in 15 minutes with 2 spots left? Tarmac tells you. Every notification is shaped by your GPS, preferences, time, and who you're with.",
    visual: "map",
    visualTone: "sage",
  },
];

function visualAriaLabel(visual) {
  if (visual === "chat") {
    return "Illustration: phone chat like the hero — trip thread with friend messages and a gold-bordered Tarmac card featuring a restaurant preview and See details.";
  }
  if (visual === "pipeline") {
    return "Illustration: phone chat with a blue-bordered agent card showing search, compare, vote, and booking confirmed steps.";
  }
  return "Tokyo map with animated place pins and a location-aware notification card.";
}

export default function TravelTechTrendsSection() {
  return (
    <section
      id="travel-ai"
      className="travel-tech-section"
      aria-label="Travel technology highlights"
    >
      <div className="travel-tech-inner">
        <h2 className="travel-tech-section-heading">
          Why tarmac is the new{" "}
          <span className="travel-tech-heading-squiggle">way to travel</span>?
        </h2>
        <div className="travel-tech-stack" role="list">
          {CARDS.map((card, index) => (
            <article
              key={card.id}
              className={`travel-tech-band travel-tech-band--${card.visualTone} ${
                index % 2 === 1 ? "travel-tech-band--reverse" : ""
              }`}
              role="listitem"
            >
              <div className="travel-tech-band-copy">
                <h3 className="travel-tech-band-title">{card.title}</h3>
                <p className="travel-tech-band-desc">{card.description}</p>
              </div>

              <div className="travel-tech-band-visual">
                <div
                  className={`travel-tech-frame travel-tech-frame--${card.visual}`}
                  role="img"
                  aria-label={visualAriaLabel(card.visual)}
                >
                  {card.visual === "chat" ? (
                    <div className="tt-phone-stage" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="tt-phone-img"
                        src="/phone_mockup.png"
                        alt=""
                        width={390}
                        height={844}
                      />
                      <div className="tt-phone-screen">
                        <p className="tt-phone-trip-label">Tokyo trip with the gang</p>
                        <div className="tt-phone-body">
                          <div className="tt-bubble-row tt-bubble-row-left">
                            <div className="tt-chat-bubble-msg">
                              <span className="tt-chat-bubble-name">Jake</span>
                              <span className="tt-chat-bubble-text">Anyone else starving?</span>
                            </div>
                          </div>
                          <div className="tt-bubble-row tt-bubble-row-left">
                            <div className="tt-chat-bubble-msg">
                              <span className="tt-chat-bubble-name">Sam</span>
                              <span className="tt-chat-bubble-text">
                                Same 😭 vegan-friendly tho
                              </span>
                            </div>
                          </div>
                          <div className="tt-bubble-row tt-bubble-row-right">
                            <div className="tt-chat-bubble-msg">
                              <span className="tt-chat-bubble-name">You</span>
                              <span className="tt-chat-bubble-text">I&apos;m hungry.</span>
                            </div>
                          </div>
                          <div className="tt-embed-card tt-embed-card-gold">
                            <span className="tt-embed-kind">Local picks</span>
                            <p className="tt-embed-summary">
                              Fits your group&apos;s diets, budget, and walking distance.
                            </p>
                            <div className="tt-restaurant-preview">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                className="tt-restaurant-thumb"
                                src="/images/tokyo.png"
                                alt=""
                                width={80}
                                height={80}
                              />
                              <div className="tt-restaurant-preview-copy">
                                <div className="tt-restaurant-preview-top">
                                  <span className="tt-restaurant-name">
                                    T&apos;s Tantan · Tokyo Station
                                  </span>
                                  <span className="tt-restaurant-rating">★ 4.6</span>
                                </div>
                                <div className="tt-restaurant-preview-meta">
                                  <span>350 m</span>
                                  <span className="tt-restaurant-dot">·</span>
                                  <span>~¥1,200 avg</span>
                                  <span className="tt-restaurant-tag">Vegan · 3 picks</span>
                                </div>
                              </div>
                            </div>
                            <button type="button" className="tt-cta-forest" tabIndex={-1}>
                              SEE DETAILS
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {card.visual === "pipeline" ? (
                    <div className="tt-phone-stage" aria-hidden="true">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="tt-phone-img"
                        src="/phone_mockup.png"
                        alt=""
                        width={390}
                        height={844}
                      />
                      <div className="tt-phone-screen">
                        <p className="tt-phone-trip-label">India trip with the gang</p>
                        <div className="tt-phone-body tt-phone-body--pipeline">
                          <div className="tt-bubble-row tt-bubble-row-right">
                            <div className="tt-chat-bubble-msg">
                              <span className="tt-chat-bubble-name">You</span>
                              <span className="tt-chat-bubble-text">
                                Book tomorrow&apos;s train to Porto — for all of us.
                              </span>
                            </div>
                          </div>
                          <div className="tt-embed-card tt-embed-card-blue">
                            <span className="tt-embed-kind tt-embed-kind-blue">Agent run</span>
                            <p className="tt-embed-summary">
                              Search → compare → vote → tickets to everyone.
                            </p>
                            <ol className="tt-pipe-list tt-pipe-list-compact">
                              <li className="tt-pipe-item tt-pipe-item-done">
                                <span className="tt-pipe-dot" />
                                <div className="tt-pipe-content">
                                  <span className="tt-pipe-label">Detect intent</span>
                                  <span className="tt-pipe-detail">
                                    Porto · tomorrow AM · 4 travelers
                                  </span>
                                </div>
                              </li>
                              <li className="tt-pipe-item tt-pipe-item-done">
                                <span className="tt-pipe-dot" />
                                <div className="tt-pipe-content">
                                  <span className="tt-pipe-label">Search 6 providers</span>
                                  <span className="tt-pipe-detail">
                                    RailEurope · Omio · CP · …
                                  </span>
                                </div>
                              </li>
                              <li className="tt-pipe-item tt-pipe-item-done">
                                <span className="tt-pipe-dot" />
                                <div className="tt-pipe-content">
                                  <span className="tt-pipe-label">Rank &amp; compare</span>
                                  <div className="tt-pipe-table-wrap">
                                    <table className="tt-pipe-table">
                                      <thead>
                                        <tr>
                                          <th>Provider</th>
                                          <th>Price</th>
                                          <th>Score</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        <tr>
                                          <td>CP</td>
                                          <td>€24</td>
                                          <td>9.2</td>
                                        </tr>
                                        <tr>
                                          <td>Omio</td>
                                          <td>€31</td>
                                          <td>8.1</td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </li>
                              <li className="tt-pipe-item tt-pipe-item-done">
                                <span className="tt-pipe-dot" />
                                <div className="tt-pipe-content">
                                  <span className="tt-pipe-label">Group vote</span>
                                  <span className="tt-pipe-detail tt-pipe-vote">
                                    4 / 4 · CP · 09:12 departure
                                  </span>
                                </div>
                              </li>
                              <li className="tt-pipe-item tt-pipe-item-active">
                                <span className="tt-pipe-dot" />
                                <div className="tt-pipe-content">
                                  <span className="tt-pipe-label">Booking confirmed</span>
                                  <span className="tt-pipe-detail tt-pipe-success">
                                    E-tickets → everyone&apos;s wallet
                                  </span>
                                </div>
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {card.visual === "map" ? (
                    <div className="tt-mock tt-mock-map" aria-hidden="true">
                      <div className="tt-map-live-wrap">
                        <MapScrollPulseSection embed />
                      </div>
                      <div className="tt-map-toast">
                        <p className="tt-map-toast-text">
                          <span className="tt-map-toast-emoji" aria-hidden="true">
                            ☕
                          </span>{" "}
                          Selena was spotted at Café Lumière — try their signature mocha!
                        </p>
                        <button type="button" className="tt-map-toast-cta" tabIndex={-1}>
                          Let&apos;s Go →
                        </button>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .travel-tech-section {
          padding: clamp(48px, 7vw, 88px) clamp(16px, 4vw, 48px);
          background: #2c3327;
          color: #f5f3ee;
        }

        .travel-tech-inner {
          max-width: 1080px;
          margin: 0 auto;
        }

        .travel-tech-section-heading {
          margin: 0 0 clamp(40px, 6vw, 72px);
          padding: 0 clamp(12px, 3vw, 28px);
          font-family: var(--font-hero-title);
          font-style: normal;
          font-weight: 500;
          font-size: clamp(32px, 4.8vw, 48px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #faf9f6;
          text-align: center;
        }

        .travel-tech-heading-squiggle {
          text-decoration: underline;
          text-decoration-style: wavy;
          text-decoration-color: rgba(232, 212, 168, 0.92);
          text-decoration-thickness: clamp(2px, 0.09em, 4px);
          text-underline-offset: clamp(3px, 0.14em, 8px);
          text-decoration-skip-ink: none;
        }

        .travel-tech-stack {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vw, 64px);
          padding: 0;
          list-style: none;
        }

        .travel-tech-band {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: stretch;
        }

        .travel-tech-band--reverse {
          flex-direction: row-reverse;
        }

        .travel-tech-band-copy {
          flex: 1 1 300px;
          max-width: 100%;
          padding: clamp(8px, 2vw, 16px) clamp(12px, 3vw, 28px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 14px;
          background: transparent;
        }

        .travel-tech-band-title {
          margin: 0;
          font-family: var(--font-hero-title);
          font-style: normal;
          font-weight: 500;
          font-size: clamp(22px, 2.8vw, 30px);
          line-height: 1.18;
          letter-spacing: -0.02em;
          color: #faf9f6;
        }

        .travel-tech-band-desc {
          margin: 0;
          font-family: var(--font-hero-subheading);
          font-size: 15px;
          line-height: 1.65;
          color: rgba(245, 243, 238, 0.76);
          max-width: 42ch;
        }

        .travel-tech-band-visual {
          flex: 1 1 300px;
          min-height: min(52vw, 360px);
          position: relative;
          display: grid;
          place-items: center;
          padding: clamp(22px, 4vw, 40px);
          isolation: isolate;
        }

        .travel-tech-band--warm .travel-tech-band-visual {
          background: linear-gradient(145deg, #ebe6dc 0%, #c9c4b8 38%, #b8a892 100%);
        }

        .travel-tech-band--cool .travel-tech-band-visual {
          background: linear-gradient(155deg, #dce3e8 0%, #aebcc8 42%, #9aaab8 100%);
        }

        .travel-tech-band--sage .travel-tech-band-visual {
          background: linear-gradient(140deg, #dde5d8 0%, #b8c4ae 45%, #a8b89e 100%);
        }

        .travel-tech-band-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          opacity: 0.28;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
          z-index: 0;
        }

        .travel-tech-band-visual::after {
          content: "";
          position: absolute;
          right: 0;
          bottom: 0;
          width: min(52%, 240px);
          height: min(52%, 240px);
          pointer-events: none;
          z-index: 0;
          opacity: 0.35;
          background-image: linear-gradient(
              rgba(255, 255, 255, 0.22) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.22) 1px,
              transparent 1px
            );
          background-size: 14px 14px;
        }

        .travel-tech-frame {
          position: relative;
          z-index: 1;
          width: min(92%, 400px);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(20, 22, 18, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.35);
          background: #faf8f4;
        }

        .travel-tech-frame--chat,
        .travel-tech-frame--pipeline {
          width: fit-content;
          max-width: 100%;
          margin-left: auto;
          margin-right: auto;
          background: transparent;
          box-shadow: none;
          border-radius: 0;
          overflow: visible;
        }

        .travel-tech-frame--map {
          aspect-ratio: 5 / 6;
          max-height: 440px;
          width: min(100%, 380px);
        }

        /* Hero PhaseCarousel-aligned phone + chat (see PhaseCarousel.js, HeroPhaseSection) */
        .tt-phone-stage {
          position: relative;
          width: fit-content;
          max-width: 100%;
          margin: 0 auto;
          z-index: 1;
        }

        .tt-phone-img {
          display: block;
          height: min(500px, 58vw);
          width: auto;
          max-width: 100%;
          margin: 0 auto;
          pointer-events: none;
          user-select: none;
        }

        .tt-phone-screen {
          position: absolute;
          left: 11%;
          top: 9.5%;
          width: 78%;
          bottom: 13.5%;
          height: auto;
          border-radius: 32px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          box-sizing: border-box;
          isolation: isolate;
        }

        .tt-phone-trip-label {
          margin: 0;
          padding: 20px 10px 6px;
          text-align: center;
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 11px;
          font-weight: 300;
          color: #1c1c1e;
          letter-spacing: 0;
          flex-shrink: 0;
        }

        .tt-phone-body {
          flex: 1;
          min-height: 0;
          overflow: hidden;
          padding: 0 8px 4px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: stretch;
          gap: 5px;
        }

        .tt-phone-body--pipeline {
          gap: 4px;
        }

        .tt-bubble-row {
          display: flex;
          width: 100%;
        }

        .tt-bubble-row-left {
          justify-content: flex-start;
        }

        .tt-bubble-row-right {
          justify-content: flex-end;
        }

        .tt-chat-bubble-msg {
          display: inline-flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
          background: #fff;
          border: 1px solid #ebe6de;
          border-radius: 18px;
          padding: 4px 10px;
          width: fit-content;
          max-width: 94%;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
        }

        .tt-chat-bubble-name {
          font-size: 10px;
          font-weight: 600;
          color: #1c1c1e;
          flex-shrink: 0;
        }

        .tt-chat-bubble-text {
          font-size: 10px;
          color: #666666;
          line-height: 1.35;
        }

        .tt-embed-card {
          border-radius: 12px;
          padding: 8px 8px 7px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          background: #ffffff;
          box-shadow: 0 6px 16px rgba(26, 22, 14, 0.05);
          margin-top: 2px;
          flex-shrink: 0;
        }

        .tt-embed-card-gold {
          border: 1px solid #f7d060;
        }

        .tt-embed-kind {
          align-self: flex-start;
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 3px 8px;
          background: #f2e3bf;
          color: #755a20;
        }

        .tt-embed-kind-blue {
          background: #dfe9fb;
          color: #294f8a;
        }

        .tt-embed-summary {
          margin: 0;
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 9px;
          line-height: 1.35;
          color: #625d53;
        }

        .tt-restaurant-preview {
          margin-top: 1px;
          display: flex;
          align-items: flex-start;
          gap: 6px;
          background: rgba(255, 252, 245, 0.95);
          border: 1px solid rgba(72, 95, 88, 0.15);
          border-radius: 7px;
          padding: 5px 7px;
        }

        .tt-restaurant-thumb {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          object-fit: cover;
          flex-shrink: 0;
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        .tt-restaurant-preview-copy {
          flex: 1;
          min-width: 0;
        }

        .tt-restaurant-preview-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tt-restaurant-name {
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 9px;
          font-weight: 700;
          color: #1c1c1e;
        }

        .tt-restaurant-rating {
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 8px;
          font-weight: 700;
          color: #d97706;
        }

        .tt-restaurant-preview-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: 3px;
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 9px;
          color: #5a5a5a;
        }

        .tt-restaurant-dot {
          color: #c0b8ae;
        }

        .tt-restaurant-tag {
          background: #e8f4ec;
          color: #276842;
          border-radius: 999px;
          padding: 1px 6px;
          font-size: 8px;
          font-weight: 700;
        }

        .tt-cta-forest {
          margin-top: 2px;
          width: 100%;
          border: none;
          border-radius: 8px;
          padding: 6px 8px;
          font-family: "DM Sans", var(--font-hero-subheading), sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
          background: #0e3127;
          cursor: default;
          box-sizing: border-box;
        }

        .tt-pipe-list-compact {
          margin-top: 2px;
          padding-top: 2px;
        }

        .tt-pipe-list-compact.tt-pipe-list {
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        .tt-embed-card-blue {
          border: 1px solid #a0c4ff;
          flex: 1 1 auto;
          min-height: 0;
          overflow: hidden;
          padding: 6px 7px 5px;
          gap: 3px;
          flex-shrink: 1;
        }

        .tt-embed-card-blue .tt-pipe-item {
          padding-bottom: 3px;
          gap: 8px;
          padding-left: 2px;
        }

        .tt-embed-card-blue .tt-pipe-item:not(:last-child)::before {
          left: 6px;
          top: 14px;
          width: 2px;
        }

        .tt-embed-card-blue .tt-pipe-label {
          font-size: 9px;
          margin-bottom: 0;
        }

        .tt-embed-card-blue .tt-pipe-detail {
          font-size: 8px;
          line-height: 1.3;
        }

        .tt-embed-card-blue .tt-pipe-dot {
          width: 12px;
          height: 12px;
          margin-top: 0;
        }

        .tt-embed-card-blue .tt-pipe-table-wrap {
          margin-top: 4px;
        }

        .tt-embed-card-blue .tt-pipe-table th,
        .tt-embed-card-blue .tt-pipe-table td {
          padding: 3px 5px;
          font-size: 7px;
        }

        .tt-pipe-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .tt-pipe-item {
          position: relative;
          display: flex;
          gap: 12px;
          padding-bottom: 14px;
          padding-left: 4px;
        }

        .tt-pipe-item:not(:last-child)::before {
          content: "";
          position: absolute;
          left: 9px;
          top: 22px;
          bottom: 0;
          width: 2px;
          background: rgba(44, 51, 39, 0.15);
        }

        .tt-pipe-dot {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          margin-top: 2px;
          border-radius: 50%;
          background: #e5e7eb;
          border: 2px solid #9ca3af;
          z-index: 1;
        }

        .tt-pipe-item-done .tt-pipe-dot {
          background: #22c55e;
          border-color: #15803d;
        }

        .tt-pipe-item-active .tt-pipe-dot {
          background: #3b82f6;
          border-color: #1d4ed8;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.25);
        }

        .tt-pipe-content {
          flex: 1;
          min-width: 0;
        }

        .tt-pipe-label {
          display: block;
          font-size: 11px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 2px;
        }

        .tt-pipe-detail {
          display: block;
          font-size: 10px;
          color: #6b7280;
          line-height: 1.4;
        }

        .tt-pipe-vote {
          font-weight: 600;
          color: #374151;
        }

        .tt-pipe-success {
          font-weight: 600;
          color: #15803d;
        }

        .tt-pipe-table-wrap {
          margin-top: 8px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .tt-pipe-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 9px;
        }

        .tt-pipe-table th,
        .tt-pipe-table td {
          padding: 6px 8px;
          text-align: left;
        }

        .tt-pipe-table th {
          background: #f3f4f6;
          font-weight: 700;
          color: #374151;
        }

        .tt-pipe-table td {
          background: #fff;
          color: #1f2937;
          border-top: 1px solid #eee;
        }

        .tt-pipe-table tr:last-child td {
          font-weight: 600;
        }

        .tt-mock-map {
          position: relative;
          height: 100%;
          min-height: 280px;
          display: flex;
          flex-direction: column;
          font-family: var(--font-hero-subheading);
        }

        .tt-map-live-wrap {
          flex: 1;
          min-height: 0;
          margin: 12px 12px 0;
          display: flex;
          flex-direction: column;
        }

        .tt-map-toast {
          margin: 12px;
          padding: 12px 14px;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15),
            0 0 0 1px rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .tt-map-toast-text {
          margin: 0;
          font-size: 11px;
          line-height: 1.45;
          color: #1f2937;
          font-weight: 500;
        }

        .tt-map-toast-emoji {
          margin-right: 2px;
        }

        .tt-map-toast-cta {
          align-self: flex-start;
          border: none;
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 11px;
          font-weight: 700;
          font-family: inherit;
          color: #fff;
          background: #ff4f00;
          cursor: default;
        }

        @media (max-width: 720px) {
          .travel-tech-band,
          .travel-tech-band--reverse {
            flex-direction: column;
            gap: clamp(28px, 6vw, 44px);
          }

          .travel-tech-band-visual {
            order: -1;
            flex: 0 0 auto;
            min-height: unset;
            overflow: visible;
            align-content: center;
          }

          /* Map band — keep a sensible floor */
          .travel-tech-band-visual:has(.travel-tech-frame--map) {
            min-height: min(52vw, 280px);
          }

          /* Chat + pipeline: full-width card, phone ~width of card, box grows with phone */
          .travel-tech-frame--chat,
          .travel-tech-frame--pipeline {
            width: 100%;
            max-width: 100%;
          }

          .travel-tech-frame--chat .tt-phone-stage,
          .travel-tech-frame--pipeline .tt-phone-stage {
            width: 100%;
            max-width: 100%;
          }

          .travel-tech-frame--chat .tt-phone-img,
          .travel-tech-frame--pipeline .tt-phone-img {
            width: 94%;
            height: auto;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            display: block;
          }

          .travel-tech-band-copy {
            order: 0;
            flex: 0 0 auto;
          }

        }
      `}</style>
    </section>
  );
}
