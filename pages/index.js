import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHeroSection from "../components/HomeHeroSection";
import LazySection from "../components/LazySection";
import SEO from "../components/SEO";
import SegmentedControl from "../components/SegmentedControl";
import TravelAgentsLanding from "../components/TravelAgentsLanding";

// Code-split the heaviest component into its own JS chunk
const HeroPhaseSection = dynamic(() => import("../components/HeroPhaseSection"), { ssr: true });
const DestinationsSection = dynamic(() => import("../components/DestinationsSection"), { ssr: true });
const TarmacExplainerSection = dynamic(() => import("../components/TarmacExplainerSection"), { ssr: true });
// const PricingSection = dynamic(() => import("../components/PricingSection"), { ssr: true });

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

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function Home() {
  const [audience, setAudience] = useState("travelAgents");

  const audienceOptions = [
    { value: "travelAgents", label: "Travel Agents" },
    { value: "travelers", label: "Travelers" },
  ];

  const isTravelAgents = audience === "travelAgents";

  useEffect(() => {
    document.body.classList.toggle("agents-mode-body", isTravelAgents);

    return () => {
      document.body.classList.remove("agents-mode-body");
    };
  }, [isTravelAgents]);

  return (
    <>
      <SEO
        title={
          isTravelAgents
            ? "Tarmac for Travel Agents | AI Itinerary Builder"
            : "Tarmac | Your Live AI Travel Companion & In-Trip Guide"
        }
        description={
          isTravelAgents
            ? "Tarmac is building an AI-powered suite for travel agencies. Start with the AI itinerary builder and join the waitlist for early access."
            : "One AI that plans the trip, navigates the chaos, and settles the bill. Meet Tarmac, the active travel companion that guides you in real-time while you explore."
        }
        keywords={
          isTravelAgents
            ? "AI itinerary builder, travel agent software, travel agency AI, itinerary automation, AI travel planning tools"
            : "live AI travel companion, in-trip AI guide, real-time travel agent, AI travel assistant, active itinerary app, on-ground travel app, travel expense splitter"
        }
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />

      <Header surface={isTravelAgents ? "white" : "sand"} />

      <div
        className={`audience-switch-wrap ${isTravelAgents ? "audience-switch-wrap-agents" : ""}`}
        aria-label="Select audience type"
      >
        <SegmentedControl options={audienceOptions} selected={audience} onChange={setAudience} />
      </div>

      {isTravelAgents ? (
        <TravelAgentsLanding />
      ) : (
        <div className="home-sections-stack">
          <LazySection minHeight={700} rootMargin="800px 0px">
            <HeroPhaseSection />
          </LazySection>

          <HomeHeroSection />

          <LazySection minHeight={500} rootMargin="600px 0px">
            <DestinationsSection />
          </LazySection>

          <LazySection minHeight={420} rootMargin="600px 0px">
            <TarmacExplainerSection />
          </LazySection>

          {/* <LazySection minHeight={500} rootMargin="600px 0px">
            <PricingSection />
          </LazySection> */}
        </div>
      )}

      <style jsx>{`
        .audience-switch-wrap {
          margin-top: 98px;
          margin-bottom: 28px;
          display: flex;
          justify-content: center;
          padding: 0 16px;
        }

        .audience-switch-wrap-agents {
          background: #ffffff;
          margin-bottom: 0;
          padding-bottom: 18px;
        }

        .home-sections-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(48px, 7vw, 104px);
          margin-bottom: clamp(48px, 8vw, 96px);
        }

        @media (max-width: 768px) {
          .audience-switch-wrap {
            margin-top: 84px;
            margin-bottom: 18px;
          }

          .audience-switch-wrap-agents {
            margin-bottom: 0;
            padding-bottom: 12px;
          }

          .home-sections-stack {
            gap: clamp(36px, 9vw, 56px);
            margin-bottom: clamp(36px, 10vw, 64px);
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
