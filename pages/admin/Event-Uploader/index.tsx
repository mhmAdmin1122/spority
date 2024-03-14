import Head from 'next/head'
import React from 'react'
import Layout from '../Layout'

const EventUploader = () => {
  return (
    <div>
      <Head>
        <title>Spority - Event Uploader</title>
      </Head>
      <Layout>
        <div className="px-[30px] py-[40px]">Event Uploader</div>
      </Layout>
    </div>
  )
}

export default EventUploader
