import Link from 'next/link';
import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { nowSearchText, searchValueAtom, selectCategory } from '../../atoms/atom';

const TitleText = styled.p`
   font-size: 40px;
   font-weight: 700;
`;
export const Title = () => {
   const nowSelectCategory = useRecoilValue(selectCategory);
   const SearchText = useRecoilValue(nowSearchText);
   console.log('nowSelectCategory', nowSelectCategory);
   const categoryObject = {
      LIFESTYLE: '라이프 스타일',
      EDU: '교육',
      MEDIA: '미디어',
      DEVELOP: '개발',
      FINANCE: '금융',
      SOCIAL: '소셜'
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
         <Link href={'/meeting/create'}>모임 제작하러 가기 ></Link>
      </TitleWarp>
   );
};

const TitleWarp = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   a{
      display: flex;
      align-items: center;
      width: 220px;
   height: 50px;
   border-radius: 10px;
   background-color: #d2e2ff;
   color: #200d74;
justify-content: center;
   font-size: 15px;
   font-weight: 700;
   }
`;