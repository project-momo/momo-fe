import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
      <Link href="/">Home</Link>
      <Link href="/Sub">Sub</Link>
    </RecoilRoot>
  );
}

export default MyApp;
