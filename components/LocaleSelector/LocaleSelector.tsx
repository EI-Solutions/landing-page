import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import arrow from '/static/locale-switcher/arrow.svg';

interface DrawerProps {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const LocaleSelector = ({ setDrawerOpen }: DrawerProps) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectableLocales = [...locales!]
  selectableLocales.splice(selectableLocales.indexOf(activeLocale!), 1)

  return (
    <div className="inline-flex flex-col relative">
      <button onClick={(_) => {
        setDropdownOpen(!dropdownOpen);
      }} className="mx-10 uppercase inline-flex items-center p-3 text-sm font-large text-center text-black bg-gray-200 border border-gray-300 rounded-md hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
        <Image
          className="rounded-full mx-1"
          src={`/static/locale-switcher/${activeLocale}.svg`}
          alt={`${activeLocale} flag`}
          width={16}
          height={16}
        />
        {activeLocale} <Image src={arrow} alt="Arrow icon" />
      </button>
      <div
        className={`bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-10 w-fit ${dropdownOpen ? 'block' : 'hidden'}`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200 "
        >
          {selectableLocales?.map((locale) => (
            <li>
              <button
                onClick={(_) => {
                  setDrawerOpen(false);
                  router.push(router.asPath, router.asPath, {
                    locale: locale,
                  });
                  setDropdownOpen(false);
                }}
                className="uppercase w-full inline-flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                <div className="inline-flex items-center text-black">
                  <Image
                    className="rounded-full mx-1"
                    src={`/static/locale-switcher/${locale}.svg`}
                    alt={`${locale} flag`}
                    width={16}
                    height={16}
                  />
                  {locale}
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LocaleSelector;
