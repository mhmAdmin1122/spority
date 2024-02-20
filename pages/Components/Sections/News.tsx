import React from "react";
import SectionHeader from "../SectionHeader";
import ViewMoreBtn from "../ViewMoreBtn";
import NewsCard from "../SectionsCards/NewsCard";
import newspic from "@/public/img/clash.svg";

const News = () => {
  return (
    <div className="bg-[#000] border-b-[10px] border-[#ff4500] text-[#fff] px-[40px] py-[60px]">
      <SectionHeader title="Top News" />
      <div className="py-[60px] flex items-center flex-wrap justify-center gap-12">
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
