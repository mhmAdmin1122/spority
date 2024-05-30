import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaEdit, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const ChannelCard = () => {
  const [apiData, setApiData] = useState<any>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("/api/channel").then((res: any) => {
      const data = res.data;
      setApiData(data);
      setLoader(false);
    });
  }, []);

  const channel = apiData?.map((user: any) => user);

  return (
    <div className="w-full flex flex-col justify-center">
      {loader ? (
        <div className="flex justify-center w-full items-center flex-col">
          Loading....
        </div>
      ) : (
        <div className="channels-list flex flex-col w-full gap-4 h-[430px] overflow-scroll overflow-x-hidden">
          {channel?.map((channel: any) => (
            <div className="relative flex items-center justify-between py-4 px-6 bg-[#F0F0F0] rounded-md">
              <div className="w-[100px] h-[100px]">
                <Image
                  src={channel?.picture}
                  alt={`${channel?.name}-Logo`}
                  title={`${channel?.name}`}
                  className="w-full h-full rounded-full"
                  width={200}
                  height={200}
                />
              </div>
              <div className="flex gap-[63px] items-center justify-start text-black">
                <p>2k+</p>
                <p>2k+</p>
                <Link href={`/Live/${channel?._id}`}>
                  <FaExternalLinkAlt className="text-xl hover:text-gray-500 cursor-pointer" />
                </Link>
                <div className="flex items-center gap-2 text-xl">
                  <FaEye className="hover:text-gray-500 cursor-pointer" />
                  <MdDelete className="hover:text-gray-500 cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChannelCard;
