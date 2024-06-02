import Head from "next/head";
import Layout from "./Components/Layout";
import HomeHerro from "./Components/HeroBanners/HomeHerro";
import Clashes from "./Components/Sections/Clashes";
import News from "./Components/Sections/News";
import NewsLatter from "./Components/Sections/NewsLatter";
import ScoreCard from "./Components/Sections/ScoreCard";

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Home - Spority</title>
        <meta
          name="description"
          content="Watch your favourite Sports Channel and read daily news about your favourites sports on spority.live."
        />
      </Head>
      <section className="">
        <HomeHerro />
        {/* <ScoreCard /> */}
        <Clashes />
        <NewsLatter />
      </section>
    </Layout>
  );
};

export default HomePage;
