import Head from "next/head";

export default function MetaTag({ keywords, description, title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

MetaTag.defaultProps = {
  keywords: "Muhamad zainal Arifin",
  description: `20 y.o, A Software Engineer. Mostly code in PHP and Javascript
    but sometime in Kotlin.`,
  title: "Muhamadzain.dev",
};
