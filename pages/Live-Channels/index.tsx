import React from 'react'
import Layout from '../Components/Layout'
import Head from 'next/head'
import Channels from '../Components/Sections/Channels'
import Pricing from '../Components/Sections/Pricing'

const LiveChannelsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Live Channels - StartupMAXIM</title>
      </Head>
      <Channels />
      <Pricing />
    </Layout>
  )
}

export default LiveChannelsPage
