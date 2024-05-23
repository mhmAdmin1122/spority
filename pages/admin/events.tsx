import React from "react";
import Layout from "./components/Layout";
import Head from "next/head";
import EventsCard from "./components/EventsCard";

const EventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Spority - Admin Events</title>
      </Head>
      <div>
        <div className="flex w-full justify-end pb-4">
          <button className="w-fit px-3 py-1 btn-color-bg rounded-[2.86px]">Add Events</button>
        </div>
        <div className="flex flex-wrap gap-10 justify-center h-[430px] overflow-scroll overflow-x-hidden events-list">
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
          <EventsCard />
        </div>
      </div>
    </Layout>
  );
};

export default EventsPage;
