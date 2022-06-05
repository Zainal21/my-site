import React from "react";
import Header from "../base/header";
import Footer from "../base/footer";
export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
