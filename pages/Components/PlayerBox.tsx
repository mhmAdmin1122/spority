import React from "react";
import EventsCards from "./SectionsCards/EventsCards";

const PlayerBox = () => {
  return (
    <div className="flex items-start gap-4 justify-center p-5 w-full bg-[#0e0805] player-box-live-channel-page">
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
      <div className="overflow-scroll overflow-x-hidden listof-event max-h-[460px] min-h-[460px] list-of-event-web-livechannel-page">
        <EventsCards />
      </div>
    </div>
  );
};

export default PlayerBox;
