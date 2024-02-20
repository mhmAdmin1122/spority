import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Channels from "../Components/Sections/Channels";
import Pricing from "../Components/Sections/Pricing";
import EventsHero from "../Components/HeroBanners/EventsHero";
import eventpic1 from '@/public/img/events2.svg'
import eventpic2 from '@/public/img/events1.svg'
import eventpic3 from '@/public/img/events3.svg'

const EventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Events - Spority</title>
      </Head>
      <EventsHero
        imageSrc1={eventpic1}
        imageSrc2={eventpic2}
        imageSrc3={eventpic3}
        Event1Name="PSL"
        Event2Name="IPL"
        Event3Name="BPL"
        Event1Link="/Events"
        Event2Link="/Events"
        Event3Link="/Events"
        EventAltText1="psl-match-pic"
        EventAltText2="ipl-match-pic"
        EventAltText3="bpl-match-pic"
      />
      <Channels />
      <Pricing />
    </Layout>
  );
};

export default EventsPage;
