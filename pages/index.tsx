import type { NextPage } from 'next';
import { CenterSection, RightSection } from '../styles/style';
// eslint-disable-next-line import/no-unresolved
import Category from '../components/common/Category';
// eslint-disable-next-line import/no-unresolved
import { Title } from '../components/common/Title';
// eslint-disable-next-line import/no-unresolved
import { RightBox } from '../components/rightLayout/RightBox';
// eslint-disable-next-line import/no-unresolved
import IconHot from './../assets/images/icon_hot.svg';
import IconNotice from './../assets/images/icon_notice.svg';
// eslint-disable-next-line import/no-unresolved
import MainList from '../components/main/MainList';
// eslint-disable-next-line import/no-unresolved
import MainTags from '../components/main/MainTags';
// eslint-disable-next-line import/no-unresolved
import RankList from '../components/main/RankList';
// eslint-disable-next-line import/no-unresolved
import Notice from '../components/rightLayout/Notice';

const Home: NextPage = () => {
   return (
      <>
         <Category />
         <CenterSection>
            <Title label="라이프 스타일" />
            <MainTags />
            <MainList />
         </CenterSection>
         <RightSection>
            <RightBox label="실시간 핫한 모임" imgLink={IconHot} childrens={<RankList />} />
            <RightBox label="알려드립니다!" imgLink={IconNotice} childrens={<Notice />} />
            {/* <Link href="/Test">
               폴더 안 페이지 클릭
            </Link>
            <Link href="/test2">
               같은 경로 페이지 클릭
            </Link> */}
         </RightSection>
      </>
   );
};

export default Home;
