import axios from 'axios';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedMeeting, selectedReservation } from '../../../../atoms/mypage/atoms';
import { ColorBtn } from './ModalBtn';

const RejectApplication = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);
   const reservationId = useRecoilValue(selectedReservation);
   const [message, setMessage] = useState('');

   const rejectApplication = async () => {
      const fetchData = { isAccepted: 'false', message };
      if (message.trim().length === 0) {
         alert('신청 반려 사유를 작성해주세요!');
      } else {
         const res = await axios.patch(
            API_URI + `/meetings/${meetingId.id}/reservations/${reservationId.id}`,
            fetchData
         );
         if (res.status === 200) {
            alert('신청 반려하였습니다.');
            console.log('성공 : ,', res);
         }
      }
   };

   return (
      <>
         <p className="title">참가 신청 반려</p>
         <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="신청 반려 사유를 작성해주세요."></textarea>
         <ColorBtn onClick={rejectApplication}>신청 반려</ColorBtn>
      </>
   );
};

export default RejectApplication;
