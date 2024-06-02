import React from "react";
import HeroPic1 from "@/public/img/heroHomepic1.svg";
import illustPic from "@/public/img/thrillbattle.png";
import WatchBtn from "../WatchBtn";
import Image from "next/image";
import btnimg from "@/public/img/playIcon.png";

const HomeHerro = () => {
  return (
    // <div className="HomeHeroBanner">
    //   <div className="homeHero-innerBox hero-contentBox w-[420px]">
    //     <div className="flex flex-wrap gap-4 items-center py-3">
    //       <Image src={HeroPic1} alt="tv-pic" />
    //       <h3 className="text-[28px] font-bold">Your Stadium Seat for</h3>
    //     </div>
    //     <h1 className="text-[45px] font-bold">Thrilling Battles</h1>
    //     <p className="text-[14px] text-gray-400 font-medium w-full py-4">
    //       Immerse yourself in the pulse-pounding excitement as athletes compete
    //       for glory, all from the convenience of your own space. Don{"'"}t miss
    //       this unparalleled sports experience {"–"} reserve your spot now!
    //     </p>
    // <WatchBtn btnUrl="/Live-Channels" classextra="!cursor-pointer"  />
    //   </div>

    //   <div className="homeHero-innerBox hero-illust-Box w-1/2">
    //     <Image src={illustPic} alt="illust-homeHero-pic" />
    //   </div>
    // </div>
    <div className="Hero-Section-MainDiv">
      <div className="w-[450px] pl-[80px] pb-[80px] max-[860px]:pl-[40px] max-[860px]:w-[360px] max-[400px]:w-[300px] max-[340px]:w-[280px]">
        <h1 className="">Watch Rage of Starc</h1>
        <p className="">
          We are a full services digital agency that bulids immesive user
          experience
        </p>
        <div className="btn mt-4">
          <WatchBtn btnUrl="/Live-Channels" classextra="!cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default HomeHerro;
