import React, { useState } from 'react';
import styled from 'styled-components';
import { SubTitle } from '../common/SubTitle';
import { Tag } from '../common/Tag';

const MainTags = () => {

   return (
      <MainTagWrap>
         <SubTitle label='지금 올라오는 모임' labelMore=''/>
         <Tags>
            <Tag label='멘토링'/>
            <Tag label='온라인'/>
            <Tag label='오프라인모임'/>
            <Tag label='스터디'/>
            <Tag label='모임'/>
            <Tag label='5인이상'/>
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
`
const Tags = styled.ul`
   display: flex;
`