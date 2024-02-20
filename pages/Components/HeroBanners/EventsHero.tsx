import Image from "next/image";
import Link from "next/link";
import React from "react";

const EventsHero = ({
  imageSrc1,
  imageSrc2,
  imageSrc3,
  Event1Name,
  Event2Name,
  Event3Name,
  Event1Link,
  Event2Link,
  Event3Link,
  EventAltText1,
  EventAltText2,
  EventAltText3,
}: any) => {
  return (
    <div className="flex justify-center items-center w-full">
      <Link href={`${Event1Link}`} title={Event1Name}>
        <Image src={imageSrc1} alt={EventAltText1} />
      </Link>
      <Link href={`${Event2Link}`} title={Event2Name}>
        <Image src={imageSrc2} alt={EventAltText2} />
      </Link>
      <Link href={`${Event3Link}`} title={Event3Name}>
        <Image src={imageSrc3} alt={EventAltText3} />
      </Link>
    </div>
  );
};

export default EventsHero;
