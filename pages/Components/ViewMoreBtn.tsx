import Link from "next/link";
import React from "react";

const ViewMoreBtn = ({ btnText, btnUrl }: any) => {
  return (
    <div className="flex items-center justify-center w-full text-lg font-medium text-[#ff4500] underline transition-all duration-700 delay-500 ease-in-out hover:text-[#fff]">
      <Link href={`${btnUrl}`}>{btnText}...</Link>
    </div>
  );
};

export default ViewMoreBtn;
