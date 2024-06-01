import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Channels from "../Components/Sections/Channels";
import Pricing from "../Components/Sections/Pricing";
import EventsHero from "../Components/HeroBanners/EventsHero";
import eventpic1 from "@/public/img/events2.svg";
import Image from "next/image";
import eventpic3 from "@/public/img/events3.svg";
import Slider from "react-slick";

const EventsPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Layout>
      <Head>
        <title>Events - Spority</title>
      </Head>

      <div className="event-page-hero-banner w-full overflow-hidden h-[80vh]">
        <div className="slider-container w-full h-[80vh] overflow-hidden">
          <Slider {...settings}>
            <div className="object-cover w-full h-full">
              <Image src={eventpic3} alt="image-of-banner" className="object-fill w-full" />
            </div>
            <div className="object-cover w-full h-full">
              <Image src={eventpic1} alt="image-of-banner" className="object-cover w-full" />
            </div>
            <div className="object-cover w-full h-full">
              <Image src={eventpic3} alt="image-of-banner" className="object-cover w-full" />
            </div>
            <div className="object-cover w-full h-full">
              <Image src={eventpic1} alt="image-of-banner" className="object-cover w-full" />
            </div>
            <div className="object-cover w-full h-full">
              <Image src={eventpic3} alt="image-of-banner" className="object-cover w-full" />
            </div>
            <div className="object-cover w-full h-full">
              <Image src={eventpic1} alt="image-of-banner" className="object-cover w-full" />
            </div>
          </Slider>
        </div>
      </div>
      {/* <EventsHero
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
      /> */}
      <Channels />
      <Pricing />
    </Layout>
  );
};

export default EventsPage;
