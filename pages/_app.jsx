import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";
import React from "react";
import MainLayout from "@/components/layouts/main-layout";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </React.Fragment>
  );
}

export default MyApp;
