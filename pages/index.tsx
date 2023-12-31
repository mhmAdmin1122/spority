import Head from "next/head";
import Layout from "./Site/Components/Layout";
import Banner from "./Site/Components/Banner";
import LiveChannel from "./Site/Components/LiveChannel";
import NewsChannel from "./Site/Components/NewsChannel";
import EventsBanner from "./Site/Components/EventsBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spority || Home</title>
        <meta name="description" content="Sports Live with Spority" />
        <meta name="keywords" content="Live, Watch Sport, WorldCup Live, Watch Live Cricket, Football, Tenis" />
      </Head>
      <Layout>
        <Banner />
        <LiveChannel />
        <NewsChannel />
        <EventsBanner />
        <iframe src="//stream.crichd.vip/update/ptv.php" width="60%" height="400px" scrolling="no" allowFullScreen={true} className="my-6" allow="encrypted-media"></iframe>
      </Layout>
    </>
  )
}