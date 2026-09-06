import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-sanity', 'sanity'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
