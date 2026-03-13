import { useEffect, useMemo, useRef, useState } from "react";

const points = [
  {
    id: "delays",
    title: "Delayed 🛩️",
    //flights
    x: 18,
    y: 31,
    mx: 21,
    my: 30,
    mRotate: -4,
    rotate: -3,
    copy:
      "Tarmac checks alternatives and reshuffles your timeline before you even see the delay alert.",
  },
  {
    id: "viral-spots",
    title: "📷 nearby spots",
    //viral
    x: 83,
    y: 32,
    mx: 77,
    my: 29,
    mRotate: 3,
    rotate: 2,
    copy:
      "We highlight Instagrammable and viral spots nearby with short detours that still fit your route.",
  },
  {
    id: "food-decisions",
    title: "🥘 decisions",
    //food
    x: 30,
    y: 53,
    mx: 29,
    my: 46,
    mRotate: -3,
    rotate: -2,
    copy:
      "We gather everyone's preferences, constraints, and budget, then return one shortlist the group can agree on.",
  },
  {
    id: "hidden-events",
    title: "Hidden local 💎",
    //events
    x: 76,
    y: 55,
    mx: 72,
    my: 47,
    mRotate: 2,
    rotate: 3,
    copy:
      "We suggest local events you did not know about, matched to your vibe so you end up loving them.",
  },
  {
    id: "late-checkin",
    title: "Late 🏨 check-in",
    //hotel
    x: 13,
    y: 75,
    mx: 19,
    my: 64,
    mRotate: -2,
    rotate: -1,
    copy:
      "We line up luggage drop points, nearby cafes, and low-friction time fillers until your room is ready.",
  },
  {
    id: "language-help",
    title: "🈳️ barrier",
    //language
    x: 48,
    y: 79,
    mx: 50,
    my: 69,
    mRotate: 1,
    rotate: 1,
    copy:
      "Real-time phrase support helps you ask naturally and avoid awkward back-and-forth moments.",
  },
  {
    id: "budget-alerts",
    title: "💳 drift",
    //budget
    x: 74,
    y: 79,
    mx: 71,
    my: 67,
    mRotate: -2,
    rotate: -2,
    copy:
      "We flag budget drift early and suggest lower-cost swaps without flattening the trip experience.",
  },
  {
    id: "rain-save",
    title: "⛈️ proof plans",
    //rain
    x: 56,
    y: 37,
    mx: 50,
    my: 84,
    mRotate: 2,
    rotate: 2,
    copy:
      "Tarmac pivots to indoor alternatives nearby and keeps transport, timing, and bookings synced.",
  },
];

const arrowAngleOrder = [
  "delays",
  "late-checkin",
  "food-decisions",
  "language-help",
  "rain-save",
  "hidden-events",
  "budget-alerts",
  "viral-spots",
];

