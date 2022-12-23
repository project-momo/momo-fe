import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../components/common/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header/>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
