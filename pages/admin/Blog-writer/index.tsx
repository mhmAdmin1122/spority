import Head from 'next/head'
import React from 'react'
import Layout from '../Layout'

const BlogWriter = () => {
  return (
    <div>
    <Head>
      <title>Spority - Blog Writer</title>
    </Head>
    <Layout>
      <div className="px-[30px] py-[40px]">Blog Writer</div>
    </Layout>
  </div>
  )
}

export default BlogWriter
