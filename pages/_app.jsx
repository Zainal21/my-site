import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";
import NextNProgress from "nextjs-progressbar";
import { Fragment } from "react";
import MainLayout from "@/components/layouts/main-layout";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <NextNProgress height={4} color="#4338C9" />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Fragment>
  );
}

export default MyApp;
