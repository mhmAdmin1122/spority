import React from 'react'
import Layout from './components/Layout'
import Head from 'next/head'
import ChannelCard from './components/ChannelCard'

const ChannelsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Spority - Admin Channels</title>
      </Head>
      <div className='relative flex flex-col gap-2'>
        <div className='body-box-topBar-channels flex gap-8 justify-end w-full py-4 px-6 rounded-t-md'>
          <h3>Traffic</h3>
          <h3>Live Watching</h3>
          <h3>Overview</h3>
          <h3>Action</h3>
        </div>
        <div className='channels-list flex flex-col w-full gap-4 h-[430px] overflow-scroll overflow-x-hidden'>
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
          <ChannelCard />
        </div>
      </div>
    </Layout>
  )
}

export default ChannelsPage
