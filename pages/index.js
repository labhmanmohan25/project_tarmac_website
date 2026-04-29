import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import TravelAgentsLanding from "../components/TravelAgentsLanding";

const HOME_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tarmac",
    alternateName: "Travel With Tarmac",
    url: "https://travelwithtarmac.com",
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Tarmac",
      logo: {
        "@type": "ImageObject",
        url: "https://travelwithtarmac.com/tarmac-light.png",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tarmac",
    url: "https://travelwithtarmac.com",
    logo: "https://travelwithtarmac.com/tarmac-light.png",
    description:
      "Tarmac is an AI-first travel technology company offering an active, closed-loop companion that handles group and solo planning, real-time on-ground navigation, and post-trip expense splitting.",
    email: "manmohan.labh@travelwithtarmac.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    sameAs: [
      "https://www.instagram.com/travelwithtarmac/",
      "https://www.linkedin.com/company/travelwithtarmac",
      "https://apps.apple.com/in/app/tarmac-go-live-remember/id6755082604",
      "https://play.google.com/store/apps/details?id=com.labhmanmohan25.tarmac",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Tarmac — AI Travel Companion",
    operatingSystem: "iOS, Android",
    applicationCategory: "TravelApplication",
    description:
      "One AI that plans the trip, navigates the chaos, and settles the bill. Tarmac is an active travel companion providing real-time rerouting, hyper-local discovery, and seamless financial wrap-ups.",
    url: "https://travelwithtarmac.com",
    image: "https://travelwithtarmac.com/phone_mockup.png",
    areaServed: "Worldwide",
    availableLanguage: ["en"],
    offers: [
      {
        "@type": "Offer",
        price: "1.00",
        priceCurrency: "USD",
        description: "Pay Per Trip — $1/day",
      },
      {
        "@type": "Offer",
        price: "15.00",
        priceCurrency: "USD",
        description: "Monthly subscription — $15/month",
      },
    ],
    installUrl: [
      "https://apps.apple.com/in/app/tarmac-go-live-remember/id6755082604",
      "https://play.google.com/store/apps/details?id=com.labhmanmohan25.tarmac",
    ],
    author: {
      "@type": "Organization",
      name: "Tarmac",
      url: "https://travelwithtarmac.com",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Tarmac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tarmac is an active AI travel companion. Instead of just giving you an itinerary and leaving you to figure out the rest, Tarmac travels with you. It is one AI that plans the trip, navigates the on-ground chaos with real-time suggestions and rerouting, and automatically settles the bills when you return.",
        },
      },
      {
        "@type": "Question",
        name: "Which platforms support Tarmac?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tarmac is available as a mobile app for both iOS and Android, putting a live, proactive AI concierge right in your pocket.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Tarmac different from a trip planner?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Planners stop working once you book. Tarmac is a companion that stays active during your trip. It reads your physical context (like live GPS and weather) and social context (your group chat) to instantly reroute you when plans fail, suggest nearby spots, and act as a reliable safety net.",
        },
      },
    ],
  },
];

/** Home is travel-agents messaging only — layout offset matches prior fixed-header + toggle row. */
export default function Home() {
  useEffect(() => {
    document.body.classList.add("agents-mode-body");

    return () => {
      document.body.classList.remove("agents-mode-body");
    };
  }, []);

  return (
    <>
      <SEO
        title="Tarmac for Travel Agents | AI Itinerary Builder"
        description="Tarmac is building an AI-powered suite for travel agencies. Start with the AI itinerary builder and join the waitlist for early access."
        keywords="AI itinerary builder, travel agent software, travel agency AI, itinerary automation, AI travel planning tools"
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />

      <Header surface="white" />

      <div className="home-travel-agents-shell">
        <TravelAgentsLanding />
      </div>

      <style jsx>{`
        .home-travel-agents-shell {
          padding-top: 98px;
        }

        @media (max-width: 768px) {
          .home-travel-agents-shell {
            padding-top: 84px;
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
