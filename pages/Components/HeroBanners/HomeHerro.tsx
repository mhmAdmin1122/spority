import Image from "next/image";
import React from "react";
import HeroPic1 from "@/public/img/heroHomepic1.svg";
import illustPic from "@/public/img/thrillbattle.png";
import AuthBtn from "../AuthBtn";

const HomeHerro = () => {
  return (
    <div className="HomeHeroBanner">
      <div className="homeHero-innerBox hero-contentBox w-[420px]">
        <div className="flex flex-wrap gap-4 items-center py-3">
          <Image src={HeroPic1} alt="tv-pic" />
          <h3 className="text-[28px] font-bold">Your Stadium Seat for</h3>
        </div>
        <h1 className="text-[45px] font-bold">Thrilling Battles</h1>
        <p className="text-[14px] text-gray-400 font-medium w-full py-4">
          Immerse yourself in the pulse-pounding excitement as athletes compete
          for glory, all from the convenience of your own space. Don{"'"}t miss
          this unparalleled sports experience {"–"} reserve your spot now!
        </p>
        <AuthBtn />
      </div>

      <div className="homeHero-innerBox hero-illust-Box w-1/2">
        <Image src={illustPic} alt="illust-homeHero-pic" />
      </div>
    </div>
  );
};

export default HomeHerro;
