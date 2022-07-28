/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ["ghchart.rshah.org", "images.ctfassets.net"],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    return config;
  },
};

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*"],
  })
);

module.exports = nextConfig;
