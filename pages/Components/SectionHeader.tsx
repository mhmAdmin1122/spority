import React from "react";

const SectionHeader = ({title}:any) => {
  return (
    <div className="flex flex-col gap-2 justify-center w-full items-center">
      <h3 className="text-[45px] font-bold">{title}</h3>
      <div className="h-[2px] bg-gray-400 w-[350px]"></div>
    </div>
  );
};

export default SectionHeader;
