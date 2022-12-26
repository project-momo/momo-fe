import type { NextPage } from 'next';
import {CenterSection ,RightSection} from '../styles/style';
import Category from '../components/common/Category';
import { Title } from '../components/common/Title';
import Link from 'next/link';
import { RightBox } from '../components/rightLayout/RightBox';
import IconHot from'./../assets/images/icon_hot.svg'
import IconNotice from'./../assets/images/icon_notice.svg'
import MainList from '../components/main/MainList';
import MainTags from '../components/main/MainTags';
import RankList from '../components/main/RankList';
import Notice from '../components/rightLayout/Notice';
import { useEffect } from 'react';

const Home: NextPage = () => {
   useEffect(()=>{
      console.log('hi')
   },[])
  return (
    <>
        <Category />
        <CenterSection>
          <Title label="라이프 스타일" />
          <MainTags/>
          <MainList/>
        </CenterSection>
        <RightSection>
            <RightBox label='실시간 핫한 모임' imgLink={IconHot} children={
            <RankList/>}/>

            <RightBox label='알려드립니다!' imgLink={IconNotice} children={<Notice/>}/>

         </RightSection>
    </>
  );

};

export default Home;
