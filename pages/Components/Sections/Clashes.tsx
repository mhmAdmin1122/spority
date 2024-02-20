import React from "react";
import SectionHeader from "../SectionHeader";
import clash from "@/public/img/clash.svg";
import ClashCard from "../SectionsCards/ClashCard";
import ViewMoreBtn from "../ViewMoreBtn";

const Clashes = () => {
  return (
    <div className="bg-[#000] border-b-[10px] border-[#ff4500] text-[#fff] px-[40px] py-[60px]">
      <SectionHeader title="Top Clashes" />
      <div className="py-[60px] flex items-center flex-wrap justify-center gap-12">
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
        <ClashCard
          cardPic={clash}
          altText="clash-pic"
          videoSec="24.03"
          videoLink="/"
        />
      </div>
      <ViewMoreBtn btnText="View More" btnUrl="/" />
    </div>
  );
};

export default Clashes;
