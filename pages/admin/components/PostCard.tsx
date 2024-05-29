import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaEdit, FaExternalLinkAlt, FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PostCard = () => {
  const [apiData, setApiData] = useState<any>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios.get("/api/post").then((res: any) => {
      const data = res.data;
      setApiData(data);
      setLoader(false);
    });
  }, []);

  const post = apiData?.map((user: any) => user);

  return (
    <div className="w-full flex flex-col justify-center">
      {loader ? (
        <div className="flex justify-center w-full items-center flex-col">
          Loading....
        </div>
      ) : (
        <div className="post-list flex flex-col w-full gap-4 h-[430px] overflow-scroll overflow-x-hidden">
          {post?.map((post: any) => (
            <div key={post?._id} className="relative flex items-center justify-between py-4 px-6 bg-[#F0F0F0] rounded-md text-black">
              <div className="w-[100px] h-[100px]">
                <Image
                  src={post?.pic}
                  alt={`${post?.title}`}
                  title={`${post?.title}`}
                  className="w-full h-full rounded-lg"
                  width={200}
                  height={200}
                />
              </div>
              {/* <div className="flex gap-[74px] items-center justify-start text-black"> */}
              <p>12</p>
              <p>2k+</p>
              <FaExternalLinkAlt className="text-xl hover:text-gray-500 cursor-pointer" />
              <div className="flex items-center gap-2 text-xl">
                <FaEye className="hover:text-gray-500 cursor-pointer" />
                <MdDelete className="hover:text-gray-500 cursor-pointer" />
                <FaEdit className="hover:text-gray-500 cursor-pointer" />
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostCard;
