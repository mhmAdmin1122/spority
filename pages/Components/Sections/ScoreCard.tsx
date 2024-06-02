import React from "react";
import ScoreCards from "../SectionsCards/ScoreCards";
import WatchBtn from "../WatchBtn";

const ScoreCard = () => {
  return (
    <div className="score-card-section flex items-center border-y-[1px] h-[70px] border-[#f0f0f0] bg-[#000] text-[#fff]">
      <span className="inline-flex h-[70px] items-center px-4 border-r-[1px] border-gray-400">
        Matches
      </span>
      <span className="inline-flex h-[70px] items-center px-4 border-r-[1px] border-gray-400">
        Cricket
      </span>
      <span className="score-card-slider-box h-[70px] flex items-center">
        <ScoreCards extraClass="cardScore1" />
        <ScoreCards extraClass="cardScore2" />
        <ScoreCards extraClass="cardScore3" />
      </span>
      <span className="h-[70px] px-4 flex gap-3 items-center py-1">
        <h5>Watch Live</h5>
        <WatchBtn btnUrl="/Live-Channels" />
      </span>
    </div>
  );
};

export default ScoreCard;
