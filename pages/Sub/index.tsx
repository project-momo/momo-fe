import Category from '../../components/common/Category';
import Price from '../../components/rightLayout/Price';
import { RightBox } from '../../components/rightLayout/RightBox';
import { CenterSection, RightSection } from '../../styles/style';
import Detail from './../../components/detail/Detail';
import IconPrice from './../../assets/images/icon_moin.svg';
import Qna from '../../components/detail/Qna';
import { Modal } from '../../components/common/Modal/Modal';
import { useState } from 'react';
import ModalDetail from '../../components/detail/ModalDetail';
import styled from 'styled-components';
import ShareModal from '../../components/common/Modal/ModalCompo/ShareModal';
import { useRecoilState } from 'recoil';
import { setIsShareModalOpen } from '../../atoms/sub/atom';
const Sub = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalOpen, setModalOpen] = useRecoilState(setIsShareModalOpen);
   return (
      <>
         {isModalOpen ? <Modal CloseModal={() => setIsModalOpen(!isModalOpen)} childrens={<ModalDetail />} /> : null}
         {modalOpen ? <Modal CloseModal={() => setModalOpen(!modalOpen)} childrens={<ShareModal />} /> : null}
         <SubWrap className={isModalOpen ? 'modalactive' : ''}>
            <Category />
            <CenterSection>
               <Detail userImage="유저이미지" username="유저이름" location="강남구" location2="근처 스타벅스" />
            </CenterSection>
            <RightSection>
               <RightBox
                  label="모임에 참여하기"
                  imgLink={IconPrice}
                  childrens={<Price OpenModal={() => setIsModalOpen(!isModalOpen)} />}
               />
            </RightSection>
         </SubWrap>
      </>
   );
};

export default Sub;

const SubWrap = styled.div`
   width: 100%;
   display: flex;
   &.modalactive {
      height: calc(100vh - 55px);
   }
`;
