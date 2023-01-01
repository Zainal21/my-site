/** @type {import('next').NextConfig} */
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

// const remarkFrontmatter = require("remark-frontmatter");
// const rehypeHighlight = require("rehype-highlight");

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    domains: ["ghchart.rshah.org", "images.ctfassets.net", "i.scdn.co"],
  },
  webpack: (config, options) => {
    if (!options.dev && !options.isServer) {
      Object.assign(config.resolve.alias, {
        react: "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom": "preact/compat",
      });
    }

    if (!options.isServer) {
      config.resolve.fallback = { fs: false };
    }

    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {
            providerImportSource: "@mdx-js/react",
            // remarkPlugins: [remarkFrontmatter],
            // rehypePlugins: [rehypeHighlight],
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx"],
};

// import remarkFrontmatter from "remark-frontmatter";
// import rehypeHighlight from "rehype-highlight";

module.exports = withCss(
  withPurgeCss({
    purgeCssPaths: ["pages/**/*", "components/**/*"],
  })
);

module.exports = nextConfig;
