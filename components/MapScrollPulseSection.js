/**
 * Tokyo map with hover-revealed card-style tips (matches HeroPhaseSection cards).
 */
import { useState, useEffect, useLayoutEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

const MAP_IMAGE = "/images/tokyo.png";

/** Custom cursor (pedestrian) while pointer is over the map frame; falls back to `auto`. */
const MAP_WALK_CURSOR_SZ = 52;
const MAP_WALK_CURSOR_HOTSPOT = MAP_WALK_CURSOR_SZ / 2;
const MAP_WALK_CURSOR = `url("data:image/svg+xml;charset=utf-8,${encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="${MAP_WALK_CURSOR_SZ}" height="${MAP_WALK_CURSOR_SZ}" viewBox="0 0 ${MAP_WALK_CURSOR_SZ} ${MAP_WALK_CURSOR_SZ}"><text x="3" y="40" font-size="36" font-family="system-ui,Apple Color Emoji,Segoe UI Emoji,Noto Color Emoji,sans-serif">🚶</text></svg>`
)}") ${MAP_WALK_CURSOR_HOTSPOT} ${MAP_WALK_CURSOR_HOTSPOT}, auto`;

/** Gap from cursor tip to bubble anchor (bubble sits up-right of pointer). */
const CURSOR_GAP_X = 14;
const CURSOR_GAP_Y = 12;

const SPOTS = [
  {
    left: 17,
    top: 33,
    emoji: "🐟",
    name: "Toyosu Fish Market",
    message:
      "Blind item: someone huge did the dawn tuna shuffle — roll out of bed and join the auction crowd, then argue about sushi like you planned it all along.",
    bubblePlacement: "right",
    /** Plain fill inside influence circle (no gradient) */
    influenceFill: "rgba(14, 165, 233, 0.48)",
    markerDotColor: "#0369a1",
    rippleColor: "rgba(255, 255, 255, 0.95)",
  },
  {
    left: 74,
    top: 41,
    emoji: "⛩️",
    name: "Meiji Jingu",
    message:
      "Two idols allegedly vanished on the gravel path with caps pulled low — peaceful forest detox or the world's quietest duck-out? You decide after one incense lap.",
    bubblePlacement: "left",
    influenceFill: "rgba(168, 85, 247, 0.46)",
    markerDotColor: "#6b21a8",
    rippleColor: "rgba(255, 255, 255, 0.96)",
  },
  {
    left: 41,
    top: 68,
    emoji: "🌃",
    name: "Shibuya Sky",
    message:
      "Rooftop glass-ledge rumor: a chart-topper watched the scramble glow at blue hour. Worth the timed ticket if you like heights, wind hair, and main-character lighting.",
    bubblePlacement: "top",
    influenceFill: "rgba(251, 113, 133, 0.48)",
    markerDotColor: "#be123c",
    rippleColor: "rgba(255, 255, 255, 0.95)",
  },
];

function clampTipPosition(clientX, clientY, bubbleW, bubbleH) {
  if (typeof window === "undefined") {
    return { left: clientX + CURSOR_GAP_X, top: clientY - CURSOR_GAP_Y };
  }
  const pad = 10;
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  // Anchor: top-left before translate(0, -100%) — bubble extends upward from (left, top)
  let left = clientX + CURSOR_GAP_X;
  let top = clientY - CURSOR_GAP_Y;

  // Keep bubble inside viewport (after translateY(-100%), box occupies [top - H, top] x [left, left + W])
  const right = left + bubbleW;
  if (right > vw - pad) {
    left = Math.max(pad, vw - pad - bubbleW);
  }
  if (left < pad) {
    left = pad;
  }

  const visualTop = top - bubbleH;
  if (visualTop < pad) {
    top = pad + bubbleH;
  }
  if (top > vh - pad) {
    top = vh - pad;
  }

  return { left, top };
}

