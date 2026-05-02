"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SITE_LINKS } from "../lib/siteLinks";

const JoinWaitlistContext = createContext(null);

function openWaitlistUrl(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

/** `/travel` and `/agents` map to a single form; all other routes show the chooser modal. */
function waitlistPathBehavior(pathname) {
  if (pathname === "/travel") {
    return { mode: "direct", url: SITE_LINKS.waitlistForm };
  }
  if (pathname === "/agents") {
    return { mode: "direct", url: SITE_LINKS.waitlistFormTravelAgent };
  }
  return { mode: "modal" };
}

export function useJoinWaitlist() {
  const ctx = useContext(JoinWaitlistContext);
  if (!ctx) {
    throw new Error("useJoinWaitlist must be used within JoinWaitlistProvider");
  }
  return ctx;
}

export function JoinWaitlistProvider({ children }) {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = useCallback(() => setModalOpen(false), []);

  const openJoinWaitlist = useCallback(() => {
    const behavior = waitlistPathBehavior(router.pathname);
    if (behavior.mode === "direct") {
      openWaitlistUrl(behavior.url);
      return;
    }
    setModalOpen(true);
  }, [router.pathname]);

  const openTravelerForm = useCallback(() => {
    openWaitlistUrl(SITE_LINKS.waitlistForm);
    setModalOpen(false);
  }, []);

  const openAgencyForm = useCallback(() => {
    openWaitlistUrl(SITE_LINKS.waitlistFormTravelAgent);
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (!modalOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalOpen]);

  return (
    <JoinWaitlistContext.Provider value={{ openJoinWaitlist }}>
      {children}

      {modalOpen ? (
        <div
          className="waitlist-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-modal-title"
          onClick={closeModal}
        >
          <div className="waitlist-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="waitlist-modal-close" onClick={closeModal} aria-label="Close">
              ×
            </button>
            <h2 id="waitlist-modal-title" className="waitlist-modal-title">
              Join the waitlist
            </h2>
            <p className="waitlist-modal-copy">Are you signing up as a traveler or on behalf of a travel agency?</p>
            <div className="waitlist-modal-actions">
              <button type="button" className="waitlist-modal-option waitlist-modal-option--traveler" onClick={openTravelerForm}>
                Traveler
              </button>
              <button type="button" className="waitlist-modal-option waitlist-modal-option--agency" onClick={openAgencyForm}>
                Travel agency
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <style jsx>{`
        .waitlist-modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 16px;
          background: rgba(28, 28, 30, 0.45);
          backdrop-filter: blur(6px);
        }

        .waitlist-modal {
          position: relative;
          width: 100%;
          max-width: 420px;
          padding: 28px 24px 24px;
          border-radius: 20px;
          background: linear-gradient(180deg, #faf8f4 0%, #f0ebe3 100%);
          border: 1px solid #ddd6ca;
          box-shadow:
            0 24px 48px rgba(28, 28, 30, 0.12),
            0 0 0 1px rgba(255, 255, 255, 0.6) inset;
        }

        .waitlist-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 10px;
          background: rgba(95, 83, 68, 0.08);
          color: #5f5344;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
        }

        .waitlist-modal-close:hover {
          background: rgba(95, 83, 68, 0.14);
        }

        .waitlist-modal-title {
          margin: 0 36px 10px 0;
          font-size: clamp(22px, 4vw, 26px);
          line-height: 1.15;
          color: #1c1c1e;
          font-weight: 650;
          letter-spacing: -0.02em;
        }

        .waitlist-modal-copy {
          margin: 0 0 22px;
          font-size: 15px;
          line-height: 1.5;
          color: #5f5344;
        }

        .waitlist-modal-actions {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .waitlist-modal-option {
          width: 100%;
          padding: 14px 18px;
          border-radius: 12px;
          border: 1px solid #c9bfb0;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition:
            transform 0.12s ease,
            box-shadow 0.12s ease;
        }

        .waitlist-modal-option--traveler {
          background: #fff;
          color: #1c1c1e;
        }

        .waitlist-modal-option--agency {
          background: #ff5a00;
          border-color: #e65000;
          color: #fff;
        }

        .waitlist-modal-option:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 16px rgba(28, 28, 30, 0.1);
        }

        .waitlist-modal-option--agency:hover {
          box-shadow: 0 6px 20px rgba(255, 90, 0, 0.35);
        }

        .waitlist-modal-option:active {
          transform: translateY(0);
        }
      `}</style>
    </JoinWaitlistContext.Provider>
  );
}
