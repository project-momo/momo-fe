/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true
};
module.exports = nextConfig;

const withImages = require('next-images');
module.exports = withImages();

// const withTM = require('next-transpile-modules')(['date-fns']);
// module.exports = withTM({});
