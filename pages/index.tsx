import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalesPoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import ApplicationSteps from '../components/ApplicationSteps/ApplicationSteps'
import BasePage from '../components/BasePage/BasePage'

const Home: NextPage = () => {
  return (
    <BasePage subPageName='home'>
      <>
        <MainLanding />
        <SalesPoints />
        <ApplicationSteps />
        <Customers />
      </>
    </BasePage>
  )
}

export default Home

interface Props {
  locale: string
}

export function getStaticProps({ locale }: Props) {
  return {
      props: {
          messages: {
              ...require(`/messages/${locale}.json`),
          },
      },
  }
}