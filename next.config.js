/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: 'http',
            hostname: 'k.kakaocdn.net',
            port: '',
            pathname: '/dn/**'
         }
      ]
   }
};
module.exports = nextConfig;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');
module.exports = withImages();
