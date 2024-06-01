import React from "react";
import bell from "@/public/img/bell.png";
import fadeBell from "@/public/img/fadeBell.svg";
import Image from "next/image";

const NewsLatter = () => {
  return (
    <div className="bg-[#0e0805] newsletter-box-livechannel w-full relative flex items-center justify-around px-20 pt-20 pb-40 overflow-hidden">
      <div className="newsletter-livechannel bg-[#181818] flex flex-col gap-4 p-20  rounded-md">
        <h2 className="text-gradient">Set Your Reminder Now</h2>
        <form className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-6 newlatter-form-inputs">
            <input
              type="text"
              className="px-4 h-[40px] w-[186px] rounded-sm outline-none"
              placeholder="Name"
            />
            <input
              type="text"
              className="px-4 h-[40px] w-[186px] rounded-sm outline-none"
              placeholder="Email"
            />
          </span>
          <button className="home-btn !w-full newslatter-action-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Image src={bell} alt="bell-opacity1-image" className="bell-newslatter" />
      <Image
        src={fadeBell}
        alt="bell-opacity0.2-image"
        className="absolute top-2 right-[-90px] fadebell"
      />
    </div>
  );
};

export default NewsLatter;
