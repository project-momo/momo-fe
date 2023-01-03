import styled from 'styled-components';
import { locationDummy } from '../../dummy/locationDummy';

interface LocationProps {
   location1: string;
   location2: string[];
   onClickLocation1: (value: string) => void;
   onClickLocation2: (value: string) => void;
}

const Location = ({ location1, location2, onClickLocation1, onClickLocation2 }: LocationProps) => {
   return (
      <>
         <LocationTitle>
            <div>지역</div>
            <div>상세지역</div>
         </LocationTitle>
         <LocationWrapper>
            <LocationStyle>
               {locationDummy.map(el => (
                  <li
                     key={el.location1}
                     onClick={() => {
                        onClickLocation1(el.location1);
                     }}
                     className={el.location1 === location1 ? 'selected1' : ''}>
                     {el.location1}
                  </li>
               ))}
            </LocationStyle>
            <LocationStyle>
               {location1 ? (
                  locationDummy.map(el => {
                     if (el.location1 === location1) {
                        return el.location2.map((el, idx) => (
                           <li
                              key={idx}
                              onClick={() => {
                                 onClickLocation2(el);
                              }}
                              className={location2.includes(el) ? 'selected2' : ''}>
                              {el}
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
      padding: 10px;
      border-radius: 5px;
      cursor: pointer;
   }
   li.selected1 {
      background-color: #d4e6ff;
      color: #6a6ff2;
   }
   li.selected2 {
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
