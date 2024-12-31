/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  output: 'standalone',
  distDir: '.next',
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'build-' + Date.now()
  }
}