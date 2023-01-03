import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";
import MainLayout from "@/components/layouts/main-layout";
import MDXComponents from "@/components/base/mdx-components";
import { MDXProvider } from "@mdx-js/react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <MDXProvider components={MDXComponents}>
        <NextNProgress height={4} color="#4338C9" />
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MDXProvider>
    </Fragment>
  );
}

export default MyApp;
