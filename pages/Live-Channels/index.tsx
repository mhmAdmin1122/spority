import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Channels from "../Components/Sections/Channels";
import NewsLatter from "../Components/Sections/NewsLatter";
import PlayerBox from "../Components/PlayerBox";

const LiveChannelsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Live Channels - Spority</title>
      </Head>
      <PlayerBox />
      <Channels />
      <NewsLatter />
    </Layout>
  );
};

export default LiveChannelsPage;
