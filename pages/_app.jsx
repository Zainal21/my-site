import "../styles/globals.css";
import "boxicons/css/boxicons.min.css";
import React from "react";
import Header from "@/components/base/header";
import Footer from "@/components/base/footer";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
