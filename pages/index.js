import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHeroSection from "../components/HomeHeroSection";
import LazySection from "../components/LazySection";
import SEO from "../components/SEO";

// Code-split the heaviest component into its own JS chunk
const HeroPhaseSection = dynamic(() => import("../components/HeroPhaseSection"), { ssr: true });
const DestinationsSection = dynamic(() => import("../components/DestinationsSection"), { ssr: true });
const TarmacExplainerSection = dynamic(() => import("../components/TarmacExplainerSection"), { ssr: true });
const PricingSection = dynamic(() => import("../components/PricingSection"), { ssr: true });
const WaitlistSection = dynamic(() => import("../components/WaitlistSection"), { ssr: true });

const HOME_JSON_LD = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tarmac",
    url: "https://www.travelwithtarmac.com",
    logo: "https://www.travelwithtarmac.com/tarmac-logo.svg",
    description:
      "AI-powered travel companion app that manages the full trip lifecycle — from planning to post-trip wrap-up.",
    email: "manmohan.labh@travelwithtarmac.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Francisco",
      addressRegion: "CA",
      addressCountry: "US",
    },
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
      "One AI that handles your entire trip — group polls, bookings, real-time rerouting, expense splitting, and local discovery.",
    url: "https://www.travelwithtarmac.com",
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
      url: "https://www.travelwithtarmac.com",
    },
  },
];

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <SEO
        description="AI-powered travel app managing the full trip lifecycle. From planning to landing — and beyond."
        canonical="/"
        jsonLd={HOME_JSON_LD}
      />

      <Header />

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

        <LazySection minHeight={500} rootMargin="600px 0px">
          <PricingSection />
        </LazySection>

        <LazySection minHeight={300} rootMargin="400px 0px">
          <WaitlistSection />
        </LazySection>
      </div>

      <style jsx>{`
        .home-sections-stack {
          display: flex;
          flex-direction: column;
          gap: clamp(48px, 7vw, 104px);
        }

        @media (max-width: 768px) {
          .home-sections-stack {
            gap: clamp(36px, 9vw, 56px);
          }
        }
      `}</style>

      <Footer />
    </>
  );
}
