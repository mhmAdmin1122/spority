import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import { Righteous } from 'next/font/google'
import BackToTop from "./BackToTop";
 
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
})

const Layout = ({ children }: any) => {
  return (
    <main className={`${righteous.className} select-none`}>
      <Navbar />
      {children}
      <Footer />
      <CopyRight />
      <BackToTop />
    </main>
  );
};

export default Layout;
