import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../components/common/Header'
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header/>
      <Component {...pageProps} />
      <Link href="/">Home</Link>
      <Link href="/Sub">Sub</Link>
    </RecoilRoot>
  );
}

export default MyApp;
