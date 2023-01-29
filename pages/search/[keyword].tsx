import React from 'react';
import Category from '../../components/common/Category';
import { Title } from '../../components/common/Title';
import MainList from '../../components/main/MainList';
import MainTags from '../../components/main/MainTags';
import RankList from '../../components/main/RankList';
import Notice from '../../components/rightLayout/Notice';
import { RightBox } from '../../components/rightLayout/RightBox';
import { CenterSection, RightSection } from '../../styles/style';

import IconHot from './../../assets/images/icon_hot.svg';
import IconNotice from './../../assets/images/icon_notice.svg';

const SearchCompo = () => {
   return (
      <>
         <Category />
         <CenterSection>
            <Title />
            <MainTags />
            <MainList />
         </CenterSection>
         <RightSection>
            <RightBox label="실시간 핫한 모임" imgLink={IconHot} childrens={<RankList />} />
            <RightBox label="알려드립니다!" imgLink={IconNotice} childrens={<Notice />} />
         </RightSection>
      </>
   );
};
export default SearchCompo;
