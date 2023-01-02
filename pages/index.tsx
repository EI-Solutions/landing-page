import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalesPoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import Footer from '../components/Footer/Footer'
import ApplicationSteps from '../components/ApplicationSteps/ApplicationSteps'
import Head from 'next/head'
import { useTranslations } from 'next-intl'

const Home: NextPage = () => {
  const t = useTranslations('Head')
  return (
    <>
      <Head>
        <title>Ei Solutions – {t('home')}</title>
      </Head>
      <MainLanding />
      <SalesPoints />
      <ApplicationSteps />
      <Customers />
      <Footer />
    </>
  )
}

export default Home