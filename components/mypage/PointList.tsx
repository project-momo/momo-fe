import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { myPoint } from '../../atoms/mypage/atoms';
import { api } from '../../util/token';
import List from './List';
import { BasicWrapper } from './mypage.style';

const PointList = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const [pointList, setPointList] = useRecoilState(myPoint);

   useEffect(() => {
      // 통신
      api.get(API_URI + '/mypage/point/details').then(res => {
         setPointList(res.data.content);
      });
   }, []);

   return (
      <PointListWrapper>
         <div className="title">적립금 내역</div>
         <div className="card">
            {pointList.map((list: any) => (
               <List data={list} key={list.id} />
            ))}
         </div>
         {pointList.length === 0 && <div className="card empty">적립금 이용 내역이 없습니다.</div>}
      </PointListWrapper>
   );
};

const PointListWrapper = styled(BasicWrapper)`
   .card {
      padding: 0;
      overflow: hidden;
      &.empty {
         display: flex;
         align-items: center;
         justify-content: center;
         height: 100px;
         font-size: 15px;
         color: #565656;
         font-weight: 600;
      }
   }
   .list {
      display: flex;
      padding: 30px 25px;
      border-bottom: 1px solid #c3c3c3;
      .message {
         font-size: 15px;
         font-weight: 600;
         flex: 1;
         span {
            font-size: 14px;
            color: #5f5f5f;
            margin-left: 15px;
         }
      }
      .status {
         font-size: 16px;
         font-weight: 600;
         &.plus {
            color: #6d72f9;
         }
         &.minus {
            color: #ff7b7b;
         }
      }
      .point {
         font-size: 16px;
         font-weight: 600;
         width: 10%;
         text-align: right;
      }
   }
`;

export default PointList;
