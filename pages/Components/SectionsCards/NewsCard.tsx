import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ cardTilte, cardDescription, cardPic, postUrl }: any) => {
  return (
    <div className="newscard-section-box">
      <div className="imageBox-NewsCard w-full">
        <Image src={cardPic} alt="" />
      </div>
      <div className="contentBox-NewsCard">
        <Link
          href={`${postUrl}`}
          className="newscard-title-line"
        >
          {cardTilte}
        </Link>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default NewsCard;
