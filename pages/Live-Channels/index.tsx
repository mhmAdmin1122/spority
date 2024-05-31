import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Channels from "../Components/Sections/Channels";
import Pricing from "../Components/Sections/Pricing";
import NewsLatter from "../Components/Sections/NewsLatter";
import EventsCards from "../Components/SectionsCards/EventsCards";

const LiveChannelsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Live Channels - Spority</title>
      </Head>
      <div className="flex items-start gap-4 justify-center p-5 w-full bg-[#0e0805]">
        <div className="player-of-main-channel flex items-center justify-center w-[70%]">
          <iframe
            frameBorder="0"
            height="500"
            src="//stream.crichd.vip/update/skys2.php"
            name="iframe_a"
            scrolling="no"
            width="640"
            className="main-channel-live-page-iframe"
          >
            Your Browser Do not Support Iframe
          </iframe>
        </div>
        <div className="overflow-scroll overflow-x-hidden listof-event max-h-[460px] min-h-[460px]">
          <EventsCards />
        </div>
      </div>
      <Channels />
      <div className="bg-[#0e0805]">

      </div>

    </Layout>
  );
};

export default LiveChannelsPage;
