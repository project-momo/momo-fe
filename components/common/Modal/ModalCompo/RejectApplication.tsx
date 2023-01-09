import { ColorBtn } from './ModalBtn';

const RejectApplication = () => {
   return (
      <>
         <p className="title">참가 신청 반려</p>
         <textarea placeholder="신청 반려 사유를 작성해주세요."></textarea>
         <ColorBtn>신청 반려</ColorBtn>
      </>
   );
};

export default RejectApplication;
