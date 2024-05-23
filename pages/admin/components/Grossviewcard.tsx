import React from "react";
import { MdOutlineAirplaneTicket } from "react-icons/md";

const Grossviewcard = () => {
  return (
    <div className="flex flex-col gap-3 px-4 pt-4 pb-5 bg-[#838383] w-[244px] rounded-lg leading-3">
      <div className="flex items-center gap-2 text-[26px]">
        <MdOutlineAirplaneTicket />
        <h3 className="">Total Visit</h3>
      </div>
      <div className="flex items-center gap-1">
        <b className="text-[#00ED75] text-[40px]">67k</b>
        <p className="text-white text-[20px] pt-[12px]">views</p>
      </div>
    </div>
  );
};

export default Grossviewcard;
