import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHeroSection from "../components/HomeHeroSection";
import HeroPhaseSection from "../components/HeroPhaseSection";
import HowItWorksSection from "../components/HowItWorksSection";
import DestinationsSection from "../components/DestinationsSection";
import ReviewsSection from "../components/ReviewsSection";
import PricingSection from "../components/PricingSection";
import WaitlistSection from "../components/WaitlistSection";

/* ─── Main Page ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Head>
        <title>Tarmac — Your AI Travel Companion</title>
        <meta
          name="description"
          content="AI-powered travel app managing the full trip lifecycle. From planning to landing — and beyond."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HomeHeroSection />
      <HeroPhaseSection />
      <HowItWorksSection />
      <DestinationsSection />
      <ReviewsSection />
      <PricingSection />
      <WaitlistSection />

      <Footer />
    </>
  );
}