export default function BentoGridSection() {
  const [activePointId, setActivePointId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });
  const [pointBoxSizes, setPointBoxSizes] = useState({ desktop: {}, mobile: {} });
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const pointItemRefs = useRef({ desktop: {}, mobile: {} });

  const activePoint = useMemo(
    () => points.find((point) => point.id === activePointId) || null,
    [activePointId]
  );

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setActivePointId(null);
      }
    };

    if (activePointId) {
      document.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activePointId]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.28,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(sectionEl);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    const updateSize = () => {
      setCanvasSize({
        width: canvasEl.clientWidth || 0,
        height: canvasEl.clientHeight || 0,
      });
    };

    updateSize();

    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(canvasEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const nextDesktop = {};
    const nextMobile = {};

    points.forEach((point) => {
      const desktopEl = pointItemRefs.current.desktop[point.id];
      const mobileEl = pointItemRefs.current.mobile[point.id];

      if (desktopEl) {
        const rect = desktopEl.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          nextDesktop[point.id] = { halfW: rect.width / 2, halfH: rect.height / 2 };
        }
      }

      if (mobileEl) {
        const rect = mobileEl.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          nextMobile[point.id] = { halfW: rect.width / 2, halfH: rect.height / 2 };
        }
      }
    });

    setPointBoxSizes((prev) => {
      const sameDesktop = points.every((point) => {
        const prevSize = prev.desktop[point.id];
        const nextSize = nextDesktop[point.id];
        if (!prevSize && !nextSize) return true;
        if (!prevSize || !nextSize) return false;
        return prevSize.halfW === nextSize.halfW && prevSize.halfH === nextSize.halfH;
      });

      const sameMobile = points.every((point) => {
        const prevSize = prev.mobile[point.id];
        const nextSize = nextMobile[point.id];
        if (!prevSize && !nextSize) return true;
        if (!prevSize || !nextSize) return false;
        return prevSize.halfW === nextSize.halfW && prevSize.halfH === nextSize.halfH;
      });

      if (sameDesktop && sameMobile) return prev;

      return {
        desktop: nextDesktop,
        mobile: nextMobile,
      };
    });
  }, [canvasSize.width, canvasSize.height]);

  const setPointRef = (mode, id) => (element) => {
    pointItemRefs.current[mode][id] = element;
  };

  const getArrowPath = (point, isMobile = false) => {
    const width = canvasSize.width;
    const height = canvasSize.height;
    const targetX = isMobile ? point.mx : point.x;
    const targetY = isMobile ? point.my : point.y;
    const startY = isMobile ? 11 : 10.5;
    const pointIndex = arrowAngleOrder.indexOf(point.id);
    const spreadStart = isMobile ? 128 : 132;
    const spreadEnd = isMobile ? 52 : 48;
    const angleStep =
      arrowAngleOrder.length > 1
        ? (spreadEnd - spreadStart) / (arrowAngleOrder.length - 1)
        : 0;
    const launchAngle = ((spreadStart + angleStep * pointIndex) * Math.PI) / 180;
    const launchLength = isMobile ? 12 : 15;
    const c1x = 50 + Math.cos(launchAngle) * launchLength;
    const c1y = startY + Math.sin(launchAngle) * launchLength;

    const c2x = c1x + (targetX - c1x) * 0.74;
    const c2y = c1y + (targetY - c1y) * 0.74;

    if (!width || !height) {
      return `M 50 ${startY} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${targetX} ${targetY}`;
    }

    const centerPx = {
      x: (targetX / 100) * width,
      y: (targetY / 100) * height,
    };

    const startPx = {
      x: 0.5 * width,
      y: (startY / 100) * height,
    };

    const vecX = startPx.x - centerPx.x;
    const vecY = startPx.y - centerPx.y;
    const length = Math.hypot(vecX, vecY) || 1;
    const dirX = vecX / length;
    const dirY = vecY / length;

    const sizeMap = isMobile ? pointBoxSizes.mobile : pointBoxSizes.desktop;
    const fallbackHalfW = isMobile ? 54 : 114;
    const fallbackHalfH = isMobile ? 18 : 60;
    const pointSize = sizeMap[point.id];
    const halfW = pointSize?.halfW || fallbackHalfW;
    const halfH = pointSize?.halfH || fallbackHalfH;
    const edgeTx = Math.abs(dirX) > 0.001 ? halfW / Math.abs(dirX) : Number.POSITIVE_INFINITY;
    const edgeTy = Math.abs(dirY) > 0.001 ? halfH / Math.abs(dirY) : Number.POSITIVE_INFINITY;
    const toEdge = Math.min(edgeTx, edgeTy);

    const gapPx = 5;
    const endpointPx = {
      x: centerPx.x + dirX * (toEdge + gapPx),
      y: centerPx.y + dirY * (toEdge + gapPx),
    };

    const endX = (endpointPx.x / width) * 100;
    const endY = (endpointPx.y / height) * 100;

    const endAlignedC2x = c1x + (endX - c1x) * 0.74;
    const endAlignedC2y = c1y + (endY - c1y) * 0.74;

    return `M 50 ${startY} C ${c1x} ${c1y}, ${endAlignedC2x} ${endAlignedC2y}, ${endX} ${endY}`;
  };

  return (
    <section
      id="smart-assists"
      ref={sectionRef}
      className="points-section"
      style={{ background: "#eeebe6", padding: "0 clamp(16px, 4vw, 40px)" }}
    >
      <div className="points-shell">
        <div className="points-canvas" ref={canvasRef}>
          <header className="points-header">
            <h2 className="app-title-font app-type-heading points-title">
              ...tarmac <span className="handles-word">handles</span> the chaos
            </h2>
          </header>

          <svg className="points-arrows" viewBox="0 0 100 100" preserveAspectRatio="none">
            {points.map((point) => (
              <path
                key={`line-${point.id}`}
                d={getArrowPath(point, false)}
                className="points-line"
              />
            ))}
          </svg>

          <svg
            className="points-arrows-mobile"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {points.map((point) => (
              <path
                key={`mobile-line-${point.id}`}
                d={getArrowPath(point, true)}
                className="points-line-mobile"
              />
            ))}
          </svg>

          <ul className="points-list">
            {points.map((point, index) => (
              <li
                key={point.id}
                className={`points-item ${isVisible ? "is-visible" : ""}`}
                ref={setPointRef("desktop", point.id)}
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  "--point-rotate": `${point.rotate}deg`,
                  "--point-delay": `${index * 90}ms`,
                }}
              >
                <h3 className="points-item-title">{point.title}</h3>
                <p className="points-item-copy">{point.copy}</p>
              </li>
            ))}
          </ul>

          <ul className="points-pill-list">
            {points.map((point, index) => (
              <li
                key={`mobile-pill-${point.id}`}
                className={`points-pill ${isVisible ? "is-visible" : ""}`}
                ref={setPointRef("mobile", point.id)}
                style={{
                  left: `${point.mx}%`,
                  top: `${point.my}%`,
                  "--point-rotate": `${point.mRotate}deg`,
                  "--point-delay": `${index * 80}ms`,
                }}
              >
                <button
                  type="button"
                  className="points-pill-button"
                  onClick={() => setActivePointId(point.id)}
                >
                  {point.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {activePoint && (
        <div
          className="points-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="points-modal-title"
          onClick={() => setActivePointId(null)}
        >
          <div className="points-modal" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="points-modal-close"
              onClick={() => setActivePointId(null)}
              aria-label="Close details"
            >
              x
            </button>
            <h3 className="points-modal-title" id="points-modal-title">
              {activePoint.title}
            </h3>
            <p className="points-modal-copy">{activePoint.copy}</p>
          </div>
        </div>
      )}

      <style jsx>{`
        .points-shell {
          width: 90vw;
          max-width: 90vw;
          margin: 0 auto;
        }

        .points-header {
          position: absolute;
          top: 18px;
          left: 0;
          right: 0;
          z-index: 4;
          text-align: center;
        }

        .points-title {
          margin: 0;
          font-size: clamp(30px, 3.7vw, 44px);
          line-height: 1.08;
          color: #1c1c1e;
        }

        .handles-word {
          position: relative;
          color: #5f5344;
          text-decoration: underline;
          text-decoration-color: rgba(95, 83, 68, 0.3);
          text-underline-offset: 0.16em;
        }

        .points-canvas {
          position: relative;
          height: clamp(700px, 78vh, 860px);
          border-radius: 24px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(220, 209, 191, 0.52), transparent 48%),
            linear-gradient(180deg, #f4f1eb 0%, #efe9df 100%);
          border: 1px solid #ddd6ca;
        }

        .points-arrows {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .points-arrows-mobile {
          display: none;
        }

        .points-line {
          fill: none;
          stroke: #b9ad97;
          stroke-width: 0.28;
          stroke-linecap: round;
          stroke-dasharray: 2.2 2.2;
          opacity: 0.85;
        }

        .points-list {
          list-style: none;
          padding: 0;
          margin: 0;
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .points-pill-list {
          display: none;
          list-style: none;
          margin: 0;
          padding: 0;
          position: absolute;
          inset: 0;
          z-index: 2;
        }

        .points-pill {
          position: absolute;
          white-space: nowrap;
          opacity: 0;
          transform: translate(-50%, calc(-50% + 20px)) scale(0.9) rotate(var(--point-rotate));
          transition:
            opacity 420ms ease,
            transform 520ms cubic-bezier(0.2, 0.9, 0.24, 1);
          transition-delay: var(--point-delay, 0ms);
        }

        .points-pill.is-visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(var(--point-rotate));
        }

        .points-pill-button {
          border: 1px solid #d9d0c2;
          background: rgba(251, 250, 247, 0.95);
          box-shadow: 0 8px 18px rgba(43, 33, 18, 0.1);
          color: #2a2825;
          border-radius: 999px;
          padding: 7px 12px;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.01em;
          cursor: pointer;
          transition: transform 120ms ease, box-shadow 120ms ease;
        }

        .points-pill-button:hover,
        .points-pill-button:focus-visible {
          transform: translateY(-1px);
          box-shadow: 0 11px 22px rgba(43, 33, 18, 0.14);
          outline: none;
        }

        .points-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 60;
          background: rgba(27, 24, 20, 0.44);
          backdrop-filter: blur(1px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 14px;
        }

        .points-modal {
          width: min(100%, 420px);
          background: #fbfaf7;
          border: 1px solid #d9d0c2;
          border-radius: 16px;
          box-shadow: 0 18px 34px rgba(27, 21, 14, 0.22);
          padding: 16px 14px 14px;
          position: relative;
        }

        .points-modal-close {
          position: absolute;
          top: 8px;
          right: 10px;
          border: none;
          background: transparent;
          color: #5c5347;
          font-size: 20px;
          line-height: 1;
          padding: 2px;
          cursor: pointer;
        }

        .points-modal-title {
          margin: 0 22px 8px 0;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: 22px;
          line-height: 1.1;
          color: #1d1b1a;
        }

        .points-modal-copy {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          line-height: 1.45;
          color: #3e3d43;
        }

        .points-line-mobile {
          fill: none;
          stroke: #b9ad97;
          stroke-width: 0.3;
          stroke-linecap: round;
          stroke-dasharray: 2.2 2.2;
          opacity: 0.82;
        }

        .points-item {
          position: absolute;
          z-index: 1;
          width: clamp(200px, 23vw, 258px);
          background: #fbfaf7;
          border: 1px solid #ddd6ca;
          border-radius: 14px;
          padding: 14px 16px;
          box-shadow: 0 10px 24px rgba(43, 33, 18, 0.08);
          opacity: 0;
          transform: translate(-50%, calc(-50% + 36px)) scale(0.9) rotate(var(--point-rotate));
          transition:
            opacity 480ms ease,
            transform 620ms cubic-bezier(0.2, 0.9, 0.24, 1),
            box-shadow 180ms ease;
          transition-delay: var(--point-delay, 0ms);
        }

        .points-item.is-visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1) rotate(var(--point-rotate));
        }

        .points-item:hover {
          z-index: 3;
          transform: translate(-50%, -50%) rotate(0deg) !important;
          box-shadow: 0 14px 30px rgba(43, 33, 18, 0.14);
        }

        .points-item-title {
          margin: 0 0 6px;
          font-family: "Bricolage Grotesque", sans-serif;
          font-size: clamp(22px, 2vw, 28px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #1d1b1a;
        }

        .points-item-copy {
          margin: 0;
          font-family: "DM Sans", sans-serif;
          font-size: 15px;
          line-height: 1.48;
          color: #3e3d43;
        }

        @media (max-width: 900px) {
          .points-section {
            padding: 0 16px !important;
          }

          .points-canvas {
            height: clamp(420px, 112vw, 560px);
            overflow: hidden;
            padding: 0;
          }

          .points-header {
            position: absolute;
            top: 14px;
            left: 10px;
            right: 10px;
            margin: 0;
          }

          .points-title {
            font-size: clamp(23px, 8vw, 31px);
          }

          .points-arrows {
            display: none;
          }

          .points-arrows-mobile {
            position: absolute;
            display: block;
            inset: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            pointer-events: none;
          }

          .points-list {
            display: none;
          }

          .points-pill-list {
            display: block;
          }

          .points-modal {
            width: min(100%, 440px);
          }
        }

        @media (min-width: 901px) {
          .points-modal-backdrop {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
