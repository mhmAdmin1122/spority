import React from 'react'
import foxhdLogo from "@/public/img/foxhd.jpeg";
import Image from "next/image";
import { FaEdit, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PostCard = () => {
  return (
    <div className="relative flex items-center justify-between py-4 px-6 bg-[#F0F0F0] rounded-md text-black">
      <div className="w-[100px] h-[100px]">
        <Image src={foxhdLogo} alt={`foxhd-Logo`} title={`FoxHd`} className="w-full h-full rounded-lg" width={200} height={200} />
      </div>
      {/* <div className="flex gap-[74px] items-center justify-start text-black"> */}
        <p>12</p>
        <p>2k+</p>
        <FaExternalLinkAlt className="text-xl hover:text-gray-500 cursor-pointer" />
        <div className="flex items-center gap-2 text-xl">
          <FaEye className="hover:text-gray-500 cursor-pointer" />
          <MdDelete className="hover:text-gray-500 cursor-pointer" />
          <FaEdit className="hover:text-gray-500 cursor-pointer" />
        </div>
      {/* </div> */}
    </div>
  )
}

export default PostCard
