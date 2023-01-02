import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { meetingInfo } from '../../../../atoms/mypage/atoms';
import { SquareButton } from '../../../mypage/Button';

const ApplicationStatus = () => {
   const info = useRecoilValue(meetingInfo);

   return (
      <ModalWrapper>
         <p className="title">참가 신청 현황</p>
         <div>
            <p className="title-sm">
               신청 내역<span>( {info.date.date} | {info.date.time} )</span>
            </p>
            <p className="meeting-title">{info.title}</p>
         </div>
         <div>
            <p className="title-sm">주최자 정보</p>
            <ul>
               <li>{info.hostInfo.nickname}</li>
               <li>{info.hostInfo.email}</li>
            </ul>
         </div>
         <div>
            <p className="title-sm">만남 장소</p>
            <p className="meeting-address">{info.address.addresses.join(', ')}</p>
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
      flex-direction: row !important;
      justify-content: space-between;
      button {
         width: 48%;
      }
   }
`;

export default ApplicationStatus;
