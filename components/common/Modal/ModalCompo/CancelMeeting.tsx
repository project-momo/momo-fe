import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { mypageAttendingMeetings, selectedMeeting, selectedReservation } from '../../../../atoms/mypage/atoms';
import { attendingMeeting_state } from '../../../../atoms/mypage/selector';
import { api } from '../../../../util/token';
import { ColorBtn } from './ModalBtn';

const CancelMeeting = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);
   const reservationId = useRecoilValue(selectedReservation);
   const [attendingMeetings, setAttendingMeetings] = useRecoilState(mypageAttendingMeetings);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_state);
   const filtered = attending_openedMeetings.filter((el: any) => el.meetingId !== meetingId.id);
   let paymentKey: string;

   useEffect(() => {
      paymentKey = attending_openedMeetings.filter((el: any) => el.meetingId === meetingId.id)[0].application
         .paymentKey;

      return () => {
         paymentKey = '';
      };
   }, []);

   const cancelMeeting = () => {
      const fetchData = { paymentKey: paymentKey };

      api.delete(API_URI + `/meetings/${meetingId.id}/reservations/${reservationId.id}`, { data: fetchData })
         .then(res => {
            if (res.status === 204) {
               alert('모임 취소가 완료되었습니다.');
               setAttendingMeetings({ ...attendingMeetings, content: filtered });
               api.get(API_URI + '/mypage/meetings/participants?page=1&size=20').then(res => {
                  setAttendingMeetings(res.data);
               });
            }
         })
         .catch(err => alert(err.response.data.message));
   };
   return (
      <Wrapper>
         <p className="title">모임 참여를 취소하시겠습니까?</p>
         <ul>
            <li>유료 모임의 경우 결제취소까지 영업일 기준 3~5일 정도 소요됩니다.</li>
         </ul>
         <ColorBtn onClick={cancelMeeting} data-bs-dismiss="modal">
            모임 취소
         </ColorBtn>
      </Wrapper>
   );
};

const Wrapper = styled.div`
   ul {
      margin: 10px 0 20px;
      text-align: left;
      font-weight: 600;
      background: #f0f0f0;
      padding: 10px 0;
      border-radius: 5px;
      li {
         list-style: disc;
         margin-left: 30px;
         word-break: keep-all;
         font-size: 16px;
      }
   }
`;

export default CancelMeeting;
