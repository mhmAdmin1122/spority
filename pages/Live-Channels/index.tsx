import React from 'react'
import Layout from '../Components/Layout'
import Head from 'next/head'
import Channels from '../Components/Sections/Channels'
import Pricing from '../Components/Sections/Pricing'
import NewsLatter from '../Components/Sections/NewsLatter'

const LiveChannelsPage = () => {
  return (
    <Layout>
      <Head>
        <title>Live Channels - StartupMAXIM</title>
      </Head>
      <Channels />
      <Pricing />
      <NewsLatter />
    </Layout>
  )
}

export default LiveChannelsPage
