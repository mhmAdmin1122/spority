import React from "react";
import SectionHeader from "../SectionHeader";
import clash from "@/public/img/clash.svg";
import ClashCard from "../SectionsCards/ClashCard";
import ViewMoreBtn from "../ViewMoreBtn";
import TopClashCard from "../SectionsCards/TopClashCard";

const Clashes = () => {
  return (
    <div className="TopClashes-MainDiv">
      <div className="px-[50px]">
        <h1 className="TopClashes-h1">Top Clashes</h1>
        <div className="flex gap-3 justify-center max-[860px]:flex-col max-[400px]:gap-2">
          <div className="">
            <div className="flex gap-3 justify-center max-[470px]:gap-2 max-[470px]:flex-col max-[470px]:items-center">
              <ClashCard />
              <ClashCard />
            </div>
            <div className="flex gap-3 mt-5 justify-center max-[470px]:gap-2 max-[470px]:mt-2 max-[470px]:flex-col max-[470px]:items-center">
              <ClashCard />
              <ClashCard />
            </div>
          </div>
          <div className="flex justify-center">
            <TopClashCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clashes;
