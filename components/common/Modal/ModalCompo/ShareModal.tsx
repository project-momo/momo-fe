import React from 'react';
import styled from 'styled-components';

const ShareModal = () => {
   return (
      <Warp>
         <Title>공유하기</Title>
         <ShareWrap>
            <ShareInput />
            <button>URL 복사</button>
         </ShareWrap>
      </Warp>
   );
};

export default ShareModal;
const Warp = styled.div`
   padding: 30px 15px;
`;
const Title = styled.p`
   font-size: 16px;
   font-weight: 700;
   margin-bottom: 8px;
   text-align: center;
`;
const ShareWrap = styled.div`
   display: flex;
   width: 100%;
   button {
      height: 40px;
      border-radius: 30px;
      background-color: lightgray;
      margin-left: 8px;
      padding: 3px 8px;
   }
`;
const ShareInput = styled.input`
   height: 40px;
   border-radius: 30px;
   background-color: lightgray;
   width: 100%;
`;
