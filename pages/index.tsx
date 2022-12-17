import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalesPoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import Footer from '../components/Footer/Footer'
import ApplicationSteps from '../components/ApplicationSteps/ApplicationSteps'

const Home: NextPage = () => {
  return (
    <>
      <MainLanding />
      <SalesPoints />
      <ApplicationSteps />
      <Customers />
      <Footer />
    </>
  )
}

export default Home