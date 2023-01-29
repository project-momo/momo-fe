import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { selectedMeeting, selectedReservation } from '../../../../atoms/mypage/atoms';
import { ColorBtn } from './ModalBtn';

const AcceptApplication = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);
   const reservationId = useRecoilValue(selectedReservation);

   const acceptApplication = async () => {
      const fetchData = { isAccepted: 'true' };

      const res = await axios.patch(API_URI + `/meetings/${meetingId.id}/reservations/${reservationId.id}`, fetchData);
      if (res.status === 200) {
         alert('신청을 수락하였습니다.');
         console.log('성공 : ,', res);
      }
   };

   return (
      <>
         <p className="title">참가 신청 수락</p>
         <ColorBtn onClick={acceptApplication} data-bs-dismiss="modal">
            신청 수락
         </ColorBtn>
      </>
   );
};

export default AcceptApplication;
