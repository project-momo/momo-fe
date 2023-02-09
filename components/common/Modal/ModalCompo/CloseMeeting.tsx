import axios from 'axios';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { mypageHostMeetings, selectedMeeting } from '../../../../atoms/mypage/atoms';
import { ColorBtn } from './ModalBtn';

const CloseMeeting = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);
   const setHostMeetings = useSetRecoilState(mypageHostMeetings);

   const closeMeeting = async () => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
      const res = await axios.delete(API_URI + `/meetings/${meetingId.id}`);
      if (res.status === 204) {
         alert('모임 모집이 종료되었습니다.');
         axios
            .get(API_URI + '/mypage/meetings/hosts?page=1&size=20')
            .then(res => {
               setHostMeetings(res.data);
            })
            .catch(err => console.log(err));
      }
   };
   return (
      <Wrapper>
         <p className="title">모임 모집을 마감하시겠습니까?</p>
         <ul>
            <li>확정된 모임은 취소할 수 없습니다.</li>
            <li>수락 대기 참여자는 자동으로 모임참여 취소가 됩니다.</li>
            <li>불가피한 사유로 확정 모임의 취소가 필요한 경우 개인적인 연락을 통해서 협의해주세요.</li>
         </ul>
         <ColorBtn onClick={closeMeeting} data-bs-dismiss="modal">
            모임 마감
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

export default CloseMeeting;
