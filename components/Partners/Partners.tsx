import { useTranslations } from 'next-intl';
import LinkedImageList from '../Customers/LinkedImageList';

import logo2030 from '/static/partner-logos/2030.png';
import styx from '/static/partner-logos/styx.png';
import trk from '/static/partner-logos/trkgroup.png';
import pws from '/static/partner-logos/pwseiendom.png';
import climateAccelerator from '/static/partner-logos/climate-accelerator.png';
import innovasjonNorge from '/static/partner-logos/innovasjon-norge.png';
import ntnu from '/static/partner-logos/ntnu.png';
const Partners = () => {
  const t = useTranslations('Partners');

  const partners = [
    {
      image: styx,
      alt: 'Styx Urban Investments',
      link: 'https://www.styx.city/',
    },
    {
      image: pws,
      alt: 'PWS Eiendom',
      link: 'https://pwseiendom.no/',
    },
    {
      image: trk,
      alt: 'TRK Group',
      link: 'https://www.trkgroup.no/',
    },
    {
      image: innovasjonNorge,
      alt: 'Innovasjon Norge',
      link: 'https://www.innovasjonnorge.no/',
    },
    {
      image: logo2030,
      alt: '2030 Startup Lab',
      link: 'https://www.2030startuplab.com/',
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
        <div className="font-bold text-4xl pb-20 p-5">{t('title')}</div>
        <LinkedImageList images={partners} columns={6} />
      </div>
    </div>
  );
};

export default Partners;
