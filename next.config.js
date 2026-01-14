/** @type {import('next').NextConfig} */
const nextConfig = {
  // Mobile network access ONLY
  allowedDevOrigins: [
    'http://192.168.1.48:3000',
    'http://192.168.1.48:3001'
  ]
};

module.exports = nextConfig;
