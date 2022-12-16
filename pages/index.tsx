import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalePoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import NavigationBar from '../components/NavigationBar/NavigationBar'

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <MainLanding />
      <SalePoints />
      <Customers />
    </>
  )
}

export default Home