import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import ContactForm from "../Components/Sections/ContactForm";
import SectionHeader from "../Components/SectionHeader";

const ContactPage = () => {
  return (
    <Layout>
      <Head>
        <title>Contact - Spority</title>
      </Head>
      <div className="contact-section-box">
        <SectionHeader title="Contact Us" />
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
