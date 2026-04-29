"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/**
 * Looping stock video for feature cards.
 * Sources: Mixkit (https://mixkit.co) — free license per clip page.
 * Videos load only when the card is near the viewport to avoid 5× parallel MP4 downloads on first paint.
 */
export default function FeatureCardVideo({ src, poster, label }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [mountVideo, setMountVideo] = useState(false);

  useEffect(() => {
    const root = containerRef.current;
    if (!root || mountVideo) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMountVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px", threshold: 0.01 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, [mountVideo]);

  useLayoutEffect(() => {
    const el = videoRef.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      try {
        el.currentTime = 0;
      } catch {
        /* ignore */
      }
    }
  }, [src, mountVideo]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        el.pause();
        try {
          el.currentTime = 0;
        } catch {
          /* ignore */
        }
      } else {
        el.play().catch(() => {});
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [src, mountVideo]);

  return (
    <div ref={containerRef} className="zap-agents-feature-visual">
      {!mountVideo ? (
        <img
          src={poster}
          alt=""
          className="zap-agents-feature-video"
          decoding="async"
          loading="lazy"
          fetchPriority="low"
          aria-hidden
        />
      ) : (
        <video
          ref={videoRef}
          className="zap-agents-feature-video"
          src={src}
          poster={poster}
          muted
          playsInline
          loop
          autoPlay
          preload="metadata"
          aria-label={label}
        />
      )}
    </div>
  );
}
