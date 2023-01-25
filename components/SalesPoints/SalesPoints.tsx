import Image from 'next/image';
import desktopPage from '/static/salespoints/desktop-page.png';
import laptopPages from '/static/salespoints/laptop-pages.png';

import automate from '/static/icons/automate.svg';
import fileCabinet from '/static/icons/file-cabinet.svg';
import fileTree from '/static/icons/file-tree.svg';
import check from '/static/icons/check.svg';
import { useTranslations } from 'next-intl';

const SalesPoints = () => {
  const t0 = useTranslations('SalesPoints.0');
  const t1 = useTranslations('SalesPoints.1');

  const iconListItems = [
    {
      image: automate,
      alt: 'Automate',
    },
    {
      image: fileTree,
      alt: 'File tree',
    },
    {
      image: fileCabinet,
      alt: 'File cabinet',
    },
  ];

  return (
    <>
      <div className="bg-ei-dark-green p-10 lg:p-20 flex flex-col lg:flex-row">
        <div className="lg:basis-4/5">
          <b className="text-3xl">{t0('title')}</b>
          <p className="text-md mt-3">{t0('description')}</p>
          <ul className="text-sm mt-10">
            {iconListItems.map((item, i) => (
              <li key={i}>
                <div className="flex-row flex py-4">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="flex-none w-12"
                  />
                  <div className="ml-5 lg:ml-10 lg:mr-40">
                    <b>{t0(`${i}.title`)}</b>
                    <p>{t0(`${i}.description`)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Image src={laptopPages} alt="Laptop" />
        </div>
      </div>
      <div
        className="
                bg-gradient-radial from-ei-dark-green to-ei-green 
            "
      >
        <div
          style={{ backgroundImage: 'url(/grain.svg)' }}
          className="w-full h-full flex flex-col lg:flex-row p-10 lg:p-20 "
        >
          <div>
            <Image src={desktopPage} alt="Laptop" />
          </div>
          <div className="lg:basis-3/5 lg:px-20">
            <b className="text-3xl">{t1('title')}</b>
            <p className="text-md mt-10">{t1('description')}</p>
            <ul className="text-sm mt-10">
              {[0, 1, 2].map((i) => (
                <li key={i}>
                  <div className="flex-row flex py-4">
                    <div className="aspect-square flex-none">
                      <Image src={check} alt="Checkmark" />
                    </div>
                    <div className="ml-5 lg:ml-10">
                      <p>{t1(`${i}`)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesPoints;
