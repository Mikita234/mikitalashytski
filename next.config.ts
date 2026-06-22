import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.wordpress.com",
        pathname: "/mshots/v1/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:locale(en|pl|ru|uk)/projects/kayer",
        destination: "/:locale/projects/kayer-pl",
        permanent: true,
      },
      {
        source: "/projects/kayer",
        destination: "/projects/kayer-pl",
        permanent: true,
      },
      {
        source: "/:locale(en|pl|ru|uk)/services/bots",
        destination: "/:locale/services/automation",
        permanent: true,
      },
      {
        source: "/services/bots",
        destination: "/services/automation",
        permanent: true,
      },
      {
        source: "/:locale(en|pl|ru|uk)/services/seo",
        destination: "/:locale/services/audit",
        permanent: true,
      },
      {
        source: "/services/seo",
        destination: "/services/audit",
        permanent: true,
      },
      {
        source: "/:locale(en|pl|ru|uk)/services/events",
        destination: "/:locale/services/creative",
        permanent: true,
      },
      {
        source: "/:locale(en|pl|ru|uk)/services/artists",
        destination: "/:locale/services/business",
        permanent: true,
      },
      {
        source: "/services/events",
        destination: "/services/creative",
        permanent: true,
      },
      {
        source: "/services/artists",
        destination: "/services/business",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
