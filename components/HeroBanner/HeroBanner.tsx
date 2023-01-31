import { useTranslations } from 'next-intl';
import ageraLogo from '/static/customer-logos/agera-logo.png';
import asplanViakLogo from '/static/customer-logos/asplanviak-logo.png';
import dnvLogo from '/static/customer-logos/dnv-logo.png';
import mollerEiendomLogo from '/static/customer-logos/mollereiendom-logo.png';
import baneNorLogo from '/static/customer-logos/banenor-logo.png';
import LinkedImageList from '../Customers/LinkedImageList';

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
        className={`fixed -z-10 min-h-screen bg-ei-darker-green/75 object-cover blur-none`}
      ></video>
      <div className="bg-cover min-h-screen  flex align-middle">
        <div className="lg:w-1/2 py-5 lg:p-20">
          <p className="text-2xl lg:text-5xl m-5">{t('title')}</p>
          <p className="m-5">{t('description')}</p>
          <div className="lg:flex-row flex-col flex text-lg text-center px-3">
            <a
              href="https://app.eisolutions.no"
              className="bg-ei-dark-green p-5 w-full m-5"
            >
              {t('application')}
            </a>
            <a
              href="/contact"
              className="bg-ei-green p-5 w-full m-5"
            >
              {t('demo')}
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <LinkedImageList images={customers} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
