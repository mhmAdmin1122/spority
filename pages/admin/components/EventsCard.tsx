// import React from "react";
// import { SlCalender } from "react-icons/sl";
// import { IoLocationSharp } from "react-icons/io5";
// import { FaEye, FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";

// const EventsCard = () => {
//   return (
// <div className="w-[316px] p-6 rounded-lg bg-[#F0F0F0] text-black flex flex-col">
//   <h2 className="text-center font-medium text-xl pb-4">ICC T20 World Cup 2024</h2>
//   <div className="flex flex-col gap-3 pb-4">
//     <div className="flex items-center gap-2">
//       <SlCalender />
//       <p className="text-gray-500">20/12/2024</p>
//     </div>
//     <div className="flex items-center gap-2">
//       <IoLocationSharp />
//       <p className="text-gray-500">USA &amp; Windies</p>
//     </div>
//   </div>
//   <div className="flex items-center gap-2 justify-end text-lg">
//     <FaEye className="hover:text-gray-500 cursor-pointer" />
//     <MdDelete className="hover:text-gray-500 cursor-pointer" />
//     <FaEdit className="hover:text-gray-500 cursor-pointer" />
//   </div>
// </div>
//   );
// };

// export default EventsCard;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit, FaEye } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { SlCalender } from "react-icons/sl";

const EventsCard = () => {
  const [apiData, setApiData] = useState<any>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("/api/event").then((res: any) => {
      const data = res.data;
      setApiData(data);
      setLoader(false);
    });
  }, []);

  const event = apiData?.map((user: any) => user);

  return (
    <div className="w-full flex flex-col justify-center">
      {loader ? (
        <div className="flex justify-center w-full items-center flex-col">
          Loading....
        </div>
      ) : (
        <div className="flex flex-wrap gap-10 justify-center h-[430px] overflow-scroll overflow-x-hidden events-list">
          {event?.map((event: any) => (
            <div className="w-[316px] h-[190px] p-6 rounded-lg bg-[#F0F0F0] text-black flex flex-col">
              <h2 className="text-center font-medium text-xl pb-4">
                {event?.name}
              </h2>
              <div className="flex flex-col gap-3 pb-4">
                <div className="flex items-center gap-2">
                  <SlCalender />
                  <p className="text-gray-500">
                    {event?.eventday}/{event?.eventmonth}/{event?.eventyear}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <IoLocationSharp />
                  <p className="text-gray-500">{event?.eventCountry}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 justify-end text-lg">
                <FaEye className="hover:text-gray-500 cursor-pointer" />
                <MdDelete className="hover:text-gray-500 cursor-pointer" />
                <FaEdit className="hover:text-gray-500 cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsCard;
