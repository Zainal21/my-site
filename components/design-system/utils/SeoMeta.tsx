import Head from "next/head";

interface SeoMetaProps {
  description: string;
  title: string;
}

const seoKeywords =
  "muhamad zain, zain arif, muhamad zain, @penulisduduk, @zain, code, typescript, javascript, php";

const SeoMeta: React.FC<SeoMetaProps> = ({ description, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="description" content={description} key="desc" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="keywords" content={seoKeywords} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Muhamad Zainal Arifin" />
        <meta property="og:url" content="https://muhamadzain.me" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>
    </>
  );
};

export default SeoMeta;
