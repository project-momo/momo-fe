import type { NextPage } from 'next';
import {
  GrayLayout,
  ContentLayout,
  CenterSectionr,
  RightSection,
} from '../styles/style';
import Category from '../components/common/Category';
import { Title } from '../components/common/Title';
import Link from 'next/link';
import { RightBox } from '../components/rightLayout/RightBox';
import IconHot from'./../assets/images/icon_hot.svg'
import IconNotice from'./../assets/images/icon_notice.svg'
import MainList from '../components/main/MainList';
import MainTags from '../components/main/MainTags';
import RankList from '../components/main/RankList';

const Home: NextPage = () => {
  return (
      <GrayLayout>
         <ContentLayout>
         <Category />
         <CenterSectionr>
            <Title label='라이프 스타일'/>
            <MainTags/>
            <MainList/>
         </CenterSectionr>
         <RightSection>
            <RightBox label='실시간 핫한 모임' imgLink={IconHot} children={
            <RankList/>}/>
            <RightBox label='알려드립니다!' imgLink={IconNotice} children={null}/>
            {/* <Link href="/Test">
               폴더 안 페이지 클릭
            </Link>
            <Link href="/test2">
               같은 경로 페이지 클릭
            </Link> */}
         </RightSection>
         </ContentLayout>
      </GrayLayout>
    )
};

export default Home;
