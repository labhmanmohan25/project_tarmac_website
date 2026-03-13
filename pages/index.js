import Head from "next/head";
import dynamic from "next/dynamic";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomeHeroSection from "../components/HomeHeroSection";
import LazySection from "../components/LazySection";

// Code-split the heaviest component into its own JS chunk
const HeroPhaseSection = dynamic(() => import("../components/HeroPhaseSection"), { ssr: true });
const HowItWorksSection = dynamic(() => import("../components/HowItWorksSection"), { ssr: true });
const DestinationsSection = dynamic(() => import("../components/DestinationsSection"), { ssr: true });
const ReviewsSection = dynamic(() => import("../components/ReviewsSection"), { ssr: true });
const PricingSection = dynamic(() => import("../components/PricingSection"), { ssr: true });
const WaitlistSection = dynamic(() => import("../components/WaitlistSection"), { ssr: true });

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
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <Header />

      <HomeHeroSection />

      <LazySection minHeight={500} rootMargin="600px 0px">
        <HowItWorksSection />
      </LazySection>

      <LazySection minHeight={700} rootMargin="800px 0px">
        <HeroPhaseSection />
      </LazySection>

      <LazySection minHeight={500} rootMargin="600px 0px">
        <DestinationsSection />
      </LazySection>

      <LazySection minHeight={500} rootMargin="600px 0px">
        <ReviewsSection />
      </LazySection>

      <LazySection minHeight={500} rootMargin="600px 0px">
        <PricingSection />
      </LazySection>

      <LazySection minHeight={300} rootMargin="400px 0px">
        <WaitlistSection />
      </LazySection>

      <Footer />
    </>
  );
}
