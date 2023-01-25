import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import NavigationBar from '../NavigationBar/NavigationBar';

interface BasePageProps {
  children: JSX.Element;
  subPageName: string;
}

const BasePage = ({ children, subPageName }: BasePageProps) => {
  const t = useTranslations('Head');
  return (
    <>
      <Head>
        <title>{`Ei Solutions – ${t(subPageName)}`}</title>
      </Head>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
};

export default BasePage;
