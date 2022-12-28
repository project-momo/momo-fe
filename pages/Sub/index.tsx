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
const Sub = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const CloseModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   const OpenModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   return (
      <>
         {isModalOpen ? <Modal CloseModal={CloseModal} childrens={<ModalDetail />} /> : null}

         <Category />
         <CenterSection>
            <Detail userImage="유저이미지" username="유저이름" location="강남구" location2="근처 스타벅스" />
         </CenterSection>
         <RightSection>
            <RightBox label="모임에 참여하기" imgLink={IconPrice} childrens={<Price OpenModal={OpenModal} />} />
         </RightSection>
      </>
   );
};

export default Sub;
