import React from "react";

const ScoreCard = () => {
  return (
    <div className="score-card-section flex items-center border-b-[10px] border-[#ff4500] bg-[#fff] text-[#212121]">
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

      <div className="score-card-slider-box px-[40px] py-[20px]">
        slider
      </div>
    </div>
  );
};

export default ScoreCard;
