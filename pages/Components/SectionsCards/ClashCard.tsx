import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ClashCard = ({cardPic, altText, videoSec, videoLink}:any) => {
  const [isShown, setIsShown] = useState(false);

  const handleHover = (event: any) => {
    setIsShown((current) => !current);
  };
  return (
    <Link href={`${videoLink}`} className="clashes-cards">
      <Image
        src={cardPic}
        alt={altText}
        onMouseOver={handleHover}
        onMouseOut={handleHover}
      />
      {isShown && (
        <b className="time-stamp-clash-card">
          {videoSec} sec
        </b>
      )}
    </Link>
  );
};

export default ClashCard;
