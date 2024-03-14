import React from "react";
import Header from "./Header";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-700 text-[#fff]">
      <Header />
      <div className="min-h-screen max-h-full">{children}</div>
    </div>
  );
};

export default Layout;
