import React from "react";
import Layout from "./components/Layout";
import Head from "next/head";
import ChannelCard from "./components/ChannelCard";
import Link from "next/link";

const ChannelsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Spority - Admin Channels</title>
      </Head>
      <div className="relative flex flex-col gap-2">
        <Link href="/admin/channelform" className="add-channel-btn-admin">
          Add Channels
        </Link>
        <div className="body-box-topBar-channels flex gap-8 justify-end w-full py-4 px-6 rounded-t-md">
          <h3>Traffic</h3>
          <h3>Live Watching</h3>
          <h3>Overview</h3>
          <h3>Action</h3>
        </div>
        <ChannelCard />
      </div>
    </Layout>
  );
};

export default ChannelsPage;
