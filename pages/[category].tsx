import { CenterSection, RightSection } from '../styles/style';
import Category from '../components/common/Category';
import { Title } from '../components/common/Title';
import { RightBox } from '../components/rightLayout/RightBox';
import IconHot from './../assets/images/icon_hot.svg';
import IconNotice from './../assets/images/icon_notice.svg';
import MainList from '../components/main/MainList';
import MainTags from '../components/main/MainTags';
import RankList from '../components/main/RankList';
import Notice from '../components/rightLayout/Notice';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CategoryRoute = () => {
   const { query } = useRouter();

   const [nowTab, setNowTab] = useState('전체');
   const [nowTabENG, setNowTabENG] = useState<any>('');
   const categoryName = () => {
      switch (query.category) {
         case 'LIFESTYLE':
            return '라이프 스타일';
         case 'EDU':
            return '교육';
         case 'DESIGN':
            return '디자인';
         case 'MEDIA':
            return '미디어';
         case 'DEVELOP':
            return '개발';
         case 'FINANCE':
            return '금융';
         case 'SOCIAL':
            return '소셜';
         case 'AI':
            return '인공지능';
         default:
            return '전체';
      }
   };
   useEffect(() => {
      if (query.category) {
         setNowTab(categoryName());
         setNowTabENG(query.category);
      }
   }, [query.category]);

   return (
      <>
         {/*  nowTab="nowTab" */}
         <Category />
         <CenterSection>
            <Title label={nowTab} />
            <MainTags />
            <MainList category={nowTabENG} />
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

export default CategoryRoute;
