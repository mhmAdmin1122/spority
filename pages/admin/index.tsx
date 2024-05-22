import Head from "next/head";
import React from "react";
import Layout from "./components/Layout";

const AdminHome = () => {
  return (
    <div>
      <Head>
        <title>Spority - Admin Home</title>
      </Head>
      <Layout>
        <div className="">Spority Admin</div>
      </Layout>
    </div>
  );
};

export default AdminHome;
