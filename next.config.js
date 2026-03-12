const path = require("path");
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

/** @type {import('next').NextConfig} */
const createNextConfig = (phase) => ({
  reactStrictMode: true,
  // Keep static export for non-dev builds, but allow API routes in local dev.
  ...(phase === PHASE_DEVELOPMENT_SERVER ? {} : { output: "export" }),
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
});

module.exports = createNextConfig;
