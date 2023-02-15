import type { NextPage } from 'next';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Team from '../components/Team/Team';
import BasePage from '../components/BasePage/BasePage';
import LinkedImageList from '../components/Customers/LinkedImageList';

import logo2030 from '/static/partner-logos/2030.png';
import climateAccelerator from '/static/partner-logos/climate-accelerator.png';
import innovasjonNorge from '/static/partner-logos/innovasjon-norge.png';
import ntnu from '/static/partner-logos/ntnu.png';

const About: NextPage = () => {
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
    <BasePage subPageName="about" transparentNavBar>
      <>
        <AboutInfo />
        <Team />
        <div className='w-fi'>
          <div
          className="bg-ei-green py-32 container"
          style={{ backgroundImage: 'url(/grain.svg)' }}
        >
          <LinkedImageList images={partners} />
          </div>
        </div>
      </>
    </BasePage>
  );
};

export default About;

interface Props {
  locale: string;
}

export function getStaticProps({ locale }: Props) {
  return {
    props: {
      messages: {
        ...require(`/messages/${locale}.json`),
      },
    },
  };
}
