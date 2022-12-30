// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import Header from '../components/common/Header';
import { ContentLayout, GrayLayout } from '../styles/style';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <RecoilRoot>
         <GrayLayout>
            <ContentLayout>
               <Header />
               <Component {...pageProps} />
            </ContentLayout>
         </GrayLayout>
      </RecoilRoot>
   );
}

export default MyApp;
