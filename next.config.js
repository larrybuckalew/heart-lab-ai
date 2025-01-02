/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Performance and SEO optimizations
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  // SEO and Metadata configuration
  async generateMetadata() {
    return {
      title: 'Heart Lab AI - Advanced Cardiac Risk Analysis',
      description: 'Cutting-edge AI-powered cardiac risk prediction and analysis',
      keywords: ['healthcare', 'machine learning', 'cardiac risk', 'medical AI'],
      openGraph: {
        title: 'Heart Lab AI',
        description: 'Advanced Cardiac Risk Analysis Platform',
        type: 'website'
      }
    };
  }
};

module.exports = nextConfig;