import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";

const DEFAULT_CARD_WIDTH = 390;
const DEFAULT_CARD_GAP = 20;

function getVisibleCardCount(
  containerWidth,
  totalSlides,
  cardWidth = DEFAULT_CARD_WIDTH,
  cardGap = DEFAULT_CARD_GAP,
) {
  const canFit = (count) =>
    containerWidth >= count * cardWidth + (count - 1) * cardGap;

  if (totalSlides >= 5 && canFit(5)) return 5;
  if (totalSlides >= 3 && canFit(3)) return 3;
  return 1;
}

export default function PhaseCarousel({
  slides,
  cardWidth = DEFAULT_CARD_WIDTH,
  cardGap = DEFAULT_CARD_GAP,
  renderCard,
  autoplaySpeed = 2200,
  speed = 650,
  showDots = false,
  showArrows = false,
  pauseOnHover = true,
  autoplay = true,
  minHeight = "293px",
  infinite = true,
  initialSlide = 0,
  mobileCardMaxHeight = 320,
}) {
  const containerRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);

  if (!slides.length) {
    return null;
  }

  useEffect(() => {
    const updateVisibleCards = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      setContainerWidth(width);
      setVisibleCards(
        getVisibleCardCount(width, slides.length, cardWidth, cardGap),
      );
    };

    updateVisibleCards();

    const observer = new ResizeObserver(updateVisibleCards);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [slides.length, cardWidth, cardGap]);

  const settings = {
    dots: showDots,
    arrows: showArrows,
    infinite: infinite,
    speed: speed,
    slidesToShow: visibleCards,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    pauseOnHover: pauseOnHover,
    swipeToSlide: true,
    adaptiveHeight: false,
    centerMode: visibleCards === 1,
    centerPadding: visibleCards === 1 ? "12px" : "0px",
    initialSlide: initialSlide,
  };

  const computedCardWidth = useMemo(() => {
    if (!containerWidth) return cardWidth;

    if (containerWidth <= 480 && visibleCards === 1) {
      // Leave room for slick center padding and slide gutters on phone widths.
      return Math.max(220, Math.min(cardWidth, containerWidth - 28));
    }

    if (containerWidth <= 768 && visibleCards === 1) {
      return Math.max(240, Math.min(cardWidth, containerWidth - 24));
    }

    return cardWidth;
  }, [containerWidth, visibleCards, cardWidth]);

  const slideStyle = useMemo(
    () => ({
      width: `${computedCardWidth}px`,
      maxWidth: "100%",
    }),
    [computedCardWidth],
  );

  const getCardContent = (slide, index) => {
    if (renderCard) {
      return renderCard(slide, index);
    }

    if (typeof slide?.renderCard === "function") {
      return slide.renderCard(slide, index);
    }

    return (
      <div
        className="phase-default-card"
        style={{
          width: "100%",
          minHeight: minHeight,
          background: "white",
          border: "1.5px solid #e5e0d8",
          borderRadius: "16px",
          padding: "24px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <div style={{ fontSize: "32px" }}>{slide.icon}</div>

        <div>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#1c1c1e",
              marginBottom: "8px",
              fontFamily: '"DM Sans", sans-serif',
              lineHeight: 1.25,
            }}
          >
            {slide.title}
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "#999",
              fontFamily: '"DM Sans", sans-serif',
              lineHeight: 1.5,
            }}
          >
            {slide.description}
          </p>
        </div>

        <div
          style={{
            marginTop: "auto",
            paddingTop: "16px",
            borderTop: "1px solid #f0ede8",
          }}
        >
          <button
            style={{
              width: "100%",
              padding: "10px",
              background: "transparent",
              border: "1.5px solid #1c1c1e",
              borderRadius: "8px",
              color: "#1c1c1e",
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: '"DM Sans", sans-serif',
              cursor: "pointer",
            }}
          >
            Answer
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="phase-slick-carousel"
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "28px auto 0",
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={`${slide.title || slide.name || index}-${index}`}
            style={slideStyle}
          >
            {getCardContent(slide, index)}
          </div>
        ))}
      </Slider>

      <style jsx>{`
        @media (max-width: 480px) {
          .phase-slick-carousel :global(.slick-slide > div) {
            max-width: 100%;
          }

          .phase-default-card {
            max-height: ${mobileCardMaxHeight}px !important;
          }
        }
      `}</style>
    </div>
  );
}
