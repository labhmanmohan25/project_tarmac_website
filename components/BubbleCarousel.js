export default function BubbleCarousel({ items = [] }) {
  const loopItems = [...items, ...items];

  return (
    <div className="bubble-carousel" aria-label="Iconic destinations carousel">
      <div className="bubble-track-wrap">
        <div className="bubble-track">
          {loopItems.map((item, index) => (
            <article
              key={`${item.landmark}-${index}`}
              className="bubble-item"
              aria-label={`${item.landmark}, ${item.country}`}
            >
              <div
                className="bubble-image"
                style={{ backgroundImage: `url(${item.image})` }}
                role="img"
                aria-label={`${item.landmark} in ${item.country}`}
              />
              <p className="bubble-label">{item.landmark}</p>
              <p className="bubble-country">{item.country}</p>
            </article>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bubble-carousel {
          position: relative;
          width: 100%;
          padding: 6px 0 10px;
        }

        .bubble-track-wrap {
          overflow: hidden;
          width: 100%;
          padding: 14px 0 6px;
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }

        .bubble-track {
          display: flex;
          width: max-content;
          gap: 18px;
          animation: bubble-marquee 32s linear infinite;
          will-change: transform;
        }

        .bubble-item {
          width: 176px;
          min-width: 176px;
          text-align: center;
          color: #1c1c1e;
        }

        .bubble-image {
          width: 176px;
          height: 176px;
          border-radius: 999px;
          background-size: cover;
          background-position: center;
          border: 4px solid rgba(255, 255, 255, 0.86);
          box-shadow:
            0 12px 26px rgba(0, 0, 0, 0.16),
            0 0 0 1px rgba(28, 28, 30, 0.1);
        }

        .bubble-label {
          margin-top: 10px;
          font-size: 13px;
          font-weight: 700;
          line-height: 1.2;
          font-family: "DM Sans", sans-serif;
        }

        .bubble-country {
          margin-top: 3px;
          font-size: 11px;
          color: #7f7f81;
          font-family: "DM Sans", sans-serif;
        }

        @keyframes bubble-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .bubble-track {
            gap: 14px;
            animation-duration: 24s;
          }

          .bubble-item {
            width: 136px;
            min-width: 136px;
          }

          .bubble-image {
            width: 136px;
            height: 136px;
            border-width: 3px;
          }

          .bubble-label {
            margin-top: 8px;
            font-size: 12px;
          }

          .bubble-country {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
