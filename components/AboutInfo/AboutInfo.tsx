import { useTranslations } from 'next-intl';
import AboutColorWave from './AboutColorWave';

const AboutInfo = () => {
  const t = useTranslations('AboutInfo');
  return (
    <>
      <div
        className="
                bg-gradient-to-r from-ei-black-green to-ei-dark-green p-5 pt-32
                "
      >
        <div className="container">
          <div className="text-center w-4/5 lg:w-2/5 container">
            <b className="text-5xl text-ei-green">{t('title')}</b>
            <p className="mt-8">{t('description1')}</p>
            <p className="mt-8">{t('description2')}</p>
          </div>
        </div>
      </div>
      <AboutColorWave />
    </>
  );
};

export default AboutInfo;
