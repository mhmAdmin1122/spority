import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";

const Layout = ({ children }: any) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
      <CopyRight />
    </main>
  );
};

export default Layout;
