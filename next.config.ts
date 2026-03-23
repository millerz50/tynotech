import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */
  images: {
    domains: [
      "source.unsplash.com", // for random laptop images
      "example.com", // replace with your own image host if any
    ],
  },
};

export default nextConfig;
