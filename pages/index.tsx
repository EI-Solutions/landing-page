import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalePoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <MainLanding />
      <SalePoints />
      <Customers />
      <Footer />
    </>
  )
}

export default Home