import Head from "next/head";

const SITE_URL = "https://www.travelwithtarmac.com";
const SITE_NAME = "Tarmac";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

// Company HQ geo — San Francisco, CA
const GEO = {
  region: "US-CA",
  placename: "San Francisco, California",
  position: "37.7749;-122.4194",
  icbm: "37.7749, -122.4194",
};

/**
 * SEO component — drop into any page's JSX to set all head meta.
 *
 * Props:
 *   title       — page title (appended with "| Tarmac"); omit for default homepage title
 *   description — meta description (required)
 *   canonical   — path relative to site root, e.g. "/team"
 *   ogImage     — absolute URL to OG image (defaults to /og-image.png)
 *   ogType      — "website" | "article" | "profile" (default "website")
 *   noindex     — set true on legal/utility pages to suppress indexing
 *   jsonLd      — object or array of JSON-LD structured data nodes
 */
export default function SEO({
  title,
  description,
  canonical = "/",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  jsonLd,
}) {
  const pageTitle = title
    ? `${title} | ${SITE_NAME}`
    : "Tarmac — Your AI Travel Companion";
  const canonicalUrl = `${SITE_URL}${canonical}`;

  return (
    <Head>
      {/* Core */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo tags — identify business location for local/geo search */}
      <meta name="geo.region" content={GEO.region} />
      <meta name="geo.placename" content={GEO.placename} />
      <meta name="geo.position" content={GEO.position} />
      <meta name="ICBM" content={GEO.icbm} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Tarmac — AI Travel Companion" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@travelwithtarmac" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd]),
          }}
        />
      )}
    </Head>
  );
}
