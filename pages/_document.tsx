import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="dark" lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="yX9XVvYh0SFOZ13C28ImKEtMsl8j8HCDCvfeNJGz-Tg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Outfit&display=swap"
        />
      </Head>
      <body className="dark:bg-black duration-300 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
