/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true
   // trailingSlash: true,
   // images: {
   //    loader: 'akamai',
   //    path: '/'
   // }
};
module.exports = nextConfig;

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const withImages = require('next-images');
// module.exports = withImages();
