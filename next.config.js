/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    APP_DIR: process.cwd(),
  },
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://192.168.1.31:3000',
  ],
};

module.exports = nextConfig;
