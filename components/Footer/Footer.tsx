import eisolutionsLogo from '/static/eisolutions-logo-white.svg';
import Image from 'next/image';
import linkedin from '/static/icons/linkedin.svg';
import ContactInformation from './ContactInformation';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');

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
          <div className="text-ei-green font-bold p-5">
            <p className="my-2">
              <Link href="/about">{t('about')}</Link>
            </p>
            <p className="my-2">
              <Link href="/cookies">{t('cookies')}</Link>
            </p>
            <p className="my-2">
              <Link href="/terms-and-conditions">{t('terms')}</Link>
            </p>
          </div>
        </div>
      </div>
      <p className="text-center p-5">
        {t('rights1')} © 2022, Ei Solutions AS. {t('rights2')}
      </p>
    </footer>
  );
};

export default Footer;
