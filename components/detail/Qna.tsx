import React from 'react';
import styled from 'styled-components';
import QnAList from './QnAList';
interface QnaToggleProps {
   open: boolean;
}
const Qna = ({ open }: QnaToggleProps) => {
   return (
      <>
         <QnaWrap open={open}>
            <QnAList />
         </QnaWrap>
      </>
   );
};

export default Qna;

const QnaWrap = styled.div<{ open: boolean }>`
   margin-top: 12px;
   margin-bottom: 35px;
   transition: 0.5s;
   max-height: ${p => (p.open ? '99999999px' : '0')};
   overflow: hidden;
`;
