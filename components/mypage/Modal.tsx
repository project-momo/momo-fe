import styled from 'styled-components';
import { CloseBtn } from '../common/Modal/Modal';
import IconClose from '../../assets/images/icon_close.svg';
import MoimModal from '../common/Modal/ModalCompo/MoimModal';
import ApplicationStatus from '../common/Modal/ModalCompo/ApplicationStatus';
import Withdraw from '../common/Modal/ModalCompo/Withdraw';
import { useRecoilValue } from 'recoil';
import { modalState } from '../../atoms/mypage/atoms';
import RejectApplication from '../common/Modal/ModalCompo/RejectApplication';
import DeleteMeeting from '../common/Modal/ModalCompo/DeleteMeeting';

const Modal = () => {
   const type = useRecoilValue(modalState);
   console.log(type);

   return (
      <ModalWrapper className="modal modal-alert bg-secondary py-5" role="dialog" id="myModal">
         <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content rounded-4 shadow">
               <div className="modal-body p-4 text-center">
                  <CloseBtn
                     icon={IconClose}
                     className="btn btn-lg btn-link fs-6 text-decoration-none col-6 m-0"
                     data-bs-dismiss="modal"
                  />
                  {/* 모임 등록 완료 모달 */}
                  {type === 'create' && (
                     <MoimModal
                        title="모임 등록이 완료되었습니다!"
                        subTitle="등록된 모임을 확인해보세요."
                        mainBtnLabel="모임 확인하기"
                        mainBtnPath="/"
                        routeBtnLabel="다른 모임 살펴보기"
                        routeBtnPath="/"
                     />
                  )}
                  {/* 모임 신청 완료 모달 */}
                  {type === 'join' && (
                     <MoimModal
                        title="신청이 완료되었습니다!"
                        subTitle="지금 신청한 모임을 확인해보세요."
                        mainBtnLabel="모임 확인하기"
                        mainBtnPath="/"
                        routeBtnLabel="다른 모임 살펴보기"
                        routeBtnPath="/"
                     />
                  )}
                  {/* 모임 삭제 모달 */}
                  {type === 'deleteMeeting' && <DeleteMeeting />}
                  {/* 신청 반려 사유 모달 */}
                  {type === 'cancel' && <RejectApplication />}
                  {/* 참가 신청 현황 모달 */}
                  {type === 'applicationStatus' && <ApplicationStatus />}
                  {/* 적립금 출금 모달 */}
                  {type === 'withdraw' && <Withdraw />}
               </div>
            </div>
         </div>
      </ModalWrapper>
   );
};

const ModalWrapper = styled.div`
   --bs-bg-opacity: 0 !important;
   background: none !important;
   .p-4 {
      padding: 2rem !important;
   }
   .title {
      font-size: 24px;
      font-weight: 900;
      margin-bottom: 20px;
   }
   textarea {
      width: 100%;
      height: 180px;
      background-color: #f0f0f0;
      padding: 15px;
      margin-bottom: 15px;
      color: black;
      border: none;
      border-radius: 5px;
      &:focus {
         outline: none;
      }
   }
`;

export default Modal;
