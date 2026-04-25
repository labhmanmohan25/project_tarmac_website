import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Script from "next/script";
import CursorImage from "../components/CursorImage";
import { JoinWaitlistProvider } from "../components/JoinWaitlistProvider";

const ENABLE_BUTTER_CHICKEN_CURSOR = false;

export default function App({ Component, pageProps }) {
  useEffect(() => {
    document.body.style.cursor = ENABLE_BUTTER_CHICKEN_CURSOR ? "none" : "";

    return () => {
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-4Z96998NFF"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-4Z96998NFF');
        `}
      </Script>
      {ENABLE_BUTTER_CHICKEN_CURSOR ? <CursorImage /> : null}
      <JoinWaitlistProvider>
        <Component {...pageProps} />
      </JoinWaitlistProvider>
    </>
  );
}
