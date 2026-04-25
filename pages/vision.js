import { useEffect } from "react";
import { useRouter } from "next/router";
import SEO from "../components/SEO";

/**
 * B2C “Vision” page is off while the site leads with travel agents (B2B).
 * Restore the previous long-form page from git history and re-enable Header/Footer links.
 */
export default function Vision() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return (
    <>
      <SEO title="Tarmac" description="Tarmac" canonical="/" noindex />
    </>
  );
}
