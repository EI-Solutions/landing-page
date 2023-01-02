import type { NextPage } from 'next'
import AboutInfo from '../components/AboutInfo/AboutInfo'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Team from '../components/Team/Team'
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'
import Head from 'next/head'
import { useTranslations } from 'next-intl'

const About: NextPage = () => {
  const t = useTranslations('Head')
  return (
    <>
      <Head>
        <title>Ei Solutions – {t('about')}</title>
      </Head>
      <NavigationBar
        backgroundClasses='bg-transparent'
        textClasses='text-white'
        icon={eisolutionsLogo}
      />
      <AboutInfo />
      <Team />
      <Footer />
    </>
  )
}

export default About
