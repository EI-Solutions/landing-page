import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalePoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'

const Home: NextPage = () => {
  return (
    <div>
      <MainLanding />
      <SalePoints />
      <Customers />
    </div>
  )
}

export default Home