import { useTranslations } from 'next-intl';

const AboutInfo = () => {
  const t = useTranslations('AboutInfo');
  return (
    <>
      <div
        className="
                bg-gradient-to-r from-ei-black-green to-ei-dark-green p-5 pt-20 flex place-content-center
                "
      >
        <div className="text-center w-4/5 lg:w-2/5">
          <b className="text-5xl text-ei-green">{t('title')}</b>
          <p className="mt-8">{t('description')}</p>
        </div>
      </div>
      <svg viewBox="0 335 1920 340">
        <defs>
          <linearGradient
            id="paint0_linear_207_757"
            x1="0"
            y1="0"
            x2="2108"
            y2="44.0078"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(0.877955, 0, 0, 0.88033, 66.084273, -215.677155)"
          >
            <stop stopColor="#012424" />
            <stop offset="0.06" stopColor="#012626" />
            <stop offset="0.12" stopColor="#012828" />
            <stop offset="0.19" stopColor="#012A2A" />
            <stop offset="0.25" stopColor="#012C2D" />
            <stop offset="0.31" stopColor="#012E2F" />
            <stop offset="0.38" stopColor="#013031" />
            <stop offset="0.44" stopColor="#013233" />
            <stop offset="0.5" stopColor="#013435" />
            <stop offset="0.56" stopColor="#003637" />
            <stop offset="0.62" stopColor="#003839" />
            <stop offset="0.69" stopColor="#003A3B" />
            <stop offset="0.75" stopColor="#003C3E" />
            <stop offset="0.81" stopColor="#003E40" />
            <stop offset="0.88" stopColor="#004042" />
            <stop offset="0.94" stopColor="#004244" />
            <stop offset="1" stopColor="#004446" />
          </linearGradient>
        </defs>
        <path
          d="M 1918.761 360.129 L 1918.733 360.211 L 1918.708 360.288 C 1894.668 431.838 1852.226 497.755 1800.327 549.519 C 1748.405 601.273 1686.841 639.044 1624.679 654.381 C 1526.409 679.518 1383.632 671.975 1228.518 649.928 C 1073.411 627.879 905.82 591.34 757.752 558.5 C 625.887 531.155 463.98 508.833 321.48 492.209 C 178.984 475.585 55.938 464.665 1.829 460.131 L 1.369 460.092 L 0 459.975 L 0 321.945 L 1920 333.87 L 1918.811 359.975 L 1918.761 360.129 Z"
          fill="url(#paint0_linear_207_757)"
        />
      </svg>
    </>
  );
};

export default AboutInfo;
