import React from "react";
import { SlCalender } from "react-icons/sl";
import { IoLocationSharp } from "react-icons/io5";
import { FaEye, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const EventsCard = () => {
  return (
    <div className="w-[316px] p-6 rounded-lg bg-[#F0F0F0] text-black flex flex-col">
      <h2 className="text-center font-medium text-xl pb-4">ICC T20 World Cup 2024</h2>
      <div className="flex flex-col gap-3 pb-4">
        <div className="flex items-center gap-2">
          <SlCalender />
          <p className="text-gray-500">20/12/2024</p>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationSharp />
          <p className="text-gray-500">USA &amp; Windies</p>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end text-lg">
        <FaEye className="hover:text-gray-500 cursor-pointer" />
        <MdDelete className="hover:text-gray-500 cursor-pointer" />
        <FaEdit className="hover:text-gray-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default EventsCard;
