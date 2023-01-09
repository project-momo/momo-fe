import React, { useEffect, useState } from 'react';
import Card from './Card';
import UserImg from './../../assets/images/userimg.svg';
import styled from 'styled-components';
import axios from 'axios';

interface MainProps {
   host: { nickname: string; imageUrl: string };
   nickname: string;
   imageUrl: string;
   title: string;
   content: string;
   address: {
      addressInfo: string;
      addresses: string[];
   };
   price: number;
   meetingId: number;
}
interface CategoryProps {
   category: string;
}
const MainList = ({ category }: CategoryProps) => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const [moimData, setModimData] = useState([] as any);
   const [error, setError] = useState('' as string | unknown);
   const [loading, setLoading] = useState(true);
   const getMoimData = async () => {
      try {
         const data = await axios.get(`${API_URI}/meetings?&category=${category}&page=1&size=18`).then(el => {
            setModimData(el.data.content);
         });
      } catch (error) {
         setError(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getMoimData();
   }, [category]);
   return (
      <CardList>
         {loading ? (
            <p>로딩중...</p>
         ) : moimData.length !== 0 ? (
            moimData.map((el: MainProps) => {
               const priceString = el.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
               return (
                  <Card
                     key={el.meetingId}
                     meetingId={el.meetingId}
                     username={el.host.nickname}
                     userImage={el.host.imageUrl}
                     title={el.title}
                     content={el.content}
                     locate={el.address.addresses}
                     price={priceString}
                  />
               );
            })
         ) : (
            <p>해당하는 카테고리의 모임이 없습니다.</p>
         )}
      </CardList>
   );
};

export default MainList;

const CardList = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;
