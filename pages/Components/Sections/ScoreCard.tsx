import React from "react";
import Sliders from "../Sliders/Sliders";
import Image from "next/image";
import england from "@/public/img/england.svg";
import australia from "@/public/img/australia.svg";
import Link from "next/link";

const ScoreCard = () => {
  return (
    <div className="score-card-section flex items-center border-b-[10px] border-[#ff4500] bg-[#fff] text-[#212121]">
      <div className="flex flex-wrap justify-center items-center">
        <div className="score-card-box1">
          <h3 className="text-xl font-medium px-[40px] py-[20px] border-r-[4px] border-gray-400">
            Matches
          </h3>
        </div>

        <div className="score-card-option-box px-[40px] py-[20px] border-r-[4px] border-gray-400">
          <select className="outline-none">
            <option value="cricket">Criket</option>
            <option value="cricket">FootBall</option>
            <option value="cricket">VollyBall</option>
            <option value="cricket">Tennis</option>
          </select>
        </div>
      </div>

      <div className="score-card-slider-box w-[70%] flex items-center">
        <div className="flex items-center justify-center w-[340px] border-r-4 border-gray-300">
          <div className="flex flex-col justify-start gap-2 px-[40px]">
            <div className="flex items-center gap-2">
              <Image src={england} alt="england" />
              <p>145-10 {"(20)"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={australia} alt="england" />
              <p>132-10 {"(17)"}</p>
            </div>
          </div>
          <Link href="/" className="bg-[#00ff] text-[#fff] font-medium text-center flex items-center justify-center px-[20px] py-[6px] rounded-md">Watch More</Link>
        </div>

        <div className="flex items-center justify-center w-[340px] border-r-4 border-gray-300">
          <div className="flex flex-col justify-start gap-2 px-[40px]">
            <div className="flex items-center gap-2">
              <Image src={england} alt="england" />
              <p>145-10 {"(20)"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={australia} alt="england" />
              <p>132-10 {"(17)"}</p>
            </div>
          </div>
          <Link href="/" className="bg-[#00ff] text-[#fff] font-medium text-center flex items-center justify-center px-[20px] py-[6px] rounded-md">Watch More</Link>
        </div>

        <div>
          <Link href={"/"} className="px-[20px] text-wrap justify-center flex items-center font-medium">Watch Live Channels</Link>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
