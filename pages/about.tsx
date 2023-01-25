import type { NextPage } from 'next';
import AboutInfo from '../components/AboutInfo/AboutInfo';
import Team from '../components/Team/Team';
import BasePage from '../components/BasePage/BasePage';

const About: NextPage = () => {
  return (
    <BasePage subPageName="about">
      <>
        <AboutInfo />
        <Team />
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
