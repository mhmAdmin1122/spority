import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ChannelsCard = () => {
  const [channelCardData, setChannelCardData] = useState<any[]>([]);

  useEffect(() => {
    axios.get("/api/channel").then((res) => {
      const data = res.data;
      const shuffledData = data.sort(() => 0.5 - Math.random());
      const selectedData = shuffledData.slice(0, 6);
      setChannelCardData(selectedData);
    });
  }, []);

  return (
    <div className="flex items-center gap-24 flex-wrap justify-center py-14">
      {channelCardData?.map((channelCardData: any) => (
        <div
          key={channelCardData?._id}
          className="flex items-center gap-4"
        >
          <Link href={`/Live/${channelCardData?._id}`} className="w-[260px] h-[260px]">
            <Image
              src={channelCardData?.picture}
              alt={`${channelCardData?.channelName}`}
              width={180}
              height={120}
              className="w-full h-full rounded-lg"
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ChannelsCard;
