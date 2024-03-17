import React from "react";

const EventUploaderForm = () => {
  return (
    <form className="flex flex-col gap-6 items-center justify-center text-[#000]">
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Event Name"
        />
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Event Category"
        />
      </div>
      <div className="flex items-center gap-4 flex-wrap">
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Event TV Link"
        />
        <input
          type="text"
          className="px-[12px] py-[8px] rounded-sm outline-none max-w-[280px]"
          placeholder="Event Held By"
        />
      </div>
      <input
        type="file"
        className="px-[12px] py-[8px] bg-[#fff] rounded-sm outline-none max-w-[600px]"
        placeholder="Event Pic"
      />
      <textarea
        rows={6}
        cols={52}
        className="px-[12px] py-[8px] rounded-sm outline-none max-w-[540px]"
        placeholder="Event Pic"
      />
      <button className="bg-[#fff] px-6 py-2 rounded-sm font-medium">Upload</button>
    </form>
  );
};

export default EventUploaderForm;
