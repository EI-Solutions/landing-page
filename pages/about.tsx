import type { NextPage } from 'next'
import AboutInfo from '../components/AboutInfo/AboutInfo'
import Customers from '../components/Customers/Customers'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Team from '../components/Team/Team'
import eisolutionsLogo from '/static/eisolutions-logo-green.svg'

const About: NextPage = () => {
  return (
    <>
      <NavigationBar isTransparent={false} icon={eisolutionsLogo}/>
      <AboutInfo />
      <Team />
      <Customers backgroundColor='bg-ei-green'/>
      <Footer />
    </>
  )
}

export default About
