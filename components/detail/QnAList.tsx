import React from 'react';
import styled from 'styled-components';
import UserImage from './../../assets/images/userimg.svg';
import IconModify from './../../assets/images/icon_mdify.svg';
import IconDelete from './../../assets/images/icon_delete.svg';

const QnAList = () => {
   return (
      <QnaUl>
         <FirstLi>
            <FirstList>
               <User>
                  <UserImg userimg={UserImage}>userImg</UserImg>
                  <UserName>유저이름</UserName>
                  <Time>시간전</Time>
               </User>
               <Comment>너무 어렵습니다. 몇시간 정도가 적당할까요?</Comment>
            </FirstList>
            <SecondUl>
               <CommentWarp>
                  <User>
                     <UserImg userimg={UserImage}>userImg</UserImg>
                     <UserName>유저이름</UserName>
                     <Time>시간전</Time>
                  </User>
                  <Comment>너무 어렵습니다. 몇시간 정도가 적당할까요?</Comment>
               </CommentWarp>
               <CommentWarp>
                  <User>
                     <UserImg userimg={UserImage}>userImg</UserImg>
                     <UserName>유저이름</UserName>
                     <Time>시간전</Time>
                  </User>
                  <Comment>너무 어렵습니다. 몇시간 정도가 적당할까요?</Comment>
               </CommentWarp>
            </SecondUl>
         </FirstLi>
         <FirstLi>
            <FirstList>
               <User>
                  <UserImg userimg={UserImage}>userImg</UserImg>
                  <UserName>유저이름</UserName>
                  <Time>시간전</Time>
               </User>
               <Comment>너무 어렵습니다. 몇시간 정도가 적당할까요?</Comment>
            </FirstList>
            <SecondUl>
               <CommentWarp>
                  <User>
                     <UserImg userimg={UserImage}>userImg</UserImg>
                     <UserName>유저이름</UserName>
                     <Time>시간전</Time>
                  </User>
                  <Comment>너무 어렵습니다. 몇시간 정도가 적당할까요?</Comment>
                  <Icon buttonImg={IconModify}>modify</Icon>
                  <Icon buttonImg={IconDelete}>Delete</Icon>
               </CommentWarp>
               <CommentWarp>
                  <User>
                     <UserImg userimg={UserImage}>userImg</UserImg>
                     <UserName>유저이름</UserName>
                     <Time>시간전</Time>
                  </User>
                  <Comment>너무 어렵습니다. 몇시간 정도가 적당할까요?</Comment>
               </CommentWarp>
            </SecondUl>
         </FirstLi>
      </QnaUl>
   );
};

export default QnAList;

const QnaUl = styled.ul``;
const FirstLi = styled.li`
   margin-bottom: 15px;
`;
const CommentWarp = styled.li`
   margin-bottom: 8px;
`;
const FirstList = styled.div`
   margin-bottom: 8px;
`;
const User = styled.div`
   display: flex;
   align-items: center;
`;
const UserImg = styled.span<{ userimg: string }>`
   font-size: 0;
   width: 25px;
   height: 25px;
   background-image: url(${p => `${p.userimg}`});
   background-size: cover;
`;
const UserName = styled.p`
   font-size: 14px;
   font-weight: 400;
   margin: 0 7px;
`;
const Time = styled.span`
   font-size: 10px;
   color: #767676;
`;
const Comment = styled.div`
   display: inline-block;
   padding: 8px 15px;
   background-color: #f0f0f0;
   border-radius: 30px;
   font-size: 14px;
   margin-left: 25px;
`;

const SecondUl = styled.ul`
   margin-left: 45px;
`;

const Icon = styled.button<{ buttonImg: string }>`
   font-size: 0;
   padding: 0;
   width: 16px;
   height: 16px;
   background-image: url(${p => `${p.buttonImg}`});
   background-size: cover;
   background-repeat: none;
   margin-left: 10px;
`;
