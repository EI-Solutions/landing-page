import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Poppins&display=optional' rel='stylesheet'/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp