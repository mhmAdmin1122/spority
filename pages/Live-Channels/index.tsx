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
      <div className="flex items-start gap-4 justify-center p-5 w-full">
        <div className="player-of-main-channel flex items-center justify-center w-[70%]">
          {/* <iframe
            src={`https://player003.vip/embed2.php?id=asports&q=A Sports`}
            scrolling="no"
            allowFullScreen
            className="w-[100%] h-[500px] rounded-md overflow-hidden"
          /> */}
          <iframe
            frameBorder="0"
            height="500"
            src="https://player003.vip/embed2.php?id=willow"
            name="iframe_a"
            scrolling="no"
            width="640"
            className="w-[100%] h-[500px] rounded-md overflow-hidden"
          >
            Your Browser Do not Support Iframe
          </iframe>
        </div>
        <div className="overflow-scroll overflow-x-hidden listof-event max-h-[460px] min-h-[460px]">
          <EventsCards />
        </div>
      </div>
      {/*       
      <Channels />
      <Pricing />
      <NewsLatter /> */}
    </Layout>
  );
};

export default LiveChannelsPage;
