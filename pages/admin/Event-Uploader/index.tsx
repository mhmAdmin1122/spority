import Head from 'next/head'
import React from 'react'
import Layout from '../Layout'
import EventUploaderForm from '../EventUploaderForm'

const EventUploader = () => {
  return (
    <div>
      <Head>
        <title>Spority - Event Uploader</title>
      </Head>
      <Layout>
        <div className="px-[30px] py-[40px]">
          <h2 className='text-4xl text-center py-3'>Event Uploader</h2>
          <EventUploaderForm />
        </div>
      </Layout>
    </div>
  )
}

export default EventUploader
