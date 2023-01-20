import { useEffect, useState } from 'react';
import styled from 'styled-components';

const ShareModal = () => {
   const [successMessage, setSuccess] = useState('');
   const [nowHref, setNowHref] = useState('');
   useEffect(() => {
      setNowHref(document.location.href);
   }, []);
   const copyLink = async () => {
      try {
         await navigator.clipboard.writeText(nowHref);
         setSuccess('복사가 완료되었습니다.');
      } catch (error) {
         setSuccess('');
      }
   };
   return (
      <Warp>
         <Title>공유하기</Title>
         <ShareWrap>
            <ShareInput id="share" value={nowHref} />
            <label htmlFor="share">
               <button onClick={() => copyLink()}>Copy</button>
            </label>
         </ShareWrap>
         {successMessage !== '' ? <Ptag>{successMessage}</Ptag> : null}
      </Warp>
   );
};

export default ShareModal;
const Warp = styled.div`
   padding: 30px 15px;
`;
const Ptag = styled.p`
   text-align: center;
   margin-top: 8px;
   font-size: 14px;
   width: 100%;
   display: block;
`;
const Title = styled.p`
   font-size: 16px;
   font-weight: 700;
   margin-bottom: 24px;
   text-align: center;
`;
const ShareWrap = styled.div`
   position: relative;
   width: 100%;
   label button {
      height: 52px;
      border-radius: 30px;
      background-color: white;
      margin-left: 8px;
      position: absolute;
      top: 50%;
      color: #444bff;
      right: 8px;
      transform: translateY(-50%);
      box-shadow: 0px 1px 3px rgb(68 75 255 / 15%);
      padding: 3px 8px;
   }
`;
const ShareInput = styled.input`
   height: 65px;
   border-radius: 30px;
   background-color: #f0f0f0;
   width: 100%;
   border: none;
   padding: 0px 30px;
`;