function MapTipBubblePortal({ spot, clientX, clientY }) {
  const wrapRef = useRef(null);
  const [pos, setPos] = useState(() =>
    clampTipPosition(clientX, clientY, 300, 220)
  );

  useLayoutEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(clampTipPosition(clientX, clientY, r.width, r.height));
  }, [clientX, clientY, spot.name]);

  return (
    <div
      ref={wrapRef}
      className="tokyo-map-tip-portal"
      style={{
        position: "fixed",
        left: pos.left,
        top: pos.top,
        transform: "translate(0, -100%)",
        zIndex: 10000,
        pointerEvents: "none",
        maxWidth: "min(310px, calc(100vw - 20px))",
      }}
      role="region"
      aria-label={spot.name}
    >
      <div
        className={`tokyo-gossip-map__cluster tokyo-map-hero-card tokyo-map-hero-card--suggestion`}
      >
        <span className="tokyo-map-hero-kind">Place tip</span>
        <p className="tokyo-map-hero-title">
          <span className="tokyo-map-hero-emoji" aria-hidden="true">
            {spot.emoji}
          </span>{" "}
          {spot.name}
        </p>
        <div className="tokyo-map-hero-preview">{spot.message}</div>
      </div>
    </div>
  );
}

export default function MapScrollPulseSection({
  mapImageSrc = MAP_IMAGE,
  mapAlt = "Tokyo area map",
  /** When true, omit outer section layout and fill a parent (e.g. travel-tech card). */
  embed = false,
}) {
  const [mounted, setMounted] = useState(false);
  const [hoverTip, setHoverTip] = useState(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeSpot = hoverTip
    ? SPOTS.find((s) => s.name === hoverTip.name)
    : null;

  const updatePointer = useCallback((spotName, clientX, clientY) => {
    setHoverTip({ name: spotName, x: clientX, y: clientY });
  }, []);

  const clearSpot = useCallback((spotName) => {
    setHoverTip((cur) => (cur?.name === spotName ? null : cur));
  }, []);

  const rootClass = `tokyo-gossip-map${embed ? " tokyo-gossip-map--embed" : ""}`;
  const Root = embed ? "div" : "section";

  return (
    <Root
      className={rootClass}
      {...(!embed ? { "aria-label": "Tokyo map with example place pins and messages" } : {})}
    >
      <div
        className="tokyo-gossip-map__frame"
        style={{ cursor: MAP_WALK_CURSOR }}
      >
        <img
          className="tokyo-gossip-map__img"
          src={mapImageSrc}
          alt={mapAlt}
          draggable={false}
        />

        <ul className="tokyo-gossip-map__spots" aria-label="Example places and messages">
          {SPOTS.map((spot) => {
            const isActive = hoverTip?.name === spot.name;
            return (
              <li
                key={spot.name}
                className={`tokyo-gossip-map__spot tokyo-gossip-map__spot--bubble-${spot.bubblePlacement} ${isActive ? "tokyo-gossip-map__spot--open" : ""}`}
                style={{ left: `${spot.left}%`, top: `${spot.top}%` }}
              >
                <div
                  className="tokyo-gossip-map__hotspot"
                  onMouseEnter={(e) =>
                    updatePointer(spot.name, e.clientX, e.clientY)
                  }
                  onMouseMove={(e) =>
                    updatePointer(spot.name, e.clientX, e.clientY)
                  }
                  onMouseLeave={() => clearSpot(spot.name)}
                  onTouchStart={(e) => {
                    const t = e.touches[0];
                    if (t) updatePointer(spot.name, t.clientX, t.clientY);
                  }}
                  onTouchMove={(e) => {
                    const t = e.touches[0];
                    if (t) updatePointer(spot.name, t.clientX, t.clientY);
                  }}
                  onTouchEnd={() => clearSpot(spot.name)}
                  onFocus={(e) => {
                    const r = e.currentTarget.getBoundingClientRect();
                    updatePointer(
                      spot.name,
                      r.left + r.width / 2,
                      r.top + r.height / 2
                    );
                  }}
                  onBlur={(ev) => {
                    if (!ev.currentTarget.contains(ev.relatedTarget)) {
                      clearSpot(spot.name);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      if (hoverTip?.name === spot.name) {
                        clearSpot(spot.name);
                      } else {
                        const el = e.currentTarget;
                        const r = el.getBoundingClientRect();
                        updatePointer(
                          spot.name,
                          r.left + r.width / 2,
                          r.top + r.height / 2
                        );
                      }
                    }
                    if (e.key === "Escape") {
                      clearSpot(spot.name);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`${spot.name}. Move pointer inside the circle to read the tip.`}
                  aria-expanded={isActive}
                >
                  <div
                    className="tokyo-map-influence"
                    aria-hidden="true"
                    style={{
                      "--tokyo-ripple-color": spot.rippleColor,
                    }}
                  >
                    <span className="tokyo-map-influence__ripples">
                      <span className="tokyo-map-influence__ripple" />
                      <span className="tokyo-map-influence__ripple" />
                      <span className="tokyo-map-influence__ripple" />
                    </span>
                    <span
                      className="tokyo-map-influence__ring"
                      style={{ backgroundColor: spot.influenceFill }}
                    />
                    <span className="tokyo-map-influence__dots">
                      <span
                        className="tokyo-map-influence__dot tokyo-map-influence__dot--1"
                        style={{ backgroundColor: spot.markerDotColor }}
                      />
                      <span
                        className="tokyo-map-influence__dot tokyo-map-influence__dot--2"
                        style={{ backgroundColor: spot.markerDotColor }}
                      />
                      <span
                        className="tokyo-map-influence__dot tokyo-map-influence__dot--3"
                        style={{ backgroundColor: spot.markerDotColor }}
                      />
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {mounted &&
        activeSpot &&
        hoverTip &&
        createPortal(
          <MapTipBubblePortal
            spot={activeSpot}
            clientX={hoverTip.x}
            clientY={hoverTip.y}
          />,
          document.body
        )}

      <style jsx global>{`
        @property --tokyo-map-angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0turn;
        }

        @keyframes tokyoMapGradientBorder {
          from {
            --tokyo-map-angle: 0turn;
          }
          to {
            --tokyo-map-angle: 10turn;
          }
        }

        .tokyo-map-hero-card {
          width: 100%;
          min-width: 0;
          border-radius: 14px;
          padding: 13px;
          border: 2px solid transparent;
          display: flex;
          flex-direction: column;
          gap: 7px;
          position: relative;
          --card-surface: #ffffff;
          --tokyo-map-angle: 0turn;
          --card-c1: #50bfff;
          --card-c2: #5f8dfb;
          --card-c3: #9ee8ff;
          --card-c4: #4f8fff;
          box-sizing: border-box;
          background:
            linear-gradient(var(--card-surface), var(--card-surface)) padding-box,
            conic-gradient(
                from var(--tokyo-map-angle),
                var(--card-surface) 0deg,
                var(--card-c1) 55deg,
                var(--card-c2) 120deg,
                var(--card-c3) 210deg,
                var(--card-c4) 300deg,
                var(--card-surface) 360deg
              )
              border-box;
          animation: tokyoMapGradientBorder 14s linear infinite;
          box-shadow: 0 8px 20px rgba(26, 22, 14, 0.06);
        }

        .tokyo-map-hero-card--suggestion {
          --card-c1: #f8d16e;
          --card-c2: #e7a647;
          --card-c3: #fde7ab;
          --card-c4: #f0c16d;
        }

        .tokyo-map-hero-kind {
          font-family: "DM Sans", sans-serif;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border-radius: 999px;
          padding: 3px 8px;
          background: #d9e8fb;
          color: #2d5b96;
          align-self: flex-start;
        }

        .tokyo-map-hero-title {
          margin: 1px 0 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 14px;
          line-height: 1.15;
          letter-spacing: -0.015em;
          color: #1c1c1e;
        }

        .tokyo-map-hero-emoji {
          font-style: normal;
        }

        .tokyo-map-hero-preview {
          margin-top: 2px;
          border-radius: 8px;
          background: rgba(255, 252, 245, 0.9);
          border: 1px solid rgba(104, 96, 84, 0.18);
          padding: 6px 9px;
          font-family: "DM Sans", sans-serif;
          font-size: 10px;
          line-height: 1.4;
          color: #484238;
        }

        @media (prefers-reduced-motion: reduce) {
          .tokyo-map-hero-card {
            animation: none;
          }
        }
      `}</style>

      <style jsx>{`
        .tokyo-gossip-map {
          width: 100%;
          max-width: min(1320px, calc(100vw - 40px));
          margin-left: auto;
          margin-right: auto;
          box-sizing: border-box;
        }

        .tokyo-gossip-map--embed {
          max-width: none;
          margin: 0;
          flex: 1;
          min-height: 0;
          display: flex;
          flex-direction: column;
          align-self: stretch;
        }

        .tokyo-gossip-map__frame {
          position: relative;
          width: 100%;
          min-height: clamp(520px, 68vh, 820px);
          border-radius: clamp(16px, 2.4vw, 24px);
          overflow: hidden;
          box-sizing: border-box;
          border: none;
          background: #1a1a1c;
          box-shadow:
            0 1px 2px rgba(0, 0, 0, 0.04),
            0 4px 12px rgba(0, 0, 0, 0.06),
            0 12px 32px rgba(0, 0, 0, 0.08),
            0 24px 48px rgba(0, 0, 0, 0.06);
        }

        .tokyo-gossip-map--embed .tokyo-gossip-map__frame {
          flex: 1;
          min-height: 200px;
          border-radius: 10px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
        }

        .tokyo-gossip-map__img {
          display: block;
          width: 100%;
          height: 100%;
          min-height: inherit;
          object-fit: cover;
          object-position: center;
          user-select: none;
          pointer-events: none;
        }

        .tokyo-gossip-map__spots {
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .tokyo-gossip-map__spot {
          position: absolute;
          width: 0;
          height: 0;
          transform: translate(-50%, -50%);
          pointer-events: none;
          z-index: 1;
        }

        .tokyo-gossip-map__spot--open {
          z-index: 8;
        }

        /* Circular hit target — fixed size; does not grow when tip is open */
        .tokyo-gossip-map__hotspot {
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -50%);
          pointer-events: auto;
          box-sizing: border-box;
          width: clamp(112px, 24vw, 168px);
          height: clamp(112px, 24vw, 168px);
          border-radius: 50%;
          background: transparent;
          cursor: inherit;
          outline: none;
        }

        .tokyo-gossip-map__hotspot:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.95);
          outline-offset: 3px;
        }

        .tokyo-map-influence {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          pointer-events: none;
        }

        .tokyo-map-influence__ring {
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: 50%;
          border: 3px solid rgba(255, 255, 255, 0.95);
          /* backgroundColor set per spot — plain tinted fill */
          box-shadow: inset 0 0 0 1px rgba(15, 23, 42, 0.14);
        }

        .tokyo-map-influence__ripples {
          position: absolute;
          inset: 0;
          z-index: 0;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
        }

        @keyframes tokyo-map-influence-ripple {
          0% {
            transform: translate(-50%, -50%) scale(0.06);
            opacity: 1;
          }
          40% {
            opacity: 0.62;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }

        .tokyo-map-influence__ripple {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          border-radius: 50%;
          border: 3px solid var(--tokyo-ripple-color, rgba(255, 255, 255, 0.95));
          transform: translate(-50%, -50%) scale(0.06);
          opacity: 0;
          animation: tokyo-map-influence-ripple 2.1s cubic-bezier(0.18, 0.75, 0.28, 1)
            infinite;
          filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.35));
          will-change: transform, opacity;
        }

        .tokyo-map-influence__ripple:nth-child(1) {
          animation-delay: 0s;
        }

        .tokyo-map-influence__ripple:nth-child(2) {
          animation-delay: 0.7s;
        }

        .tokyo-map-influence__ripple:nth-child(3) {
          animation-delay: 1.4s;
        }

        .tokyo-map-influence__dots {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
        }

        @keyframes tokyo-map-marker-pulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.45;
            transform: scale(0.85);
          }
        }

        .tokyo-map-influence__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.95);
          box-shadow: none;
          animation: tokyo-map-marker-pulse 1.35s ease-in-out infinite;
          will-change: opacity, transform;
        }

        .tokyo-map-influence__dot--1 {
          animation-delay: 0ms;
        }

        .tokyo-map-influence__dot--2 {
          animation-delay: 160ms;
        }

        .tokyo-map-influence__dot--3 {
          animation-delay: 320ms;
        }

        @media (prefers-reduced-motion: reduce) {
          .tokyo-map-influence__dot {
            animation: none;
            opacity: 1;
            transform: none;
          }

          .tokyo-map-influence__ripple {
            animation: none;
            opacity: 0;
          }
        }
      `}</style>
    </Root>
  );
}
