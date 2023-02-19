import Image from 'next/image';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useState } from 'react';
import SelectorArrow from './SelectorArrow';

interface DrawerProps {
  setDrawerOpen: Dispatch<SetStateAction<boolean>>;
  atTop: boolean;
}

const LocaleSelector = ({ setDrawerOpen, atTop }: DrawerProps) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectableLocales = [...locales!];
  selectableLocales.splice(selectableLocales.indexOf(activeLocale!), 1);

  return (
    <div className="inline-flex flex-col relative">
      <button
        onMouseEnter={(_) => {
          setDropdownOpen(!dropdownOpen);
        }}
        onMouseLeave={(_) => {
          setDropdownOpen(false);
        }}
        onClick={(_) => {
          setDropdownOpen(!dropdownOpen);
        }}
        className={`${
          atTop ? 'text-white' : 'text-black'
        } mx-10 uppercase inline-flex items-center p-3 text-sm font-large text-center bg-transparent rounded-md justify-center`}
      >
        <Image
          className="rounded-full mx-1"
          src={`/static/locale-switcher/${activeLocale}.svg`}
          alt={`${activeLocale} flag`}
          width={16}
          height={16}
        />
        {activeLocale}
        <SelectorArrow width={20} fill={`${atTop ? 'white' : 'black'}`} />
        <div
          className={`bg-white divide-y divide-gray-100 rounded-lg shadow absolute top-10 w-fit ${
            dropdownOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="py-2 text-sm text-gray-700">
            {selectableLocales?.map((locale, index) => (
              <li key={index} className="w-full">
                <div
                  onClick={(_) => {
                    setDrawerOpen(false);
                    router.push(router.asPath, router.asPath, {
                      locale: locale,
                    });
                    setDropdownOpen(false);
                  }}
                  className="uppercase inline-flex px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <div className="inline-flex text-black">
                    <Image
                      className="rounded-full mx-1"
                      src={`/static/locale-switcher/${locale}.svg`}
                      alt={`${locale} flag`}
                      width={16}
                      height={16}
                    />
                    {locale}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </button>
    </div>
  );
};

export default LocaleSelector;
