import '../styles/globals.css'
import Head from "next/head";
import favicon from '../public/favicon.ico';
import Nav from '../components/nav.js';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link rel={"favicon"} href={favicon}/>
        </Head>
        <Nav/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
