import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WatchBtn from "../WatchBtn";

const EventsCards = () => {
  const [apiData, setApiData] = useState<any>([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    axios.get("/api/event").then((res) => {
      const data = res.data;
      const shuffledData = data.sort(() => 0.5 - Math.random());
      const selectedData = shuffledData.slice(0, 3);
      setApiData(selectedData);
      setLoader(false);
    });
  }, []);

  const event = apiData?.map((user: any) => user);
  return (
    <div className="w-full flex flex-col justify-center items-center event-card-box">
      {loader ? (
        <div className="flex justify-center w-full items-center flex-col">
          Loading....
        </div>
      ) : (
        <div className="flex flex-col gap-4 justify-center h-[430px] items-center events-list">
          {event?.map((event: any) => (
            <div
              key={event?._id}
              className="w-[260px] h-[180px] object-cover overflow-hidden rounded-lg bg-[#0C0501] text-black flex flex-col hover:shadow-md hover:shadow-gray-700 relative transition-all duration-700 ease-in-out event-card"
            >
              <Image
                src={event?.picture}
                alt={`${event?.name}`}
                title={`${event?.name}`}
                width={120}
                height={90}
                className="w-full h-full"
              />
              <WatchBtn
                classextra="absolute z-30 watch-now-btn !py-4"
                btnUrl={event?.eventchannel1}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsCards;
