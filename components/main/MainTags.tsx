import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from '../common/SubTitle';
import { Tag } from '../common/Tag';

const MainTags = () => {
   const labelList = ['멘토링', '온라인', '오프라인모임', '스터디', '모임', '5인이상'];
   return (
      <MainTagWrap>
         <SubTitle label="지금 올라오는 모임" labelMore="" />
         <Tags>
            {labelList.map((el, idx) => (
               <Tag label={el} />
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
`;
const Tags = styled.ul`
   display: flex;
`;
