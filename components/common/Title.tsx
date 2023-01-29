import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { searchValueAtom, selectCategory } from '../../atoms/atom';

const TitleText = styled.p`
   font-size: 40px;
   font-weight: 700;
`;
export const Title = () => {
   const nowSelectCategory = useRecoilValue(selectCategory);
   const searchValue = useRecoilValue(searchValueAtom);
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
      <TitleText>
         {nowSelectCategory !== 'search'
            ? nowSelectCategory === ''
               ? '전체'
               : categoryObject[nowSelectCategory]
            : searchValue}
      </TitleText>
   );
};
