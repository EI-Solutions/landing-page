import { useTranslations } from 'next-intl';
import ageraLogo from '/static/customer-logos/agera-logo.svg';
import asplanViakLogo from '/static/customer-logos/asplanviak-logo.svg';
import dnvLogo from '/static/customer-logos/dnv-logo.svg';
import mollerEiendomLogo from '/static/customer-logos/mollereiendom-logo.svg';
import baneNorLogo from '/static/customer-logos/banenor-logo.svg';
import LinkedImageList from '../Customers/LinkedImageList';
import Link from 'next/link';

const HeroBanner = () => {
  const t = useTranslations('HeroBanner');

  const customers = [
    {
      image: ageraLogo,
      alt: 'Agera Eiendom',
      link: 'https://www.ageraeiendom.no/',
    },
    {
      image: asplanViakLogo,
      alt: 'Asplan Viak',
      link: 'https://www.asplanviak.no/',
    },
    {
      image: dnvLogo,
      alt: 'DNV',
      link: 'https://www.dnv.no/',
    },
    {
      image: mollerEiendomLogo,
      alt: 'Møller Eiendom',
      link: 'https://mollereiendom.no/',
    },
    {
      image: baneNorLogo,
      alt: 'Bane Nor Eiendom',
      link: 'https://www.banenor.no/',
    },
  ];

  return (
    <div>
      <video
        src={require('static/videos/houses.webm')}
        autoPlay
        playsInline
        loop
        muted
        className={`fixed -z-10 min-h-screen bg-ei-darker-green/75 w-full object-cover blur-none`}
      ></video>
      <div
        className="bg-cover min-h-screen container align-center p-5 lg:p-20 flex flex-col justify-between"
      >
        <div className="xl:w-2/3 py-5 lg:p-10 self-start">
          <div className="text-4xl xl:text-5xl m-5">{t('title')}</div>
          <p className="m-5">{t('description')}</p>
          <div className="sm:flex-row flex-col flex text-lg text-center pt-10 max-lg:m-10">
            <a
              href="https://app.eisolutions.no"
              className="bg-ei-dark-green p-5 w-full m-5"
            >
              {t('application')}
            </a>
            <Link href="/contact" className="bg-ei-green p-5 w-full m-5">
              {t('demo')}
            </Link>
          </div>
        </div>
        <div className="">
          <LinkedImageList images={customers} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
