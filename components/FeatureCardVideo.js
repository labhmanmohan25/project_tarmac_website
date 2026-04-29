"use client";

import { useEffect, useLayoutEffect, useRef } from "react";

/**
 * Looping stock video for feature cards.
 * Sources: Mixkit (https://mixkit.co) — free license per clip page.
 */
export default function FeatureCardVideo({ src, poster, label }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.pause();
      try {
        el.currentTime = 0;
      } catch {
        /* ignore */
      }
    }
  }, [src]);

  useEffect(() => {
    const el = ref.current;
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
  }, [src]);

  return (
    <div className="zap-agents-feature-visual">
      <video
        ref={ref}
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
    </div>
  );
}
