import React from "react";

const ChannelUploaderForm = () => {
  return (
    <form className="flex flex-col gap-6 items-center justify-center text-[#000]">
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Channel Name"
        />
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Channel Type"
        />
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Channel Country"
        />
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Channel Link"
        />
      </div>
      <input
        type="file"
        className="px-[12px] py-[8px] bg-[#fff] rounded-sm outline-none max-w-[600px]"
      />
      <textarea
        rows={6}
        cols={52}
        className="px-[12px] py-[8px] rounded-sm outline-none max-w-[540px]"
        placeholder="About Channel at least 25 words or 180 Character"
      />
      <button className="bg-[#fff] px-6 py-2 rounded-sm font-medium">Upload</button>
    </form>
  );
};

export default ChannelUploaderForm;
