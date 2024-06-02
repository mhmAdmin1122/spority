import React from 'react'

const TopClashCard = () => {
  return (
    <div className="TopClashes-Card2">
      <div className="flex gap-2 w-full px-3  max-[400px]:px-[6px]">
        <div className="w-[330px] max-[975px]:w-[280px] max-[920px]:w-[270px]  max-[400px]:w-[150px]">
          <h1 className=" text-white font-extrabold text-[20px]">
            Bumrah the game Changer
          </h1>
          <p className="text-[14px] text-gray-300 font-semibold leading-[16px]  max-[920px]:text-[12px]">
            Watch the hightlight of the most anticipated game in the cricket
          </p>
        </div>
        <div className="h-fit">
          <button className=" text-[#e3652b] font-bold text-[15px] px-2 py-2 mt-1 border-[2px] border-[#e3652b] max-[975px]:text-[12px] max-[920px]:text-[10px] max-[920px]:px-[2px">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopClashCard;
