import Head from "next/head";
import Layout from "./Site/Components/Layout";
import Banner from "./Site/Components/Banner";
import LiveChannel from "./Site/Components/LiveChannel";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spority || Sport Home</title>
        <meta name="description" content="Sports Live with Spority" />
        <meta name="keywords" content="Live, Watch Sport, WorldCup Live, Watch Live Cricket, Football, Tenis" />
      </Head>
      <Layout>
        <Banner />
        <LiveChannel />
      </Layout>
    </>
  )
}