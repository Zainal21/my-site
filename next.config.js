/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
};

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*"],
  })
);
module.exports = nextConfig;
