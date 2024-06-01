import Link from "next/link";
import React from "react";
import eventpic1 from "@/public/img/events2.svg";
import Image from "next/image";
import eventpic3 from "@/public/img/events3.svg";
import Slider from "react-slick";

const EventsHero = () => {
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
    <div className="event-page-hero-banner w-full overflow-hidden h-[80vh]">
      <div className="slider-container w-full h-[80vh] overflow-hidden">
        <Slider {...settings}>
          <div className="object-cover w-full h-full">
            <Image
              src={eventpic3}
              alt="image-of-banner"
              className="object-cover w-full"
            />
          </div>
          <div className="object-cover w-full h-full">
            <Image
              src={eventpic1}
              alt="image-of-banner"
              className="object-cover w-full"
            />
          </div>
          <div className="object-cover w-full h-full">
            <Image
              src={eventpic3}
              alt="image-of-banner"
              className="object-cover w-full"
            />
          </div>
          <div className="object-cover w-full h-full">
            <Image
              src={eventpic1}
              alt="image-of-banner"
              className="object-cover w-full"
            />
          </div>
          <div className="object-cover w-full h-full">
            <Image
              src={eventpic3}
              alt="image-of-banner"
              className="object-cover w-full"
            />
          </div>
          <div className="object-cover w-full h-full">
            <Image
              src={eventpic1}
              alt="image-of-banner"
              className="object-cover w-full"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default EventsHero;
