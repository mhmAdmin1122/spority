import React from "react";
import tensportLogo from "@/public/img/tensports.jpeg";
import Image from "next/image";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ChannelCard = () => {
  return (
    <div className="relative flex items-center justify-between py-4 px-6 bg-[#F0F0F0] rounded-md">
      <div className="w-[100px] h-[100px]">
        <Image src={tensportLogo} alt={`tensport-Logo`} title={`tensport`} className="w-full h-full rounded-full" width={200} height={200} />
      </div>
      <div className="flex gap-[63px] items-center justify-start text-black">
        <p>2k+</p>
        <p>2k+</p>
        <FaExternalLinkAlt className="text-xl hover:text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2 text-xl">
          <FaEye className="hover:text-gray-500 cursor-pointer" />
          <MdDelete className="hover:text-gray-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default ChannelCard;
