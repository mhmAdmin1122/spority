import React from 'react'
import Layout from './components/Layout'
import Head from 'next/head'
import EventUploader from './components/EventUploader'

const EventFormPage = () => {
  return (
    <Layout>
      <Head>
        <title>Spority - Channel Uploader</title>
      </Head>
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-bold text-center">Event Uploader</h3>
        <div className="w-full h-[430px] overflow-scroll overflow-x-hidden channel-uploader-list-form">
          <EventUploader />
        </div>
      </div>
    </Layout>
  )
}

export default EventFormPage
