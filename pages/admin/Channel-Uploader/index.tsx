import Head from 'next/head'
import React from 'react'
import Layout from '../Layout'
import ChannelUploaderForm from '../ChannelUploaderForm'

const ChannelUploader = () => {
  return (
    <div>
    <Head>
      <title>Spority - Channel Uploader</title>
    </Head>
    <Layout>
      <div className="px-[30px] py-[40px]">
        <h2 className='text-4xl text-center py-3'>Channel Uploader</h2>
        <div>
          <ChannelUploaderForm />
        </div>
      </div>
    </Layout>
  </div>
  )
}

export default ChannelUploader
