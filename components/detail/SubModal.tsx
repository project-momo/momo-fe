import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { setIsShareModalOpen, setSubDataObject } from '../../atoms/sub/atom';

const SubModal = () => {
   const router = useRouter();
   const API_URI = process.env.NEXT_PUBLIC_API_URI;

   const myPost = true;
   const [modalOpen, setModalOpen] = useRecoilState(setIsShareModalOpen);
   const { meetingId } = useRecoilValue(setSubDataObject);

   const handleDeleteMeeting = () => {
      if (confirm('정말 삭제하시겠습니까?')) {
         // TODO. API 변경
         axios
            .delete(`${API_URI}/meetings/${meetingId}`)
            .then(() => {
               router.push('/');
            })
            .catch(err => console.log('에러', err));
      }
   };

   return (
      <ModalWarp>
         <List>
            <button onClick={() => setModalOpen(!modalOpen)}>공유하기</button>
         </List>
         <List>
            <button>게시글 수정</button>
         </List>
         <List>
            <button onClick={handleDeleteMeeting}>게시글 삭제</button>
         </List>
         {myPost}
      </ModalWarp>
   );
};

export default SubModal;

const ModalWarp = styled.ul`
   position: absolute;
   top: 30px;
   right: 45px;
   background-color: #ebf1f9;
   border-radius: 15px 5px 15px 15px;
   box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
   padding: 8px 5px;
`;

const List = styled.li`
   button {
      display: block;
      text-align: center;
      width: 90px;
      height: 30px;
      background-color: transparent;
      transition: background-color 0.3s;
      font-size: 14px;
      border-radius: 13px;
      padding: 5px 5px 0px;
      margin-bottom: 3px;
      :hover {
         background-color: white;
         color: #6a6ff2;
      }
   }
`;
