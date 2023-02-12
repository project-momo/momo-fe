import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isLogin, nowSearchText, searchValueAtom, selectCategory } from '../../atoms/atom';

const TitleText = styled.p`
   font-size: 40px;
   font-weight: 700;
`;
export const TitleMain = () => {
   const nowSelectCategory = useRecoilValue(selectCategory);
   const SearchText = useRecoilValue(nowSearchText);
   const categoryObject: any = {
      LIFESTYLE: '라이프 스타일',
      EDU: '교육',
      MEDIA: '미디어',
      DEVELOP: '개발',
      FINANCE: '금융',
      SOCIAL: '소셜',
      AI: '인공지능'
   };

   const loginState = useRecoilValue(isLogin);
   const router = useRouter();
   const LoginCheck = () => {
      loginState ? router.push('/meeting/create') : alert('로그인을 진행해주세요.');
      // return loginState ? '/meeting/create' : '/';
   };
   return (
      <TitleWarp>
         <TitleText>
            {nowSelectCategory !== 'search'
               ? nowSelectCategory === ''
                  ? '전체'
                  : categoryObject[nowSelectCategory]
               : SearchText}
         </TitleText>
         <GoMoim onClick={LoginCheck}>모임 제작하러 가기 &gt;</GoMoim>
      </TitleWarp>
   );
};

const TitleWarp = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   a {
   }
`;
const GoMoim = styled.a`
   display: flex;
   align-items: center;
   width: 220px;
   height: 50px;
   border-radius: 10px;
   background-color: #d2e2ff;
   color: #000000;
   justify-content: center;
   font-size: 15px;
   font-weight: 700;
`;
