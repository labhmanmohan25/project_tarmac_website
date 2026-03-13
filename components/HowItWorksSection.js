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

export default function HowItWorksSection() {
  return (
    <section id="features" className="how-simple-section">
      <div className="how-simple-inner">
        <div
          className="how-simple-list"
          role="list"
          aria-label="Trip lifecycle phases"
        >
          {phases.map((phase) => (
            <article
              key={phase.number}
              className="how-simple-item"
              role="listitem"
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
        <p className="how-simple-subtitle app-type-body">
          From inspiration to booking, we've simplified every step so you can
          focus on enjoying the journey, not the planning.
        </p>
      </div>

      <style jsx>{`
        .how-simple-section {
          padding: 0 40px 88px;
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
          font-family: "Bebas Neue", "Impact", sans-serif;
          font-size: 46px;
          line-height: 1;
          letter-spacing: 0.01em;
        }

        .how-simple-heading {
          margin: 0;
          font-size: clamp(26px, 2.4vw, 38px);
          line-height: 1.02;
          color: #ecf4ff;
          white-space: pre-line;
          max-width: 8ch;
        }

        .how-simple-line {
          margin: 30px 0 0;
          color: #deebff;
          font-size: clamp(14px, 1.1vw, 16px);
          font-weight: 400;
          line-height: 1.6;
          position: relative;
          z-index: 3;
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
            font-size: 40px;
          }

          .how-simple-heading {
            font-size: clamp(22px, 7vw, 30px);
          }

          .how-simple-line {
            margin-top: 22px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
