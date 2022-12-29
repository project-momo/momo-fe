import React from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';
import IconPrice from './../../assets/images/icon_price.svg';
const Price = () => {
   return (
      <PriceLayout>
         <Title>
            가격정책
            <AlertIcon icon={IconPrice}>{/* <Alert>시간당 설정된 가격입니다.</Alert> */}</AlertIcon>
         </Title>
         <PriceInfo>
            <PriceType>시간당 가격</PriceType>
            <PriceNumber>3,000원</PriceNumber>
         </PriceInfo>
         <Button disabled={false} label="참여하기" size="smallBold" />
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
const Alert = styled.div`
   position: absolute;
   top: -20px;
`;

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
