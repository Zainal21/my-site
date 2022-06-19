import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";
import LoadingBar from "react-top-loading-bar";
import Router from "next/router";
import React, { useRef, useState } from "react";
import MainLayout from "@/components/layouts/main-layout";

function MyApp({ Component, pageProps }) {
  const [progressLoad, setProgressLoad] = useState(0);

  Router.events.on("routeChangeStart", () => {
    setProgressLoad(20);
  });

  Router.events.on("routeChangeComplete", () => {
    setProgressLoad(100);
  });

  return (
    <React.Fragment>
      <LoadingBar
        color="#ffff"
        progress={progressLoad}
        onLoaderFinished={() => setProgressLoad(100)}
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </React.Fragment>
  );
}

export default MyApp;
