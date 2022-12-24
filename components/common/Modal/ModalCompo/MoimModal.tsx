import styled from 'styled-components';

import IconArrow from '../../../../assets/images/icon_arrow.svg'
import ModalBtn from './ModalBtn';

interface ModalProps {
   title : string
   subTitle: string
   mainBtnLabel: string
   routeBtnLabel : string
}
const MoimModal = ({title, subTitle, mainBtnLabel, routeBtnLabel}:ModalProps) => {
   return (
      <>
         <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <ModalBtn mainBtnLabel={mainBtnLabel}/>
            <RouteBtn>{routeBtnLabel} <img src={IconArrow}/></RouteBtn>
      </>
   );
};

export default MoimModal;

const Title = styled.p`
font-size: 20px;
font-weight: 700;
margin-bottom: 5px;
text-align: center;
`

const SubTitle = styled.div`
   font-size: 16px;
   font-weight: 400;
   color: #606060;
   text-align: center;
   margin-bottom: 20px;
`
const RouteBtn = styled.button`
   font-size: 16px;
   font-weight: 700;
   color: #444BFF;
   display: block;
   margin: 0 auto;
   margin-top: 14px;
   display: flex;
   align-items: center;
   img {
      margin-left : 5px;
      margin-top: -3px;
   }
`