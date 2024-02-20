import React from "react";
import SectionHeader from "../SectionHeader";
import clash from "@/public/img/clash.svg";
import ClashCard from "../SectionsCards/ClashCard";
import ViewMoreBtn from "../ViewMoreBtn";

const Clashes = () => {
  return (
    <div className="clashes-section-box">
      <SectionHeader title="Top Clashes" />
      <div className="clashes-section-cardbox">
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
