import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick";

const DEFAULT_CARD_WIDTH = 390;
const DEFAULT_CARD_GAP = 20;
const PHONE_MOCKUP_CARD_GAP = 30;

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
  showPhoneMockup = false,
  carouselHeight = 560,
}) {
  const containerRef = useRef(null);
  const sliderWrapRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState(1);
  const [containerWidth, setContainerWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const [phoneAspectRatio, setPhoneAspectRatio] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [cardBottom, setCardBottom] = useState(null);

  const effectiveCardGap = showPhoneMockup ? PHONE_MOCKUP_CARD_GAP : cardGap;
  const halfGap = Math.round(effectiveCardGap / 2);

  const normalizedCarouselHeight = useMemo(() => {
    if (typeof carouselHeight === "number") {
      return `${carouselHeight}px`;
    }
    return carouselHeight;
  }, [carouselHeight]);

  if (!slides.length) {
    return null;
  }

  useEffect(() => {
    const updateVisibleCards = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      setContainerWidth(width);
      setContainerHeight(height);
      setVisibleCards(
        getVisibleCardCount(width, slides.length, cardWidth, effectiveCardGap),
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
  }, [slides.length, cardWidth, effectiveCardGap]);

  const shouldUseCenterMode = showPhoneMockup || visibleCards === 1;

  useEffect(() => {
    if (!showPhoneMockup) return;

    const img = new Image();
    img.src = "/phone_mockup.png";
    img.onload = () => {
      if (img.naturalHeight > 0) {
        setPhoneAspectRatio(img.naturalWidth / img.naturalHeight);
      }
    };
  }, [showPhoneMockup]);

  const phoneWidth = useMemo(() => {
    if (!showPhoneMockup || !containerHeight) return 0;
    return containerHeight * phoneAspectRatio;
  }, [showPhoneMockup, containerHeight, phoneAspectRatio]);

  const settings = useMemo(
    () => ({
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
      centerMode: shouldUseCenterMode,
      centerPadding: shouldUseCenterMode && !showPhoneMockup ? "12px" : "0px",
      initialSlide: initialSlide,
      beforeChange: (_current, next) => setCurrentSlide(next),
    }),
    [
      showDots,
      showArrows,
      infinite,
      speed,
      visibleCards,
      shouldUseCenterMode,
      autoplay,
      autoplaySpeed,
      pauseOnHover,
      initialSlide,
      showPhoneMockup,
    ],
  );

  // Which slide is visually centered
  const centerSlideIndex = useMemo(() => {
    const raw = shouldUseCenterMode
      ? currentSlide
      : currentSlide + Math.floor(visibleCards / 2);
    return ((raw % slides.length) + slides.length) % slides.length;
  }, [currentSlide, shouldUseCenterMode, visibleCards, slides.length]);

  const computedCardWidth = useMemo(() => {
    if (showPhoneMockup && phoneWidth) {
      // Keep cards a touch larger inside the mock phone while preserving side peek.
      return Math.max(132, Math.round(phoneWidth - 38));
    }

    if (!containerWidth) return cardWidth;

    if (containerWidth <= 480 && visibleCards === 1) {
      // Leave room for slick center padding and slide gutters on phone widths.
      return Math.max(220, Math.min(cardWidth, containerWidth - 28));
    }

    if (containerWidth <= 768 && visibleCards === 1) {
      return Math.max(240, Math.min(cardWidth, containerWidth - 24));
    }

    return cardWidth;
  }, [showPhoneMockup, phoneWidth, containerWidth, visibleCards, cardWidth]);

  // Measure the bottom edge of the active card so chat anchors just below it
  useEffect(() => {
    const measure = () => {
      if (!sliderWrapRef.current || !containerRef.current) return;
      const slide = sliderWrapRef.current.querySelector(
        ".slick-active:not(.slick-cloned)"
      );
      if (!slide) return;
      const slideRect = slide.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      setCardBottom(slideRect.bottom - containerRect.top);
    };
    const t = setTimeout(measure, 80);
    return () => clearTimeout(t);
  }, [centerSlideIndex, computedCardWidth]);

  const slideStyle = useMemo(
    () => ({
      width: `${computedCardWidth}px`,
      ...(showPhoneMockup ? {} : { maxWidth: "100%" }),
    }),
    [computedCardWidth, showPhoneMockup],
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
        ...(showPhoneMockup ? { height: normalizedCarouselHeight } : {}),
        margin: "0 auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
      {/* Group name label — only shown when phone mockup is visible */}
      {showPhoneMockup && (
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
          textAlign: "center",
          pointerEvents: "none",
          height: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: "300",
            color: "#1c1c1e",
            fontFamily: '"DM Sans", sans-serif',
            whiteSpace: "nowrap",
            letterSpacing: "0px",
          }}
        >
          Thailand trip with the gang
        </span>
      </div>
      )}

      <div ref={sliderWrapRef} style={{ width: "100%" }}>
      <Slider {...settings} style={{ margin: "0 auto", ...(showPhoneMockup ? { marginTop: "100px" } : {}) }}>
        {slides.map((slide, index) => (
          <div
            key={`${slide.title || slide.name || index}-${index}`}
            style={slideStyle}
          >
            {getCardContent(slide, index)}
          </div>
        ))}
      </Slider>
      </div>

      {/* Chat bubbles — anchored just below the card, left/right alternating */}
      {slides[centerSlideIndex]?.chatMessages?.length > 0 && (
        <div
          key={`chat-${centerSlideIndex}`}
          style={{
            position: "absolute",
            top: cardBottom != null ? `${cardBottom + 12}px` : "420px",
            left: "50%",
            transform: "translateX(-50%)",
            width: `${computedCardWidth}px`,
            boxSizing: "border-box",
            padding: "0 20px",
            display: "flex",
            flexDirection: "column",
            gap: "7px",
            zIndex: 3,
            pointerEvents: "none",
          }}
        >
          {slides[centerSlideIndex].chatMessages.map((msg, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              <div
                className="chat-bubble-msg"
                style={{ animationDelay: `${0.5 + i * 0.85}s` }}
              >
                <span className="chat-bubble-name">{msg.name}</span>
                <span className="chat-bubble-text">{msg.text}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {showPhoneMockup && (
      <div
        className="phase-chat-composer"
        style={{ width: `${computedCardWidth}px` }}
      >
        <button type="button" className="phase-chat-icon-btn" aria-label="Attach file">
          <span aria-hidden="true">📎</span>
        </button>
        <input
          type="text"
          className="phase-chat-input"
          placeholder="Type a message"
          aria-label="Type a message"
        />
        <button type="button" className="phase-chat-icon-btn" aria-label="Voice input">
          <span aria-hidden="true">🎤</span>
        </button>
        <button type="button" className="phase-chat-send-btn" aria-label="Send message">
          <span aria-hidden="true">➤</span>
        </button>
      </div>
      )}
      </div>

      {showPhoneMockup && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            height: containerHeight ? `${containerHeight}px` : normalizedCarouselHeight,
            width: "auto",
            maxWidth: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/phone_mockup.png"
            alt=""
            style={{ width: "auto", height: "100%", maxWidth: "none", display: "block" }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes chatBubbleIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .phase-slick-carousel :global(.chat-bubble-msg) {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: #fff;
          border: 1px solid #ebe6de;
          border-radius: 20px;
          padding: 5px 12px;
          width: fit-content;
          max-width: 100%;
          box-shadow: 0 1px 4px rgba(0,0,0,0.06);
          animation-name: chatBubbleIn;
          animation-duration: 0.35s;
          animation-timing-function: ease;
          animation-fill-mode: both;
        }

        .phase-slick-carousel :global(.chat-bubble-name) {
          font-size: 11px;
          font-weight: 600;
          color: #1c1c1e;
          font-family: "DM Sans", sans-serif;
          flex-shrink: 0;
        }

        .phase-slick-carousel :global(.chat-bubble-text) {
          font-size: 11px;
          color: #666;
          font-family: "DM Sans", sans-serif;
        }

        .phase-chat-composer {
          position: absolute;
          left: 50%;
          bottom: 36px;
          transform: translateX(-50%);
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 20px;
          box-sizing: border-box;
          pointer-events: auto;
        }

        .phase-chat-input {
          flex: 1;
          min-width: 0;
          border: 1px solid #d5cbbe;
          border-radius: 999px;
          padding: 8px 12px;
          background: #fffdf9;
          color: #1c1c1e;
          font-family: "DM Sans", sans-serif;
          font-size: 11px;
          outline: none;
        }

        .phase-chat-input::placeholder {
          color: #8f8578;
        }

        .phase-chat-icon-btn,
        .phase-chat-send-btn {
          border: none;
          border-radius: 50%;
          font-family: "DM Sans", sans-serif;
          font-size: 12px;
          font-weight: 700;
          width: 28px;
          height: 28px;
          padding: 0;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: default;
          flex-shrink: 0;
        }

        .phase-chat-icon-btn {
          background: #e7dfd2;
          color: #574d3f;
          box-shadow: 0 4px 10px rgba(28, 28, 30, 0.12);
        }

        .phase-chat-send-btn {
          background: #1c1c1e;
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(28, 28, 30, 0.18);
        }

        .phase-slick-carousel :global(.slick-slider) {
          width: 100%;
        }

        .phase-slick-carousel :global(.slick-list) {
          width: 100%;
          margin: 0 !important;
          overflow: visible;
        }

        .phase-slick-carousel :global(.slick-slide) {
          padding: 0 ${halfGap}px !important;
          box-sizing: border-box;
        }

        .phase-slick-carousel :global(.slick-track) {
          display: flex;
          align-items: flex-start;
        }

        @media (max-width: 480px) {
          .phase-slick-carousel :global(.slick-slide > div) {
            max-width: 100%;
          }

          .phase-default-card {
            max-height: ${mobileCardMaxHeight}px !important;
          }

          .phase-chat-composer {
            bottom: 28px;
            gap: 5px;
            padding: 0 14px;
          }

          .phase-chat-input {
            font-size: 10px;
            padding: 7px 10px;
          }

          .phase-chat-icon-btn,
          .phase-chat-send-btn {
            font-size: 11px;
            width: 26px;
            height: 26px;
          }
        }
      `}</style>
    </div>
  );
}
