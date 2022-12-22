import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/NavigationBar/NavigationBar'
import eisolutionsLogo from '/static/eisolutions-logo-white.svg'
import ContactInfo from '../components/Footer/ContactInformation'

const Contact: NextPage = () => (
  <div>
      <NavigationBar
        backgroundClasses='bg-gradient-to-r from-ei-black-green to-ei-dark-green'
        textClasses='text-white'
        icon={eisolutionsLogo}
      />
    <div className='bg-gradient-to-r from-ei-black-green to-ei-dark-green h-screen align-bottom'>
      <div className='px-64 pt-64'>
        <ContactInfo />
      </div>
    </div>
    <Footer />
  </div>
)

export default Contact
