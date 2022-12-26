import type { NextPage } from 'next';
import {CenterSection,RightSection} from '../styles/style';
import Category from '../components/common/Category';
import { Title } from '../components/common/Title';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
        <Category />
        <CenterSectionr>
          <Title label="라이프 스타일" />
        </CenterSectionr>
        <RightSection>
          <Link href="/mypage">마이페이지</Link>
          <Link href="/content/create">모임 등록</Link>
        </RightSection>
    </>
  );
};

export default Home;
