import React from "react";
import eventpic1 from "@/public/img/events2.svg";
import Image from "next/image";
import WatchBtn from "../WatchBtn";

const MostViewEvents = () => {
  return (
    <div className="w-full rounded-md overflow-hidden h-[440px] relative">
      <Image
        src={eventpic1}
        alt="event-most-view-pic"
        className="object-cover h-full w-full"
      />
      <div className="about-features-mostView-events-page absolute bottom-0 bg-[#0f0f0f50] w-full p-2">
        <div className="flex items-center gap-4 w-full">
          <div>
            <h4>Shaheen the Game Changer</h4>
            <p className="text-sm font-normal">
              Watch the highlight of the most anticipated game in the cricket
            </p>
          </div>
          <WatchBtn
            classextra="!w-[120px] !py-[8px] !px-2 !text-[10px] !font-base"
            btnUrl="/Live-Channels"
          />
        </div>
      </div>
    </div>
  );
};

export default MostViewEvents;
