import Category from '../../components/common/Category';
import Price from '../../components/rightLayout/Price';
import { RightBox } from '../../components/rightLayout/RightBox';
import { CenterSection, RightSection } from '../../styles/style';
import Detail from './../../components/detail/Detail';
import IconPrice from './../../assets/images/icon_moin.svg';
import { Modal } from '../../components/common/Modal/Modal';
import { useState } from 'react';
const Sub = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const CloseModal = () => {
      setIsModalOpen(!isModalOpen);
   };
   return (
      <>
         {isModalOpen ? <Modal CloseModal={CloseModal} childrens /> : null}

         <Category />
         <CenterSection>
            <Detail userImage="유저이미지" username="유저이름" location="강남구" gu="근처 스타벅스" />
         </CenterSection>
         <RightSection>
            <RightBox label="모임에 참여하기" imgLink={IconPrice} childrens={<Price />} />
         </RightSection>
      </>
   );
};

export default Sub;