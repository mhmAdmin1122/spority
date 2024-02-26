import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import Faqs from "../Components/Sections/Faqs";
import SectionHeader from "../Components/SectionHeader";

const FAQs = () => {
  return (
    <Layout>
      <Head>
        <title>FAQs - Spority</title>
      </Head>
      <div className="contact-section-box">
        <SectionHeader title="FAQs" />
        <Faqs />
      </div>
    </Layout>
  );
};

export default FAQs;
