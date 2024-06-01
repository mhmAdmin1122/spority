import React from "react";
import Image from "next/image";
import eventpic3 from "@/public/img/events3.svg";
import WatchBtn from "../WatchBtn";

const FeaturedEvents = () => {
  return (
    <div className="featured-event-card-events-page relative w-[275px] h-[210px] overflow-hidden rounded-md">
      <Image
        src={eventpic3}
        alt={`events-pic-featuresEvents`}
        className="w-full h-full object-cover"
      />
      <div className="about-features-event-event-page absolute bottom-0 bg-[#0f0f0f50] w-full p-2">
        <div>
          <div>
            <h4>Shaheen the Game Changer</h4>
            <p className="text-sm font-normal">
              Watch the highlight of the most anticipated game in the cricket
            </p>
            <WatchBtn
              classextra="!w-[110px] !py-[8px] !px-2 !text-[10px] !font-base"
              btnUrl="/Live-Channels"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedEvents;
