/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/hooks': './hooks',
      '@/lib': './lib'
    };
    return config;
  }
};

export default nextConfig;
