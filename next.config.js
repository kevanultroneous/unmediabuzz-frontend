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
  // env: {
  //   NEXT_PUBLIC_UA_ID: "UA-221098859-1",
  //   NEXT_PUBLIC_GA_ID: "G-Q1P00W81DB",
  // },
};

module.exports = nextConfig;
