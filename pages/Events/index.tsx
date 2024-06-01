import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Channels from "../Components/Sections/Channels";
import EventsHero from "../Components/HeroBanners/EventsHero";
import eventpic1 from "@/public/img/events2.svg";
import Image from "next/image";
import eventpic3 from "@/public/img/events3.svg";
import Slider from "react-slick";
import WatchBtn from "../Components/WatchBtn";
import FeaturedEvents from "../Components/SectionsCards/FeaturedEvents";
import MostViewEvents from "../Components/SectionsCards/MostViewEvents";

const EventsPage = () => {
  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <Head>
        <title>Events - Spority</title>
      </Head>
      <EventsHero />
      <div className="fetured-events-most-view-events bg-[#0e0805] text-white px-20 pt-20 pb-40">
        <h3 className="text-4xl">Featured Events</h3>
        <div className="flex items-center justify-center gap-4 w-full py-8">
          <div className="featured-Events-post-eventpage flex items-center justify-center w-[50%] flex-wrap gap-4">
            <FeaturedEvents />
            <FeaturedEvents />
            <FeaturedEvents />
            <FeaturedEvents />
          </div>
          <div className="mostView-Events-post-eventpage w-[50%] flex flex-col items-center justify-center">
            <MostViewEvents />
          </div>
        </div>
      </div>
      <Channels />
      {/* <Pricing /> */}
    </Layout>
  );
};

export default EventsPage;
