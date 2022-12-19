import type { NextPage } from 'next'
import AboutInfo from '../components/AboutInfo/AboutInfo'
import Customers from '../components/Customers/Customers'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import Team from '../components/Team/Team'

const About: NextPage = () => {
  return (
    <>
      <NavigationBar />
      <AboutInfo />
      <Team />
      <Customers backgroundColor='bg-ei-green'/>
    </>
  )
}

export default About