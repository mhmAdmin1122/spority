import React from 'react'
import Layout from '../Components/Layout'
import Head from 'next/head'
import PrivacyPolicy from '../Components/Sections/PrivacyPolicy'
import SectionHeader from '../Components/SectionHeader'

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy - Spority</title>
      </Head>
      <div className='privacy-policy-section-box px-[40px] py-[60px] h-screen overflow-scroll overflow-x-hidden bg-[#000] text-[#fff]'>
        <SectionHeader title="Privacy Policy" />
        <PrivacyPolicy />
      </div>
    </Layout>
  )
}

export default PrivacyPolicyPage
