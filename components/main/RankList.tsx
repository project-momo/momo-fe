import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Rank from './Rank';
import UserImg from './../../assets/images/userImg2.svg';
import { api } from '../../util/token';

const RankList = () => {
   const [rankList, setRankList] = useState<any>([]);
   useEffect(() => {
      api.get(`/ranks`).then(el => {
         setRankList(el?.data);
      });
   }, []);
   return (
      <RankListOl>
         {rankList.map((el: any, idx: number) => (
            <Rank key={idx} rankNum={`${idx + 1}`} meetingId={el.meetingId} imgLink={el.imageUrl} title={el.title} />
         ))}
      </RankListOl>
   );
};

export default RankList;

const RankListOl = styled.ol`
   list-style: none;
`;
