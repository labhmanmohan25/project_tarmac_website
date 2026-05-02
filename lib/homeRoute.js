import { useEffect, useState } from "react";

export const TARMAC_HOME_ROUTE_KEY = "tarmac_home_route";

const VALID = new Set(["/travel", "/agents"]);

export function persistHomeRouteFromPathname(pathname) {
  if (typeof window === "undefined") return;
  if (!VALID.has(pathname)) return;
  window.localStorage.setItem(TARMAC_HOME_ROUTE_KEY, pathname);
  window.dispatchEvent(new Event("tarmac-home-route-changed"));
}

export function readStoredHomeRoute() {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(TARMAC_HOME_ROUTE_KEY);
  return VALID.has(value) ? value : null;
}

/** Logo + footer brand: `/` until user lands on `/travel` or `/agents`, then that path is sticky. */
export function useHomeLogoHref() {
  const [href, setHref] = useState("/");

  useEffect(() => {
    const sync = () => {
      setHref(readStoredHomeRoute() ?? "/");
    };
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("tarmac-home-route-changed", sync);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("tarmac-home-route-changed", sync);
    };
  }, []);

  return href;
}
