"use client";

import { createContext, useContext, useCallback } from "react";
import { SITE_LINKS } from "../lib/siteLinks";

const JoinWaitlistContext = createContext(null);

export function useJoinWaitlist() {
  const ctx = useContext(JoinWaitlistContext);
  if (!ctx) {
    throw new Error("useJoinWaitlist must be used within JoinWaitlistProvider");
  }
  return ctx;
}

export function JoinWaitlistProvider({ children }) {
  const openJoinWaitlist = useCallback(() => {
    window.open(SITE_LINKS.waitlistFormTravelAgent, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <JoinWaitlistContext.Provider value={{ openJoinWaitlist }}>{children}</JoinWaitlistContext.Provider>
  );
}
