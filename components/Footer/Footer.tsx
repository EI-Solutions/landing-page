import eisolutionsLogo from '/static/eisolutions-logo-white.svg';
import Image from 'next/image';
import linkedin from '/static/icons/linkedin.svg';
import ContactInformation from './ContactInformation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Modal from '../Modal/Modal';
import { useState } from 'react';


const Footer = () => {
  const t = useTranslations('Footer');
  const [showingTerms, setShowingTerms] = useState(false)
  const [showingCookies, setShowingCookies] = useState(false)

  return (
    <footer
      className="
                px-20
                pt-10
                bg-gradient-to-r from-ei-black-green to-ei-dark-green
            "
    >
      <div className="pb-10 flex justify-center lg:justify-start">
        <Link href="/">
          <Image src={eisolutionsLogo} alt="Ei Solutions logo" />
        </Link>
      </div>
      <div className="justify-between flex lg:flex-row flex-col">
        <ContactInformation />
        <div className="flex">
          <a href="https://www.linkedin.com/company/ei-solutions-as/">
            <Image src={linkedin} alt="Linked In icon" className="m-3 w-10" />
          </a>
          <div className='text-ei-green font-bold p-5'>
            <p className='my-2'><Link href="/about">{t('about')}</Link></p>
            <p className='my-2'><button onClick={() => { setShowingCookies(true) }}>{t('cookies')}</button></p>
            <p className='my-2'><button onClick={() => { setShowingTerms(true) }}>{t('terms')}</button></p>
          </div>
        </div>
      </div>
      <p className='text-center p-5'>
        {t('rights1')} © 2022, Ei Solutions AS. {t('rights2')}
      </p>
      <Modal title='Cookie Preferences' setShowing={setShowingCookies} modalCardClasses='translate-y-0 opacity-100' showing={showingCookies} />
      <Modal title='Terms and Conditions' setShowing={setShowingTerms} modalCardClasses='translate-y-0 opacity-100' showing={showingTerms} />
    </footer>
  );
};

export default Footer;
