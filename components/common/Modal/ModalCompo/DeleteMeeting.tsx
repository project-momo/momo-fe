import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { selectedMeeting } from '../../../../atoms/mypage/atoms';
import { ColorBtn } from './ModalBtn';

const DeleteMeeting = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meetingId = useRecoilValue(selectedMeeting);

   const deleteMeeting = async () => {
      const res = await axios.delete(API_URI + `/meetings/${meetingId.id}`);

      if (res.status === 204) {
         alert('삭제가 완료되었습니다.');
      }
   };
   return (
      <>
         <p className="title">모임을 삭제하겠습니까?</p>
         <p>삭제전 안내사항</p>
         <p>모임 삭제시 어쩌구 저쩌구 입니다.</p>
         <ColorBtn onClick={deleteMeeting} data-bs-dismiss="modal">
            모임 삭제
         </ColorBtn>
      </>
   );
};

export default DeleteMeeting;
