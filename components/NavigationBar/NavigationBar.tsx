import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavigationDrawer from './NavigationDrawer';
import greenLogo from '/static/eisolutions-logo-green.svg';
import whiteLogo from '/static/eisolutions-logo-white.svg';

import menuIcon from '/static/icons/menu_icon.svg';
import crossIcon from '/static/icons/cross.svg';
import { useTranslations } from 'next-intl';
import LocaleSelector from '../LocaleSelector/LocaleSelector';

interface NavigationBarProps {
  isTransparent: boolean;
}

const NavigationBar = ({ isTransparent }: NavigationBarProps) => {
  const t = useTranslations('NavigationBar');

  const [atTop, setAtTop] = useState(true);
  useEffect(() => {
    const addScrollListener = () => {
      setAtTop(window.scrollY <= 0);
    };
    window.addEventListener('scroll', addScrollListener);
    return () => window.removeEventListener('scroll', addScrollListener);
  }, [atTop]);

  const [drawerOpen, changeDrawerPosition] = useState(false);

  useEffect(() => {
    changeDrawerPosition(drawerOpen);
    document.body.style.height = drawerOpen ? '100%' : '';
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return;
  }, [drawerOpen]);

  return (
    <>
      <button
        className="lg:hidden fixed z-20 m-2 p-3"
        onClick={() => changeDrawerPosition(!drawerOpen)}
      >
        {drawerOpen ? (
          <Image alt="Cross icon" src={crossIcon} />
        ) : (
          <Image alt="Menu icon" src={menuIcon} />
        )}
      </button>
      <div
        className={`z-10 lg:hidden fixed transition-all duration-300 ${drawerOpen ? 'w-full' : 'w-0 scale-0'
          }`}
      >
        <NavigationDrawer setDrawerOpen={changeDrawerPosition} />
      </div>
        <div
          className={`max-lg:hidden transition-all duration-300 z-10 flex flex-row w-full fixed justify-between p-5 ${atTop
              ? isTransparent
                ? 'bg-transparent'
                : 'bg-ei-dark-green'
              : 'bg-white'
            }`}
        >
          <Link href="/">
            <Image src={atTop ? whiteLogo : greenLogo} alt="Ei Solutions logo" />
          </Link>
          <div
            className={`text-xl font-bold ${atTop ? 'text-white' : 'text-ei-green'
              }`}
          >
            <Link href="/about" className="px-5 mx-4">
              {t('about')}
            </Link>
            <Link
              href="/contact"
              className="bg-ei-green text-base p-3 px-8 mx-10 rounded-md text-white font-bold"
            >
              {t('contact')}
            </Link>
            <LocaleSelector setDrawerOpen={changeDrawerPosition} />
          </div>
      </div>
    </>
  );
};

export default NavigationBar;
