import type { NextPage } from 'next'
import AboutInfo from '../components/AboutInfo/AboutInfo'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Team from '../components/Team/Team'
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'

const About: NextPage = () => {
  return (
    <>
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
