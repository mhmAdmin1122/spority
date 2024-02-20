import React from "react";
import SectionHeader from "../SectionHeader";
import ViewMoreBtn from "../ViewMoreBtn";
import NewsCard from "../SectionsCards/NewsCard";
import newspic from "@/public/img/clash.svg";

const News = () => {
  return (
    <div className="news-section-box">
      <SectionHeader title="Top News" />
      <div className="news-section-cardbox">
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
        <NewsCard
          cardTilte="Bushra Bibi is playing a crucial role"
          cardDescription="Lorem ipsum dolor sit amet consectetur. Scelerisque pretium."
          cardPic={newspic}
          postUrl="/"
        />
      </div>
      <ViewMoreBtn btnText="View More" btnUrl="/" />
    </div>
  );
};

export default News;
