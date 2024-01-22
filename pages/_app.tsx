import { SpeedInsights } from "@vercel/speed-insights/next";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import NProgress from "nprogress";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <main>
        <Component {...pageProps} />
        <SpeedInsights />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
