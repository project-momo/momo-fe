import React, { useEffect, useState } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { mainTagListmain, searchValueAtom, selectCategory, setMoimDataArray } from '../../atoms/atom';
import { api } from '../../util/token';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

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
// interface CategoryProps {
//    category?: string;
// }
const MainList = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const [moimData, setModimData] = useRecoilState(setMoimDataArray);
   // const [error, setError] = useState('' as string | unknown);
   const nowSelectCategory = useRecoilValue(selectCategory);
   const [selectTags, setSelectTage] = useRecoilState(mainTagListmain);
   const [loading, setLoading] = useState(true);
   const [page, setPage] = useState(1);
   const [totalMoim, setTotalMoim] = useState(0);
   const defaultCount = 18;
   const [fetching, setFetching] = useState(false);
   const setSearchValue = useSetRecoilState(searchValueAtom);
   // const setCategory = useRecoilValue(nowCategoryState);
   const getMoimData = async () => {
      try {
         await api
            .get(
               `${API_URI}/meetings?&category=${nowSelectCategory}${
                  selectTags !== '' ? `&tag=${selectTags}` : ''
               }&page=${page}&size=${defaultCount}`
            )
            .then(el => {
               setModimData(el.data.content);
               setTotalMoim(el.data.pageInfo.totalElements);
               setFetching(false);
            });
      } catch (error) {
         // setError(error);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      if (nowSelectCategory !== 'search') {
         getMoimData();
         setSearchValue('');
      }
   }, [nowSelectCategory, selectTags]);
   useEffect(() => {
      setSelectTage('');
   }, [nowSelectCategory]);
   const throttle = (handler: (...args: any[]) => void, timeout = 300) => {
      let invokedTime: number;
      let timer: number;
      return function (this: any, ...args: any[]) {
         if (!invokedTime) {
            handler.apply(this, args);
            invokedTime = Date.now();
         } else {
            clearTimeout(timer);
            timer = window.setTimeout(() => {
               if (Date.now() - invokedTime >= timeout) {
                  handler.apply(this, args);
                  invokedTime = Date.now();
               }
            }, Math.max(timeout - (Date.now() - invokedTime), 0));
         }
      };
   };

   useEffect(() => {
      const handleScroll = throttle(() => {
         const { scrollTop } = document.documentElement;
         const { offsetHeight } = document.body;
         if (window.innerHeight + scrollTop >= offsetHeight) {
            setFetching(true);
         }
      });

      setFetching(true);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   useEffect(() => {
      if (fetching && totalMoim > defaultCount * page) {
         setPage(page + 1);
      } else {
         setFetching(false);
      }
   }, [fetching]);
   useEffect(() => {
      if (fetching && totalMoim > defaultCount * page) {
         try {
            api.get(
               `${API_URI}/meetings?&category=${nowSelectCategory}${
                  selectTags !== '' ? `&tag=${selectTags}` : ''
               }&page=${page}&size=${defaultCount}`
            ).then(el => {
               setModimData([...moimData, ...el.data.content]);
               setTotalMoim(el.data.pageInfo.totalElements);
               setFetching(false);
            });
         } catch (error) {
            // setError(error);
         } finally {
            setLoading(false);
         }
      }
   }, [page]);

   //    if (moimData === 18) {
   //       if (false) {
   //
   //       }
   //    }
   return (
      <CardList>
         {loading && nowSelectCategory !== 'search' ? (
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
         ) : nowSelectCategory !== 'search' ? (
            <p className="no-result">해당하는 카테고리의 모임이 없습니다.</p>
         ) : (
            <p className="no-result">검색 결과가 없습니다.</p>
         )}
      </CardList>
   );
};

export default MainList;

const CardList = styled.div`
   width: 100%;
   display: flex;
   justify-content: start;
   flex-wrap: wrap;
   .card_wrap:nth-child(3n-1) {
      margin-left: 16px;
   }
   .card_wrap:nth-child(3n) {
      margin-left: 16px;
   }
   .no-result {
      margin: 50px auto;
      text-align: center;
      font-weight: 600;
      color: #183c7a;
   }
`;
