import '../styles/globals.css'
import Nav from '../components/nav.js';

function MyApp({ Component, pageProps }) {
  return <><Nav/><Component {...pageProps} /></>
}

export default MyApp
