import React from "react";

const EventUploader = () => {
  return (
    <form className="flex flex-col gap-6 justify-center py-6 items-center w-full">
      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
          placeholder="Event Name"
        />
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
          placeholder="Event Category"
        />
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Channel Api Base"
        />
        <textarea
          rows={6}
          cols={10}
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="About Event"
        />
      </div>

      <div className="flex items-center w-full gap-6 flex-wrap justify-center">
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
          placeholder="Event Day"
        />
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[40%] text-[#000]"
          placeholder="Event Month"
        />
        <input
          type="text"
          className="outline-none px-2 py-1 rounded-[2.86px] w-[83%] text-[#000]"
          placeholder="Event Year"
        />
      </div>

      <div className="flex flex-col gap-3 w-[83%]">
        <h2 className="text-left w-full text-xl font-bold">Event Pic</h2>
        <div className="bg-[#fff] px-6 py-3 w-full">
          <input type="file" />
        </div>
      </div>

      <button type="submit" className="bg-colored-post-btn px-5 py-2">
        Submit Now
      </button>
    </form>
  );
};

export default EventUploader;
