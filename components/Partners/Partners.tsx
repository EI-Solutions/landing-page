import { useTranslations } from 'next-intl';
import LinkedImageList from '../Customers/LinkedImageList';

import logo2030 from '/static/partner-logos/2030.png';
import climateAccelerator from '/static/partner-logos/climate-accelerator.png';
import innovasjonNorge from '/static/partner-logos/innovasjon-norge.png';
import ntnu from '/static/partner-logos/ntnu.png';
const Partners = () => {
  const t = useTranslations('Partners');

  const partners = [
    {
      image: innovasjonNorge,
      alt: 'Innovasjon Norge',
      link: 'https://www.innovasjonnorge.no/',
    },
    {
      image: climateAccelerator,
      alt: 'EU ClimAccelerator',
      link: 'https://climaccelerator.climate-kic.org/',
    },
    {
      image: logo2030,
      alt: '2030 Startup Lab',
      link: 'https://www.20tretti.no/',
    },
    {
      image: ntnu,
      alt: 'NTNU',
      link: 'https://www.ntnu.no/',
    },
  ];

  return (
    <div
      className="bg-ei-green py-48"
      style={{ backgroundImage: 'url(/grain.svg)' }}
    >
      <div className="container">
        <div className="font-bold text-4xl pb-20">{t('title')}</div>
        <LinkedImageList images={partners} />
      </div>
    </div>
  );
};

export default Partners;
