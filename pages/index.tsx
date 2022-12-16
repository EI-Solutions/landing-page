import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalePoints from '../components/SalesPoints/SalesPoints'

const Home: NextPage = () => {
  return (
    <div>
      <SalePoints />
      <Customers />
    </div>
  )
}

export default Home