/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
};

module.exports = withCss(withPurgeCss());
module.exports = nextConfig;
