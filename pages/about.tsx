import type { NextPage } from 'next'
import AboutInfo from '../components/AboutInfo/AboutInfo'
import Customers from '../components/Customers/Customers'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Team from '../components/Team/Team'
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'

const About: NextPage = () => {
  return (
    <>
      <NavigationBar
        backgroundClasses='bg-gradient-to-r from-ei-black-green to-ei-dark-green'
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
