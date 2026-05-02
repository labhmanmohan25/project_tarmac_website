import { useEffect } from "react";
import { useRouter } from "next/router";
import SEO from "../components/SEO";

/** `/` forwards to the traveler landing for now; use `/agents` for travel agencies. */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/travel");
  }, [router]);

  return (
    <>
      <SEO
        title="Tarmac"
        description="Tarmac — AI travel companion and tools for travel agencies."
        canonical="/travel"
        noindex
      />
    </>
  );
}
