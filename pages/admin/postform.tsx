import React from "react";
import Layout from "./components/Layout";
import Head from "next/head";
import PostForm from "./components/PostForm";

const PostFormPage = () => {
  return (
    <Layout>
      <Head>
        <title>Spority - Write Post</title>
      </Head>
      <div>
        <h3 className="text-center text-2xl font-bold">Write Post</h3>
        <div className="h-[430px] overflow-scroll overflow-x-hidden postform-box-admin">
          <PostForm />
        </div>
      </div>
    </Layout>
  );
};

export default PostFormPage;
