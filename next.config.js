/** @type {import('next').NextConfig} */
const nextConfig = {
  // appDir: 'src/app',
  experimental: {
    // serverActions: true,
    // missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig;
