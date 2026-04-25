"use client";

import { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { SITE_LINKS } from "../lib/siteLinks";

const JoinWaitlistContext = createContext(null);

export function useJoinWaitlist() {
  const ctx = useContext(JoinWaitlistContext);
  if (!ctx) {
    throw new Error("useJoinWaitlist must be used within JoinWaitlistProvider");
  }
  return ctx;
}

function JoinWaitlistModal({ isOpen, onClose }) {
  const travelAgentButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }
    const onKey = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = requestAnimationFrame(() => {
      travelAgentButtonRef.current?.focus({ preventScroll: true });
    });
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const go = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return createPortal(
    <div className="join-waitlist-overlay" role="presentation" onClick={onClose}>
      <div
        className="join-waitlist-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="join-waitlist-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="join-waitlist-close" onClick={onClose} aria-label="Close dialog">
          ×
        </button>
        <div className="join-waitlist-dialog-head">
          <h2 id="join-waitlist-title" className="join-waitlist-title">
            Join the waitlist
          </h2>
        </div>
        <div className="join-waitlist-options" role="group" aria-label="Waitlist for travel agents or travelers">
          <button
            ref={travelAgentButtonRef}
            type="button"
            className="join-waitlist-option join-waitlist-option--agent"
            onClick={() => go(SITE_LINKS.waitlistFormTravelAgent)}
          >
            <div className="join-waitlist-card-media join-waitlist-card-media--agent" aria-hidden="true">
              <span className="join-waitlist-card-spark join-waitlist-card-spark--a" />
              <span className="join-waitlist-card-spark join-waitlist-card-spark--b" />
              <span className="join-waitlist-card-spark join-waitlist-card-spark--c" />
              <img
                className="join-waitlist-card-image"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80"
                alt=""
                width="900"
                height="600"
                draggable={false}
              />
            </div>
            <span className="join-waitlist-card-title">Travel agents</span>
          </button>
          <button
            type="button"
            className="join-waitlist-option join-waitlist-option--traveler"
            onClick={() => go(SITE_LINKS.waitlistForm)}
          >
            <div className="join-waitlist-card-media join-waitlist-card-media--traveler" aria-hidden="true">
              <span className="join-waitlist-card-spark join-waitlist-card-spark--a" />
              <span className="join-waitlist-card-spark join-waitlist-card-spark--b" />
              <span className="join-waitlist-card-spark join-waitlist-card-spark--c" />
              <img
                className="join-waitlist-card-image"
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80"
                alt=""
                width="900"
                height="600"
                draggable={false}
              />
            </div>
            <span className="join-waitlist-card-title">Travelers</span>
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export function JoinWaitlistProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openJoinWaitlist = useCallback(() => setIsOpen(true), []);
  const closeJoinWaitlist = useCallback(() => setIsOpen(false), []);

  return (
    <JoinWaitlistContext.Provider value={{ openJoinWaitlist, closeJoinWaitlist, isOpen }}>
      {children}
      <JoinWaitlistModal isOpen={isOpen} onClose={closeJoinWaitlist} />
    </JoinWaitlistContext.Provider>
  );
}
