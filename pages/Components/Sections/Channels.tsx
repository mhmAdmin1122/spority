import React from "react";
import SectionHeader from "../SectionHeader";
import ViewMoreBtn from "../ViewMoreBtn";
import ChannelsCard from "../SectionsCards/ChannelsCard";
import channelPic from "@/public/img/ptv-logo.svg";
import Link from "next/link";

const Channels = () => {
  return (
    <div className="bg-[#0e0805] text-[#fff] pt-[60px] pb-[90px] px-[40px] livechannel-channel-box">
      <div className="flex items-center justify-between">
        <h3 className="text-4xl font-bold px-20 live-channel-box-heading">Live TV Channels</h3>
      </div>
      <ChannelsCard />
    </div>
  );
};

export default Channels;
