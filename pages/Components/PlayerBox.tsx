import React from "react";
import EventsCards from "./SectionsCards/EventsCards";

const PlayerBox = () => {
  return (
    <div className="flex items-center gap-4 justify-center p-5 w-full bg-[#0e0805] player-box-live-channel-page">
      <div className="player-of-main-channel flex items-center justify-center w-[70%]">
        <iframe
          src="//stream.crichd.vip/update/skys2.php"
          name="iframe_a"
          scrolling="no"
          allowFullScreen
          className="main-channel-live-page-iframe"
        >
          Your Browser Do not Support Iframe
        </iframe>
      </div>
      <div className="flex flex-col items-center">
        <EventsCards />
      </div>
    </div>
  );
};

export default PlayerBox;