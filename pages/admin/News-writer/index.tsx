import Head from 'next/head'
import React from 'react'
import Layout from '../Layout'

const NewsWriterPage = () => {
  return (
    <div>
      <Head>
        <title>Spority - News Writer</title>
      </Head>
      <Layout>
        <div className="px-[30px] py-[40px]">News Writer</div>
      </Layout>
    </div>
  )
}

export default NewsWriterPage
