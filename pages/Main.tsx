import React from 'react';
import styled from 'styled-components';
import Category from '../components/common/Category';
import Header from '../components/common/Header';
import { Title } from '../components/common/Title';
const GrayLayout = styled.div`
   min-height: 100vh;
   background-color: #F5F5F7;
`
const ContentLayout = styled.div`
   max-width: 1600px;
   padding: 0 80px;
   margin: 25px auto 0;
   display: flex;
`
const Main = () => {
   return (
      <GrayLayout>
         <Header/>
         <ContentLayout>
         <Category />
         <Title label='라이프 스타일'/>
         </ContentLayout>
       
      </GrayLayout>
   );
};

export default Main;