import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface LocationProps {
   si: string;
   gu: number[];
   onClickSi: (value: string) => void;
   onClickGu: (value: number) => void;
}

interface LocationDummyType {
   si: string;
   gu: GuType[];
}

interface GuType {
   id: number;
   name: string;
}

const Location = ({ si, gu, onClickSi, onClickGu }: LocationProps) => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;

   const [locationDummy, SetlocationDummy] = useState<LocationDummyType[]>([]);

   useEffect(() => {
      axios
         .get(`${API_URI}/addresses`)
         .then(res => {
            console.log('성공', res);
            SetlocationDummy(res.data);
         })
         .catch(err => console.log('에러', err));
   }, []);

   return (
      <>
         <LocationTitle>
            <div>지역</div>
            <div>상세지역</div>
         </LocationTitle>
         <LocationWrapper>
            <LocationStyle>
               {locationDummy &&
                  locationDummy.map(el => (
                     <li key={el.si}>
                        <button
                           onClick={() => {
                              onClickSi(el.si);
                           }}
                           className={el.si === si ? 'selectedSi' : ''}>
                           {el.si}
                        </button>
                     </li>
                  ))}
            </LocationStyle>
            <LocationStyle>
               {si ? (
                  locationDummy &&
                  locationDummy.map(el => {
                     if (el.si === si) {
                        return el.gu.map(el => (
                           <li key={el.id}>
                              <button
                                 onClick={() => {
                                    onClickGu(el.id);
                                 }}
                                 className={gu.includes(el.id) ? 'selectedGu' : ''}>
                                 {el.name}
                              </button>
                           </li>
                        ));
                     }
                  })
               ) : (
                  <span>지역을 선택하면 상세 지역을 확인할 수 있습니다.</span>
               )}
            </LocationStyle>
         </LocationWrapper>
      </>
   );
};

export default Location;

const LocationWrapper = styled.div`
   display: flex;
`;

const LocationTitle = styled.div`
   display: flex;
   margin-bottom: 10px;
   > div {
      width: 50%;
      color: #9f9f9f;
   }
`;

const LocationStyle = styled.ul`
   display: flex;
   flex-wrap: wrap;
   width: 50%;
   height: 300px;
   overflow-y: scroll;

   li {
      width: 50%;
   }
   li button {
      width: 100%;
      padding: 12px 10px;
      border-radius: 10px;
      text-align: left;
   }
   li button.selectedSi {
      background-color: #d4e6ff;
      color: #6a6ff2;
      transition: background-color 0.2s ease-in-out;
   }
   li button.selectedGu {
      color: #6a6ff2;
   }

   > span {
      padding: 10px;
      color: #9f9f9f;
      font-size: 14px;
   }

   /* scroll */
   &::-webkit-scrollbar {
      width: 10px;
   }
   &::-webkit-scrollbar-thumb {
      background-color: #dfdfdf;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
   }
   &::-webkit-scrollbar-track {
      background-color: #f5f5f5;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
   }
`;
