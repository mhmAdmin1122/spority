import Head from "next/head";
import Layout from "./Site/Components/Layout";
import HeroSlick from "./Site/Components/HeroSlick";

export default function Home() {
  return (
    <>
      <Head>
        <title>Spority || Sport Home</title>
        <meta name="description" content="Sports Live with Spority" />
        <meta name="keywords" content="Live, Watch Sport, WorldCup Live, Watch Live Cricket, Football, Tenis" />
      </Head>
      <Layout>
        <HeroSlick />
        Home Page ....
      </Layout>
    </>
  )
}