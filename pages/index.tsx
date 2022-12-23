import type { NextPage } from 'next';
import {GrayLayout,ContentLayout,CenterSectionr,RightSection} from '../styles/style';
import Category from '../components/common/Category';
import { Title } from '../components/common/Title';
import Link from 'next/link';
import { RightBox } from '../components/rightLayout/RightBox';
import IconHot from'./../assets/images/icon_hot.svg'
import IconNotice from'./../assets/images/icon_notice.svg'
import MainList from '../components/main/MainList';

const Home: NextPage = () => {
  return (
      <GrayLayout>
         <ContentLayout>
         <Category />
         <CenterSectionr>
            <Title label='라이프 스타일'/>
            <MainList/>
         </CenterSectionr>
         <RightSection>
            {/* 경우가 2개 가능한데 어떤걸로 써야될지는 테스트 해보고 결정해야겠네요 */}
            <RightBox label='실시간 핫한 모임' imgLink={IconHot} children={null}/>
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
    );
};

export default Home;
