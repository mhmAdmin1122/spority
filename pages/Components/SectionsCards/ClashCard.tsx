import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ClashCard = ({cardPic, altText, videoSec, videoLink}:any) => {
  const [isShown, setIsShown] = useState(false);

  const handleHover = (event: any) => {
    setIsShown((current) => !current);
  };
  return (
    <Link href={`${videoLink}`} className="clashes-cards w-[260px] relative rounded-md overflow-hidden">
      <Image
        src={cardPic}
        alt={altText}
        className="w-full h-full cursor-pointer"
        onMouseOver={handleHover}
        onMouseOut={handleHover}
      />
      {isShown && (
        <b className="absolute bottom-1 right-1 bg-[#111111cc] px-[15px] py-[7px] rounded-md cursor-context-menu">
          {videoSec} sec
        </b>
      )}
    </Link>
  );
};

export default ClashCard;
