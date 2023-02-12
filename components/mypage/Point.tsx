import { BasicWrapper } from './mypage.style';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import Modal from './Modal';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { modalState, myProfile } from '../../atoms/mypage/atoms';
import { useEffect } from 'react';
import axios from 'axios';

const Point = ({ myPoint }: any) => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const [myInfo, setMyInfo] = useRecoilState(myProfile);
   const router = useRouter();
   const point = myInfo.point.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
   const setType = useSetRecoilState(modalState);

   useEffect(() => {
      if (myPoint) {
         axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
         axios.get(API_URI + '/mypage/profile').then((res): any => setMyInfo(res.data));
      }
   }, []);

   return (
      <PointWrapper className="half">
         <p className="title">보유 적립금</p>
         <div className={myPoint ? 'card-basic autoHeight' : 'card-basic'}>
            <div className="myPoint">{point}원</div>
            <div className="btn-wrapper">
               {!myPoint && <button onClick={() => router.push('/point')}>내역</button>}
               <button
                  onClick={() => setType('withdraw')}
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#myModal">
                  출금
               </button>
            </div>
         </div>

         <Modal />
      </PointWrapper>
   );
};

const PointWrapper = styled(BasicWrapper)`
   .card-basic {
      display: flex;
      align-items: center;
      height: 105px;
      div {
         width: 50%;
      }
      &.autoHeight {
         height: auto;
      }
   }
   .myPoint {
      height: 100%;
      font-size: 24px;
      font-weight: 900;
      color: #444bff;
      border-right: 1px solid #b4b4b4;
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .btn-wrapper {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      button {
         width: 90%;
         height: 50%;
         font-size: 15px;
         font-weight: 900;
         display: flex;
         justify-content: center;
         align-items: center;
         &:hover {
            color: #444bff;
            background-color: #ecf4ff;
            border-radius: 15px;
         }
      }
   }
`;

export default Point;
