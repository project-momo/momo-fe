import Category from '../../components/common/Category';
import Price from '../../components/rightLayout/Price';
import { RightBox } from '../../components/rightLayout/RightBox';
import { CenterSection, RightSection } from '../../styles/style';
import Detail from '../../components/detail/Detail';
import IconPrice from './../../assets/images/icon_moin.svg';
import { Modal } from '../../components/common/Modal/Modal';
import { useEffect, useState } from 'react';
import ModalDetail from '../../components/detail/ModalDetail';
import styled from 'styled-components';
import ShareModal from '../../components/common/Modal/ModalCompo/ShareModal';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { setIsShareModalOpen, setSubDataObject } from '../../atoms/sub/atom';
import { useRouter } from 'next/router';
import { api } from '../../util/token';
import { qnaListState } from '../../atoms/qna/atom';
// import axios from 'axios';
// import axios from 'axios';
import { isLogin } from '../../atoms/atom';

const Sub = () => {
   const { query } = useRouter();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [modalOpen, setModalOpen] = useRecoilState(setIsShareModalOpen);
   const [subData, setSubData] = useRecoilState(setSubDataObject);
   const [error, setError] = useState(false);
   const setQnaList = useSetRecoilState(qnaListState);
   const loginState = useRecoilValue(isLogin);

   const getData = async () => {
      if (query.id) {
         await api
            .get(`/meetings/${query.id}`)
            .then(res => {
               setSubData(res.data);
               setQnaList(res.data.questions);
            })
            .catch(() => setError(true));
      }
   };
   useEffect(() => {
      getData();
   }, [query.id]);

   const LoginCheck = () => {
      loginState ? setIsModalOpen(!isModalOpen) : alert('로그인 후 이용 가능합니다.');
      // loginState ? setIsModalOpen(!isModalOpen) : setIsModalOpen(!isModalOpen);
   };

   return (
      <>
         {isModalOpen ? (
            <Modal
               CloseModal={() => setIsModalOpen(!isModalOpen)}
               childrens={
                  <ModalDetail
                     setIsModalOpen={setIsModalOpen}
                     meetingId={subData.meetingId}
                     dateTime={subData.dateTime}
                     price={subData.price}
                     title={subData.title}
                  />
               }
            />
         ) : null}
         {modalOpen ? <Modal CloseModal={() => setModalOpen(!modalOpen)} childrens={<ShareModal />} /> : null}
         <SubWrap className={isModalOpen ? 'modalactive' : ''}>
            <Category />
            <CenterSection>
               {error ? (
                  <p>오류가 발생했습니다. 다시 시도해주세요.</p>
               ) : (
                  <Detail
                     userImage={subData.host.imageUrl}
                     username={subData.host.nickname}
                     gu={subData.address.addresses}
                     location={subData.address.addressInfo}
                     content={subData.content}
                     title={subData.title}
                     hostId={subData.host.userId}
                  />
               )}
            </CenterSection>
            <RightSection>
               <RightBox
                  label="모임에 참여하기"
                  imgLink={IconPrice}
                  childrens={
                     <Price
                        datePolicy={subData.dateTime.datePolicy}
                        open={subData.meetingState}
                        price={subData.price}
                        OpenModal={LoginCheck}
                     />
                  }
               />
            </RightSection>
         </SubWrap>
      </>
   );
};

export default Sub;

const SubWrap = styled.div`
   width: 100%;
   display: flex;
   &.modalactive {
      height: calc(100vh - 55px);
   }
`;
