import React from "react";
import SectionHeader from "../SectionHeader";
import ViewMoreBtn from "../ViewMoreBtn";
import ChannelsCard from "../SectionsCards/ChannelsCard";
import channelPic from "@/public/img/ptv-logo.svg";
import Link from "next/link";

const Channels = () => {
  return (
    <div className="bg-[#0e0805] text-[#fff] py-[60px] px-[40px]">
      <div className="flex items-center justify-between">
        <h3 className="text-4xl font-bold">Live TV Channels</h3>
        <Link
          href="/Live"
          className="text-[#bd3e3c] font-medium hover:underline"
        >
          See All
        </Link>
      </div>
      <ChannelsCard />
    </div>
  );
};

export default Channels;
