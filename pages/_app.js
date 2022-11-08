import '../styles/globals.css'
import Head from "next/head";
import Nav from '../components/nav.js';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link rel={"favicon"} href={"/favicon.ico"}/>
        </Head>
        <Nav/>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
