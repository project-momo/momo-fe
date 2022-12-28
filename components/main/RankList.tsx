import React from 'react';
import styled from 'styled-components';
import Rank from './Rank';
import UserImg from './../../assets/images/userImg2.svg';

const dummyRank = [
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   },
   {
      imgLink: UserImg,
      title: '창업은 아무나하나?!_ 창업자의 삶을 선택한다는 것'
   }
];
const RankList = () => {
   return (
      <RankListOl>
         {dummyRank.map((el, idx) => (
            <Rank key={idx} rankNum={`${idx + 1}`} imgLink={el.imgLink} title={el.title} />
         ))}
      </RankListOl>
   );
};

export default RankList;

const RankListOl = styled.ol`
   list-style: none;
`;
