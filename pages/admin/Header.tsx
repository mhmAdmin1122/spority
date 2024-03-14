import Image from "next/image";
import React from "react";
import logo from "@/public/img/logo2.png";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center flex-wrap justify-between px-[30px] bg-[#000] text-[#fff] py-[10px]">
      <Image src={logo} alt="logo-pic" width={120} height={80} />
      <div className="flex items-center justify-end gap-8 text-lg font-medium">
        <Link href={"/admin"}>Home</Link>
        <Link href={"/admin/Blog-writer"}>Blog</Link>
        <Link href={"/admin/Channel-Uploader"}>Channel</Link>
        <Link href={"/admin/Event-Uploader"}>Event</Link>
        <Link href={"/admin/News-writer"}>News</Link>
      </div>
    </div>
  );
};

export default Header;
