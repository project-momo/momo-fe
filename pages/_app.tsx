import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { RecoilRoot, useRecoilState } from 'recoil';
import Header from '../components/common/Header/Header';
import { ContentLayout, GrayLayout } from '../styles/style';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { useState } from 'react';
import LoginModal from '../components/common/Modal/ModalCompo/LoginModal';
import { Modal } from '../components/common/Modal/Modal';
import { isLogin } from '../atoms';
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const CloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const OpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <RecoilRoot>
      {isModalOpen ? (
        <Modal CloseModal={CloseModal} children={<LoginModal />} />
      ) : null}
      <GrayLayout>
        <ContentLayout>
          <Header OpenModal={OpenModal} />
          <Component {...pageProps} />
        </ContentLayout>
      </GrayLayout>
    </RecoilRoot>
  );
}

export default MyApp;
