import React from "react";
import ill1 from "@/public/img/Vectortopillustrate.svg";
import ill2 from "@/public/img/Vectorbottomill.svg";
import Image from "next/image";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gray-900 text-[#fff] h-screen overflow-hidden relative">
      <div className="absolute z-40 w-full flex h-full justify-center items-center">
        <div className="w-[95%] h-[94vh] rounded-lg p-6">
          <div className="flex gap-8 items-start justify-start h-full">
            <div className="bg-[#161616] w-[20%] h-[87vh] rounded-lg p-6">
              <h2>Spority Live</h2>
            </div>
            <div className="bg-[#ffffff31] w-[80%] rounded-lg h-[87vh] p-6 overflow-scroll overflow-x-hidden admin-child-box select-none">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 z-10">
        <Image src={ill1} alt="top-left-ill" className="w-full h-full" />
      </div>
      <div className="w-[1540px] absolute z-10 flex items-start justify-end top-28 -left-2">
        <Image src={ill2} alt="bottom-ill" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Layout;
