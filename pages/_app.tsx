import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "@/styles/globals.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
      <SpeedInsights />
    </main>
  );
}

export default MyApp;
