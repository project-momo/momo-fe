import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ContentLayout, GrayLayout } from '../styles/style';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useEffect, useState } from 'react';
import { Modal } from '../components/common/Modal/Modal';
import LoginModal from '../components/common/Modal/ModalCompo/LoginModal';
import Header from '../components/common/Header/Header';
import axios from 'axios';
import Head from 'next/head';
import GlobalStyle from '../styles/GlobalStyle';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const CloseModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   const OpenModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   useEffect(() => {
      const token = localStorage.getItem('AccessToken');

      if (token) {
         axios.defaults.headers.common['Authorization'] = token;
      }
      typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null;
   }, []);

   return (
      <>
         <Head>
            <title>모모 Momo</title>
            <link rel="icon" href="/favicon.ico" />
            <link
               href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@300;700&display=swap"
               rel="stylesheet"
            />
         </Head>
         <GlobalStyle />
         <RecoilRoot>
            {isModalOpen ? <Modal CloseModal={CloseModal} childrens={<LoginModal />} /> : null}
            <GrayLayout>
               <ContentLayout>
                  <Header OpenModal={OpenModal} />
                  <Component {...pageProps} />
               </ContentLayout>
            </GrayLayout>
         </RecoilRoot>
      </>
   );
}

export default MyApp;
