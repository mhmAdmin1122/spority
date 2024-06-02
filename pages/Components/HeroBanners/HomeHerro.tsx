import React from "react";
import WatchBtn from "../WatchBtn";

const HomeHerro = () => {
  return (
    <div className="Hero-Section-MainDiv">
      <div className="w-[450px] pl-[50px] pb-[80px] max-[860px]:pl-[40px] max-[860px]:w-[360px] max-[400px]:w-[300px] max-[340px]:w-[280px]">
        <h1 className="">Watch Rage of Starc</h1>
        <p className="">
          We are a full services digital agency that bulids immesive user
          experience
        </p>
          <WatchBtn btnUrl="/Live-Channels" classextra="mt-4" />
      </div>
    </div>
  );
};

export default HomeHerro;