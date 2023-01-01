import React from 'react';
import styled, { css } from 'styled-components';

const SubModal = () => {
   const myPost = true;
   return (
      <ModalWarp>
         <List>
            <a>공유하기</a>
         </List>
         <List>
            <a>게시글 수정</a>
         </List>
         <List>
            <a>게시글 삭제</a>
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
   a {
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
