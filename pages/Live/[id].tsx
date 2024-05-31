/* eslint-disable react-hooks/exhaustive-deps */
import { mongooseConnection } from "@/lib/mongoose";
import { Channel } from "@/models/channel";
import Head from "next/head";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { MdShare, MdBookmarkAdd } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../Components/Layout";
import Image from "next/image";

const PlayerBox = ({ channels }: any) => {
  const [channelCardData, setChannelCardData] = useState<
    string | Boolean | Number | null | never | object | any
  >([]);
  useEffect(() => {
    axios.get("/api/channel").then((res) => {
      const data: any = res.data;
      setChannelCardData(data);
    });
  }, []);

  return (
    <>
      <Head>
        <title>{channels?.name} Live</title>
      </Head>
      <Layout>
        <div className="playerbox_player w-full px-14 py-12 flex flex-wrap items-start justify-between">
          <div className="mainbox w-[64%]">
            <iframe
              src={`${channels?.channelurl}`}
              scrolling="no"
              allowFullScreen
              className="w-[100%] h-[500px] rounded-md overflow-hidden"
            />
          </div>

          <div className="morechannelsidPage flex flex-wrap items-center justify-center gap-8 px-3 py-8 w-[36%]">
            {channelCardData?.map((channelCardData: any) => (
              <div key={0} className="flex flex-wrap">
                <div className="morechannelPic w-[180px] h-[140px]">
                  <Link href={channelCardData?._id}>
                    <Image
                      src={channelCardData?.picture}
                      alt={`${channels?.channelName}`}
                      width={180}
                      height={120}
                    />
                    {channelCardData?.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PlayerBox;

export async function getServerSideProps(context: any) {
  await mongooseConnection();
  const { id } = context.query;
  const channels = await Channel.findById(id);
  return {
    props: {
      channels: JSON.parse(JSON.stringify(channels)),
    },
  };
}
