import { useEffect, useRef, useState } from "react";

const phases = [
  {
    number: "01",
    title: "Plan &\nBook Easily",
    description:
      "Checks everyone's calendars, runs the group poll, and builds the plan without tab chaos. Book stays, activities, and transport in one thread.",
  },
  {
    number: "02",
    title: "Travel\nReal-Time",
    description:
      "Your agent tracks time, weather, and location in real time. Missed a stop or delayed flight? It reroutes instantly and keeps everyone synced.",
  },
  {
    number: "03",
    title: "Wrap Up\nStress-Free",
    description:
      "Expenses are grouped, split, and finalized from the trip chat. No spreadsheets, no awkward follow-ups, and next-trip recommendations are ready.",
  },
];

export default function HowItWorksSection({ as: Wrapper = "section" }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionNode = sectionRef.current;

    if (!sectionNode) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(sectionNode);

    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper id="features" className={`how-simple-section ${isVisible ? "is-visible" : ""}`}>
      <div ref={sectionRef} className="how-simple-inner">
        <div
          className="how-simple-list"
          role="list"
          aria-label="Trip lifecycle phases"
        >
          {phases.map((phase, index) => (
            <article
              key={phase.number}
              className="how-simple-item"
              role="listitem"
              style={{ "--card-index": index }}
            >
              <div className="how-simple-ticket-top">
                <span className="how-simple-number">{phase.number}</span>
                <h3 className="how-simple-heading app-type-card-heading">
                  {phase.title}
                </h3>
              </div>

              <p className="how-simple-line app-type-body">{phase.description}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .how-simple-section {
          padding: 0 40px 0px;
          background: #eeebe6;
        }

        .how-simple-inner {
          max-width: 1180px;
          margin: 0 auto;
        }

        .how-simple-title {
          margin: 0;
          text-align: center;
          font-size: clamp(38px, 6vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.01em;
          color: #0d0d0d;
        }

        .how-simple-subtitle {
          margin: 24px auto 0;
          font-size: clamp(16px, 1.9vw, 24px);
          font-weight: 400;
          line-height: 1.55;
          text-align: center;
          color: #3f3f44;
          max-width: 52ch;
        }

        .how-simple-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .how-simple-item {
          position: relative;
          background: #1473eb;
          border-radius: 16px;
          padding: 34px 30px 30px;
          display: flex;
          flex-direction: column;
          min-height: 325px;
          overflow: hidden;
          box-shadow: 0 20px 28px rgba(7, 38, 73, 0.18);
        }

        .how-simple-number,
        .how-simple-heading,
        .how-simple-line {
          opacity: 0;
          transform: translateY(28px);
          will-change: transform, opacity;
        }

        .how-simple-section.is-visible .how-simple-number,
        .how-simple-section.is-visible .how-simple-heading,
        .how-simple-section.is-visible .how-simple-line {
          animation: how-simple-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .how-simple-section.is-visible .how-simple-number {
          animation-delay: calc(var(--card-index) * 140ms);
        }

        .how-simple-section.is-visible .how-simple-heading {
          animation-delay: calc((var(--card-index) * 140ms) + 90ms);
        }

        .how-simple-section.is-visible .how-simple-line {
          animation-delay: calc((var(--card-index) * 140ms) + 190ms);
        }

        .how-simple-item::before,
        .how-simple-item::after {
          content: "";
          position: absolute;
          top: 8px;
          bottom: 8px;
          width: 14px;
          pointer-events: none;
          background-image: radial-gradient(
            circle,
            #e7e7e7 6px,
            transparent 6.5px
          );
          background-size: 14px 24px;
          background-repeat: repeat-y;
          z-index: 2;
        }

        .how-simple-item::before {
          left: -7px;
        }

        .how-simple-item::after {
          right: -7px;
        }

        .how-simple-ticket-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          position: relative;
          z-index: 3;
        }

        .how-simple-number {
          flex: 0 0 auto;
          min-width: 82px;
          height: 82px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: #f47ec8;
          color: #f2f8ff;
          font-family: var(--font-hero-subheading);
          font-size: clamp(28px, 2.4vw, 40px);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: 0.01em;
        }

        .how-simple-heading {
          margin: 0;
          color: #ecf4ff;
          white-space: pre-line;
          max-width: 8ch;
        }

        .how-simple-line {
          margin: 30px 0 0;
          color: #deebff;
          font-size: 16px;
          line-height: 1.7;
          position: relative;
          z-index: 3;
        }

        @keyframes how-simple-rise {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .how-simple-number,
          .how-simple-heading,
          .how-simple-line {
            opacity: 1;
            transform: none;
            animation: none;
          }
        }

        @media (max-width: 1100px) {
          .how-simple-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .how-simple-section {
            padding: 0 16px 64px;
          }

          .how-simple-subtitle {
            margin-top: 18px;
          }

          .how-simple-list {
            margin-top: 40px;
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .how-simple-item {
            min-height: 0;
            padding: 24px 22px;
          }

          .how-simple-number {
            min-width: 72px;
            height: 72px;
            font-size: 34px;
          }

          .how-simple-heading {
            max-width: 9ch;
            font-size: clamp(22px, 6.4vw, 30px);
            line-height: 1.05;
          }

          .how-simple-line {
            margin-top: 22px;
            font-size: 16px;
            line-height: 1.7;
          }
        }

        @media (max-width: 480px) {
          .how-simple-item {
            padding: 20px 18px;
          }

          .how-simple-ticket-top {
            gap: 12px;
          }

          .how-simple-number {
            min-width: 62px;
            height: 62px;
            font-size: 30px;
          }

          .how-simple-heading {
            font-size: clamp(22px, 8vw, 26px);
          }

          .how-simple-line {
            margin-top: 18px;
            font-size: 16px;
            line-height: 1.7;
          }
        }
      `}</style>
    </Wrapper>
  );
}
