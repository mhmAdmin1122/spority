import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import SectionHeader from "../Components/SectionHeader";
import DisclaimerSection from "../Components/Sections/DisclaimerSection";

const EventsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Disclaimer - Spority</title>
      </Head>
      <div className="contact-section-box">
        <SectionHeader title="Disclaimer" />
        <DisclaimerSection />
      </div>
    </Layout>
  );
};

export default EventsPage;
