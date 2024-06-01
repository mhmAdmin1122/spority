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
        <title>{channels?.name} Live - Spority</title>
      </Head>
      <Layout>
        <div className="playerbox_player w-full px-14 py-12 flex flex-col items-center justify-center bg-[#0e0805]">
          <div className="mainbox-livepage-streamer w-[70%]">
            <iframe
              src={`${channels?.channelurl}`}
              scrolling="no"
              allowFullScreen
              className="w-full h-[530px]"
            />
          </div>
          <div className="flex flex-col items-start gap-2 w-full">
            <h2 className="text-[#fff] text-4xl font-bold pt-12">
              Watch More Channels
            </h2>
            <div className="morechannelsidPage flex flex-wrap items-center justify-center gap-8 px-3 py-8 w-full">
              {channelCardData?.map((channelCardData: any) => (
                <div key={0} className="flex flex-wrap">
                  <Link
                    href={channelCardData?._id}
                    className="morechannelPic flex flex-col items-center gap-2"
                  >
                    <div className="w-[120px] h-[120px]">
                      <Image
                        src={channelCardData?.picture}
                        alt={`${channelCardData?.name}`}
                        title={`${channelCardData?.name}`}
                        width={180}
                        height={120}
                        className="w-full h-full rounded-full cursor-context-menu"
                      />
                    </div>
                    <p className="font-medium text-[#bd3e3c] hover:underline">
                      {channelCardData?.name}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
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
