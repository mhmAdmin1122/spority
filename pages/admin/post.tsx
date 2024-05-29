import React from "react";
import Layout from "./components/Layout";
import Head from "next/head";
import PostCard from "./components/PostCard";
import Link from "next/link";

const PostPage = () => {
  return (
    <Layout>
      <Head>
        <title>Spority - Admin Post</title>
      </Head>
      <div className="relative">
        <Link href="/admin/postform" className="add-post-btn-admin">
          Add Post
        </Link>
        
        <div className="body-box-topBar-post flex gap-[5rem] justify-end w-full py-4 px-6 rounded-t-md">
          <h3 className="w-[90px]">Impression</h3>
          <h3 className="w-[90px]">engagement</h3>
          <h3 className="w-[90px]">Overview</h3>
          <h3 className="w-[90px]">Action</h3>
        </div>

        <PostCard />
      </div>
    </Layout>
  );
};

export default PostPage;
