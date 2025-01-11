/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    REDIS_URL: process.env.REDIS_URL,
  },
  typescript: {
    ignoreBuildErrors: true, // Consider removing this in production
  },
  eslint: {
    ignoreDuringBuilds: true, // Consider removing this in production
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;