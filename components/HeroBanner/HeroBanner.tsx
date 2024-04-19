import { useTranslations } from 'next-intl';
import ageraLogo from '/static/customer-logos/agera-logo.svg';
import newsecLogo from '/static/customer-logos/newsec-logo.svg';
import dnvLogo from '/static/customer-logos/dnv-logo.svg';
import baneNorLogo from '/static/customer-logos/banenor-logo.svg';
import reitanLogo from '/static/customer-logos/reitan-logo.svg';
import ecDahlsLogo from '/static/customer-logos/ecdahls-logo.svg';
import relogLogo from '/static/customer-logos/relog-logo.svg';
import vfeLogo from '/static/customer-logos/vfe-logo.svg';
import doraLogo from '/static/customer-logos/dora-logo.svg';
import chralLogo from '/static/customer-logos/chral-logo.svg';
import LinkedImageList from '../Customers/LinkedImageList';
import Link from 'next/link';

const HeroBanner = () => {
  const t = useTranslations('HeroBanner');

  const customers = [
    {
      image: newsecLogo,
      alt: 'Newsec',
      link: 'https://www.newsec.no/',
    },
    {
      image: reitanLogo,
      alt: 'Reitan',
      link: 'https://reitan.no/no/selskap/171/reitan-eiendom',
    },
    {
      image: ecDahlsLogo,
      alt: 'EC Dahls Eiendom',
      link: 'https://ecde.no/',
    },
    {
      image: relogLogo,
      alt: 'Relog',
      link: 'https://www.relog.no/',
    },
    {
      image: vfeLogo,
      alt: 'VestenFjeldske Eiendom',
      link: 'https://www.newsec.no/',
    },
    {
      image: doraLogo,
      alt: 'Dora',
      link: 'https://dora.no/',
    },
    {
      image: chralLogo,
      alt: 'Christiania Areal',
      link: 'https://reitan.no/no/selskap/171/reitan-eiendom',
    },
    {
      image: baneNorLogo,
      alt: 'Bane Nor Eiendom',
      link: 'https://www.banenor.no/',
    },
    {
      image: ageraLogo,
      alt: 'Agera Eiendom',
      link: 'https://www.ageraeiendom.no/',
    },
    {
      image: dnvLogo,
      alt: 'DNV',
      link: 'https://www.dnv.no/',
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
      <div className="bg-cover min-h-screen container align-center p-5 lg:py-20 flex flex-col justify-between">
        <div className="xl:w-3/4 py-5 lg:p-10 self-start">
          <div className="text-4xl xl:text-7xl m-5">{t('title')}</div>
          <p className="m-5 xl:text-2xl">{t('description')}</p>
          <div className="sm:flex-row flex-col flex text-lg text-center pt-10 max-lg:m-10 w-1/2">
            <Link href="/contact" className="bg-ei-green p-5 w-full m-5">
              {t('demo')}
            </Link>
          </div>
        </div>
        <div className="container mx-32">
          <LinkedImageList images={customers} />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
