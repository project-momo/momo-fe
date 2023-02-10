import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { mypageHostMeetings, selectedMeeting, selectedReservation } from '../../../../atoms/mypage/atoms';
import { attendingMeeting_opened } from '../../../../atoms/mypage/selector';
import { ColorBtn } from './ModalBtn';

const CancelMeeting = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);
   const reservationId = useRecoilValue(selectedReservation);
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const attending_openedMeetings = useRecoilValue(attendingMeeting_opened);
   const paymentKey = attending_openedMeetings.filter((el: any) => el.meetingId === meetingId.id)[0].application
      .paymentKey;
   const fetchData = { paymentKey: paymentKey };

   const cancelMeeting = async () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
      axios
         .delete(API_URI + `/meetings/${meetingId.id}/reservations/${reservationId.id}`, { data: fetchData })
         .then(res => {
            if (res.status === 204) {
               alert('모임 취소가 완료되었습니다.');
               setHostMeetings(res.data);
            }
         })
         .catch(err => console.log(err));
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
