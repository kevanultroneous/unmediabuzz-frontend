/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["13.57.99.100:8000"],
  },
  nextConfig: {
    reactStrictMode: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_GA_ID: "G-3G54ZP5NJK",
  },
};

module.exports = nextConfig;
