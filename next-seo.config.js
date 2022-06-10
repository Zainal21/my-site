const title = "Muhamad Zainal Arifin";

const description = `20 y.o, A Software Engineer. Mostly code in PHP and Javascript
but sometime in Kotlin.`;

const siteUrl = process.env.BASE_URL;

const SEO = {
  titleTemplate: `%s | ${title}`,
  defaultTitle: title,
  description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    site_name: title,
    url: siteUrl,
    title,
    description,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        alt: title,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
    handle: "@penulisduduk",
    site: "@penulisduduk",
  },
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "apple-mobile-web-app-title", content: "Muhamad Zainal Arifin" },
    { name: "application-name", content: "Muhamad Zainal Arifin" },
    {
      name: "google-site-verification",
      content: "bpIEdZTFG-7tgxqceWzSGdLwvr6UDxjFDcgsaTIgFZc",
    },
    { name: "msapplication-TileColor", content: "#da532c" },
    { name: "msapplication-config", content: "/favicon/browserconfig.xml" },
    { name: "theme-color", content: "#2a61cc" },
  ],
  additionalLinkTags: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon/favicon-16x16.png",
    },
    {
      rel: "manifest",
      href: "/favicon/site.webmanifest",
    },
    {
      rel: "mask-icon",
      href: "/favicon/safari-pinned-tab.svg",
      color: "#5bbad5",
    },
  ],
};

module.exports = SEO;
