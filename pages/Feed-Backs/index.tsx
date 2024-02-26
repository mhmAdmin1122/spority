import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import SectionHeader from "../Components/SectionHeader";
import FeedbackForm from "../Components/Sections/FeedbackForm";

const Describe_Problem = () => {
  return (
    <Layout>
      <Head>
        <title>Feedback - Spority</title>
      </Head>
      <div className="contact-section-box">
        <SectionHeader title="Feedback" />
        <FeedbackForm />
      </div>
    </Layout>
  );
};

export default Describe_Problem;
