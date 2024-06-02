import React from "react";
import WatchBtn from "../WatchBtn";
import Image from "next/image";
import england from "@/public/img/england.svg";
import australia from "@/public/img/australia.svg";

const ScoreCards = ({ extraClass }: any) => {
  return (
    <div
      className={`${extraClass} flex items-center justify-center gap-4 w-fit px-4 h-[70px] border-r-[1px] border-gray-300`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image src={england} alt="england" />
          <p>145-10 {"(20)"}</p>
        </div>
        <div className="flex items-center gap-2">
          <Image src={australia} alt="england" />
          <p>132-10 {"(17.1)"}</p>
        </div>
      </div>
      <WatchBtn btnUrl="/Live-Channels" />
    </div>
  );
};

export default ScoreCards;
