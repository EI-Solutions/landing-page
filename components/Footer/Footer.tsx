import eisolutionsLogo from '/static/eisolutions-logo-white.svg';
import Image from 'next/image';
import linkedin from '/static/icons/linkedin.svg';
import ContactInformation from './ContactInformation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import TermsModal from '../Modal/TermsModal';
import CookieModal from '../Modal/CookieModal';

const Footer = () => {
  const t = useTranslations('Footer');
  const [showingTerms, setShowingTerms] = useState(false);
  const [showingCookies, setShowingCookies] = useState(false);

  useEffect(() => {
    if (showingCookies || showingTerms) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [showingCookies, showingTerms]);

  return (
    <footer className="p-10 lg:p-20 bg-gradient-to-r from-ei-black-green to-ei-dark-green">
      <div className="container">
        <div className="pb-10 flex justify-center lg:justify-start">
          <Link href="/">
            <Image src={eisolutionsLogo} alt="Ei Solutions logo" />
          </Link>
        </div>
        <div className="justify-between flex lg:flex-row flex-col items-start">
          <ContactInformation />
          <div className="flex py-5">
            <a
              href="https://www.linkedin.com/company/ei-solutions-as/"
              className="self-start mt-5"
            >
              <Image src={linkedin} alt="Linked In icon" className="m-3 w-10" />
            </a>
            <div className="text-ei-green font-bold m-5">
              <p className="my-2">
                <Link href="/about">{t('about')}</Link>
              </p>
              <p className="my-2">
                <Link href="/contact">{t('contact')}</Link>
              </p>
              <p className="my-2">
                <button
                  onClick={() => {
                    setShowingCookies(true);
                  }}
                  className="text-left"
                >
                  {t('cookies')}
                </button>
              </p>
              <p className="my-2">
                <button
                  onClick={() => {
                    setShowingTerms(true);
                  }}
                  className="text-left"
                >
                  {t('terms')}
                </button>
              </p>
            </div>
          </div>
        </div>
        <p className="text-center pt-20">
          {t('rights1')} © 2024, Ei Solutions AS. {t('rights2')}
        </p>
      </div>
      <TermsModal setShowing={setShowingTerms} showing={showingTerms} />
      <CookieModal setShowing={setShowingCookies} showing={showingCookies} />
    </footer>
  );
};

export default Footer;
