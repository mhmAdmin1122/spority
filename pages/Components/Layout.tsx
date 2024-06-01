import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CopyRight from "./CopyRight";
import { Righteous } from 'next/font/google'
 
const righteous = Righteous({
  weight: '400',
  subsets: ['latin'],
})

const Layout = ({ children }: any) => {
  return (
    <main className={`${righteous.className}`}>
      <Navbar />
      {children}
      <Footer />
      <CopyRight />
    </main>
  );
};

export default Layout;
