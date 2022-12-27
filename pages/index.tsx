import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalesPoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import Footer from '../components/Footer/Footer'
import ApplicationSteps from '../components/ApplicationSteps/ApplicationSteps'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ei Solutions - Hjem</title>
      </Head>
      <MainLanding />
      <SalesPoints />
      <ApplicationSteps />
      <Customers backgroundColor='bg-gradient-to-r from-ei-dark-green to-ei-green py-20' />
      <Footer />
    </>
  )
}

export default Home