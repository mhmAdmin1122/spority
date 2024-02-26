import React from "react";
import Layout from "../Components/Layout";
import Head from "next/head";
import BlogCard from "../Components/BlogCard";
import blogPIC from "@/public/img/clash.png";
import SectionHeader from "../Components/SectionHeader";

const BlogPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - Spority</title>
      </Head>
      <div className="bg-[#0a0a0a] text-[#fff] py-[40px]">
        <SectionHeader title="Read Our Blog" />
        <div className=" px-[30px] py-[60px] flex flex-wrap items-center justify-center gap-12">
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
          <BlogCard
            cardPic={blogPIC}
            postUrl="/Blog"
            cardTitle="Lorem ipsum dolor sit amet."
            cardDescription="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime fuga necessitatibus, at alias aspernatur aliquid blanditiis nemo neque tempora? Id dolor odit quos sapiente aliquam quod sed fugiat omnis consequatur."
          />
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
