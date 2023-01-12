import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import { SubTitle } from '../common/SubTitle';
// eslint-disable-next-line import/no-unresolved
import { Tag } from '../common/Tag';

const MainTags = () => {
   const labelList = ['멘토링', '온라인', '오프라인모임', '스터디', '모임', '5인이상'];
   return (
      <MainTagWrap>
         <SubTitle label="지금 올라오는 모임" labelMore="" />
         <Tags>
            {labelList.map((el, idx) => (
               <Tag key={idx} label={el} />
            ))}
         </Tags>
      </MainTagWrap>
   );
};

export default MainTags;
const MainTagWrap = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-top: 15px;
   flex-wrap: wrap;
`;
const Tags = styled.ul`
   display: flex;
`;
