/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir: 'src/app',
  experimental: {
    // serverActions: true,
    // missingSuspenseWithCSRBailout: false,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
