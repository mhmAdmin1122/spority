import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsCard = ({ cardTilte, cardDescription, cardPic, postUrl }: any) => {
  return (
    <div className="w-[260px] rounded-md overflow-hidden">
      <div className="imageBox-NewsCard w-full">
        <Image src={cardPic} alt="" className="w-full h-full" />
      </div>
      <div className="contentBox-NewsCard bg-[#ff4500] w-full px-[10px] py-[20px]">
        <Link
          href={`${postUrl}`}
          className="text-lg text-justify font-bold hover:text-[#000] transition-all duration-700 delay-300 ease-in-out"
        >
          {cardTilte}
        </Link>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default NewsCard;
