import styled from 'styled-components';
import { SquareButton } from '../../../mypage/Button';

const ApplicationStatus = () => {
   return (
      <ModalWrapper>
         <p className="title">참가 신청 현황</p>
         <div>
            <p className="title-sm">
               신청 내역<span>( 2022.12.26 | 15:00 - 16:00 (1시간) )</span>
            </p>
            <p className="meeting-title">개발자 멘토링 해드립니다.</p>
         </div>
         <div>
            <p className="title-sm">주최자 정보</p>
            <ul>
               <li>홍길동</li>
               <li>abcd@gamil.com</li>
               <li>010-1234-5678</li>
            </ul>
         </div>
         <div>
            <p className="title-sm">만남 장소</p>
            <p className="meeting-address">Zoom회의 당일 링크 이메일로 전달</p>
         </div>
         <div className="btn-wrapper">
            <SquareButton>모임 시간 변경</SquareButton>
            <SquareButton>모임 취소</SquareButton>
         </div>
      </ModalWrapper>
   );
};

const ModalWrapper = styled.div`
   text-align: left;
   div {
      border-bottom: 1px solid #cccccc;
      margin-bottom: 10px;
      padding: 3px 0;
      &:last-child {
         border-bottom: none;
      }
      .title-sm {
         font-size: 16px;
         font-weight: 900;
         span {
            font-size: 14px;
            margin-left: 10px;
         }
      }
      .meeting-title {
         padding: 5px 10px;
      }
      ul {
         padding: 5px 10px 5px 30px;
         li {
            font-size: 15px;
            list-style: disc;
         }
      }
      .meeting-address {
         padding: 5px 10px;
      }
   }
   .btn-wrapper {
      flex-direction: row;
      justify-content: space-between;
      button {
         width: 48%;
      }
   }
`;

export default ApplicationStatus;
