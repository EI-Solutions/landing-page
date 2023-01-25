import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import brochure from '/static/salespoints/brochure.png';

const ApplicationSteps = () => {
  const t = useTranslations('ApplicationSteps');

  const steps = [
    {
      image: brochure,
      alt: 'Brochure',
    },
    {
      image: brochure,
      alt: 'Brochure',
    },
    {
      image: brochure,
      alt: 'Brochure',
    },
    {
      image: brochure,
      alt: 'Brochure',
    },
    {
      image: brochure,
      alt: 'Brochure',
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  return (
    <div className="bg-ei-darker-green text-center p-10 lg:p-20">
      <p className="text-4xl mb-5">{t('title')}</p>
      <div className="flex flex-col lg:flex-row justify-center">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentTab(i);
            }}
            className={`text-sm m-3 w-max lg:m-7 translate-all duration-150 ${
              currentTab === i
                ? 'border-b-2 border-ei-green'
                : 'text-subtitle-gray'
            }`}
          >
            {i + 1}. {t(`${i}.tabName`)}
          </button>
        ))}
      </div>
      <div className="overflow-hidden relative">
        {steps.map((step, i) => (
          <div
            key={i}
            className={`transition-transform duration-500 
                                ${
                                  currentTab === i
                                    ? ''
                                    : 'absolute opacity-0 translate-y-full'
                                }`}
          >
            <div className="flex flex-wrap">
              <div className="lg:basis-3/5 lg:px-20">
                <Image src={step.image} alt={step.alt} />
              </div>
              <div className="lg:basis-2/5 flex- text-start">
                <p className="my-10 text-2xl font-bold">{t(`${i}.title`)}</p>
                <div className="text-subtitle-gray">
                  {t(`${i}.description`)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationSteps;
