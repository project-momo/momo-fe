import { useRecoilState, useRecoilValue } from 'recoil';
import { mypageHostMeetings, selectedMeeting, selectedReservation } from '../../../../atoms/mypage/atoms';
import { api } from '../../../../util/token';
import { ColorBtn } from './ModalBtn';

const AcceptApplication = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);
   const reservationId = useRecoilValue(selectedReservation);
   const [hostMeetings, setHostMeetings] = useRecoilState(mypageHostMeetings);
   const filteredApplication = hostMeetings.content.filter((meeting: any) => meeting.meetingId !== meetingId.id);
   const acceptedApplication = hostMeetings.content.filter((meeting: any) => meeting.meetingId === meetingId.id);
   const confirmed = [
      ...acceptedApplication[0].applications.confirmed,
      ...acceptedApplication[0].applications.requests.filter((user: any) => user.reservationId === reservationId.id)
   ];
   const requests = acceptedApplication[0].applications.requests.filter(
      (user: any) => user.reservationId !== reservationId.id
   );
   const content = [...filteredApplication, { ...acceptedApplication[0], applications: { requests, confirmed } }];

   const acceptApplication = async () => {
      const fetchData = { isAccepted: 'true' };

      const res = await api.patch(API_URI + `/meetings/${meetingId.id}/reservations/${reservationId.id}`, fetchData);
      if (res.status === 200) {
         alert('신청을 수락하였습니다.');
         setHostMeetings({ ...hostMeetings, content });
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
