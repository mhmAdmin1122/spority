import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";
import Grossviewcard from "./components/Grossviewcard";

const AdminHome = () => {
  return (
    <div>
      <Head>
        <title>Spority - Admin Home</title>
      </Head>
      <Layout>
        <div className="">
          <Grossviewcard />
        </div>
      </Layout>
    </div>
  );
};

export default AdminHome;
