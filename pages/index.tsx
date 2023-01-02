import type { NextPage } from 'next'
import Customers from '../components/Customers/Customers'
import SalesPoints from '../components/SalesPoints/SalesPoints'
import MainLanding from '../components/MainLanding/MainLanding'
import Footer from '../components/Footer/Footer'
import ApplicationSteps from '../components/ApplicationSteps/ApplicationSteps'
import Head from 'next/head'
import { useTranslations } from 'next-intl'
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'
import NavigationBar from '../components/NavigationBar/NavigationBar'

const Home: NextPage = () => {
  const t = useTranslations('Head')
  return (
    <>
      <Head>
        <title>Ei Solutions – {t('home')}</title>
      </Head>
      <NavigationBar
        backgroundClasses='bg-transparent'
        textClasses='text-white'
        icon={eisolutionsLogo}
      />
      <MainLanding />
      <SalesPoints />
      <ApplicationSteps />
      <Customers />
      <Footer />
    </>
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
        ...require(`../messages/${locale}.json`),
      },
    },
  }
}