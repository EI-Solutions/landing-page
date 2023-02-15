import { useTranslations } from 'next-intl';
import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';

interface BasePageProps {
  children: ReactNode;
  subPageName: string;
  transparentNavBar: boolean;
}

const BasePage = ({
  children,
  subPageName,
  transparentNavBar,
}: BasePageProps) => {
  const t = useTranslations('Head');
  return (
    <>
      <Head>
        <title>{`Ei Solutions – ${t(subPageName)}`}</title>
      </Head>
      <NavigationBar isTransparent={transparentNavBar} />
      {children}
      <Footer />
    </>
  );
};

export default BasePage;
