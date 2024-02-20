import React from "react";

const NewsLatter = () => {
  return (
    <div className="newlatter-box h-[400px] border-b-[10px] border-[#ff4500]">
      <div className="bg-[#0000009c] w-full h-full flex items-center justify-center">
        <form className="newlatter-form bg-[#000] text-[#fff] w-[80%] px-[40px] py-[20px] rounded-md flex flex-col items-center justify-center">
          <h3 className="text-[45px] font-bold text-center">
            Subscribe For More
          </h3>
          <div className="input-Boxes-newslatter-form py-[14px] flex items-center justify-center gap-10">
            <input
              type="text"
              className="px-[20px] py-[10px] w-[300px] rounded-md"
              placeholder="Name"
            />
            <input
              type="text"
              className="px-[20px] py-[10px] w-[300px] rounded-md"
              placeholder="Email"
            />
          </div>
          <div className="font-bold text-center bg-[#ff4500] text-[#000] w-[79%] px-[40px] py-[10px] rounded-md">
            <button type="submit" className="">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
