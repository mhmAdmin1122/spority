import React from "react";
import SectionHeader from "../SectionHeader";
import ViewMoreBtn from "../ViewMoreBtn";
import ChannelsCard from "../SectionsCards/ChannelsCard";
import channelPic from '@/public/img/ptv-logo.svg'

const Channels = () => {
  return (
    <div className="bg-[#000] text-[#fff] border-b-[10px] border-[#ff4500] py-[60px] px-[40px]">
      <SectionHeader title="Live Channels" />
      <div className="py-[60px] flex flex-wrap gap-10 items-center justify-center">
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
        <ChannelsCard channelPic={channelPic} channelName="PTV Sports" channelAltTextPic="ptv-sport-hd-live" />
      </div>
      <ViewMoreBtn btnText="View More..." btnUrl="/Live-Channels" />
    </div>
  );
};

export default Channels;
