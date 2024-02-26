import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import SectionHeader from "../Components/SectionHeader";
import DescribeProblem from "../Components/Sections/DescribeProblem";

const Describe_Problem = () => {
  return (
    <Layout>
      <Head>
        <title>Describe Problem - Spority</title>
      </Head>
      <div className="contact-section-box">
        <SectionHeader title="Describe Problem" />
        <DescribeProblem />
      </div>
    </Layout>
  );
};

export default Describe_Problem;
