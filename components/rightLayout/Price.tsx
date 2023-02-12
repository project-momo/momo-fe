import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';
import IconPrice from './../../assets/images/icon_price.svg';
interface PriceProps {
   OpenModal: () => void;
   price: number;
   open: string;
   datePolicy?: string;
}
const Price = ({ OpenModal, price, open, datePolicy }: PriceProps) => {
   const priceData = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
   const openState = open === '모집 완료' ? true : false;
   return (
      <PriceLayout>
         <Title>
            가격정책
            <AlertIcon icon={IconPrice}>{/* <Alert>시간당 설정된 가격입니다.</Alert> */}</AlertIcon>
         </Title>
         <PriceInfo>
            <PriceType>{datePolicy === 'ONE_DAY' ? '참가 비용' : '시간당 가격'}</PriceType>
            <PriceNumber>{price === 0 ? '무료' : priceData}</PriceNumber>
         </PriceInfo>
         <Button
            onClick={OpenModal}
            disabled={openState}
            label={openState ? '모집 완료' : '참여하기'}
            size="smallBold"
         />
      </PriceLayout>
   );
};

export default Price;

const PriceLayout = styled.div``;
const Title = styled.p`
   font-size: 16px;
   font-weight: 700;
   display: flex;
   align-items: center;
   position: relative;
`;
const AlertIcon = styled.button<{ icon: string }>`
   width: 13px;
   height: 15px;
   background-image: url(${p => `${p.icon}`});
   background-size: cover;
   margin-left: 5px;
`;
// const Alert = styled.div`
//    position: absolute;
//    top: -20px;
// `;

const PriceInfo = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   width: 100%;
   margin: 17px 0 13px;
`;
const PriceType = styled.p`
   font-size: 16px;
   font-weight: 500;
`;

const PriceNumber = styled.p`
   font-size: 16px;
   font-weight: 500;
`;
