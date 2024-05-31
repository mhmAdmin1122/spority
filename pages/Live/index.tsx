import React from 'react'
import Layout from '../Components/Layout'
import Head from 'next/head'

const LivePage = () => {
  return (
    <Layout>
      <Head>
        <title>Watch Live Channels - Spority</title>
      </Head>
      <div className='min-h-screen'>
        Live channel
      </div>
    </Layout>
  )
}

export default LivePage
