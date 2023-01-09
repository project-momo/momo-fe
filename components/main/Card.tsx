import React from 'react';
import styled from 'styled-components';
interface CardProps {
   username: string;
   userImage: string;
   title: string;
   content: string;
   locate: string[];
   price: string;
   meetingId: number;
}

const Card = ({ username, userImage, title, content, locate, price, meetingId }: CardProps) => {
   const shortLocate = locate[0].split(' ')[1];
   return (
      <CardWrap>
         <a href={`/Sub/${meetingId}`}>
            <UserCard>
               <UserImg backimg={userImage}></UserImg>
               <UserName>{username}</UserName>
            </UserCard>
            <CardContent>
               <Title>{title}</Title>
               <Content>{content}</Content>
            </CardContent>
            <MoreInfo>
               <p>
                  <span>{shortLocate}</span>
                  {price === '0' ? null : <span> | {price}원 </span>}
               </p>
            </MoreInfo>
         </a>
      </CardWrap>
   );
};

export default Card;
const CardWrap = styled.div`
   width: calc(33.3% - 11px);
   margin-bottom: 18px;
   a {
      padding: 15px 17px;
      width: 100%;
      background: #ffffff;
      border-radius: 15px;
      cursor: pointer;
      display: block;
      transition: 0.3s;
   }
   a:hover {
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
      margin-top: -5px;
   }
`;
const UserCard = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 13px;
`;
const UserName = styled.span`
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
   height: 24px;
   text-overflow: ellipsis;
   overflow: hidden;
   word-break: break-word;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   -webkit-box-orient: vertical;
`;
const UserImg = styled.span<{ backimg: string }>`
   height: 45px;
   width: 45px;
   margin-right: 14px;
   background-size: cover;
   border-radius: 100%;
   display: block;
   background-image: url(${p => `${p.backimg}`});
`;
const CardContent = styled.div``;
const Title = styled.p`
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
   height: 48px;
   text-overflow: ellipsis;
   overflow: hidden;
   word-break: break-word;
   display: -webkit-box;
   -webkit-line-clamp: 2;
   -webkit-box-orient: vertical;
   margin-bottom: 15px;
`;

const Content = styled.p`
   font-size: 15px;
   font-weight: 400;
   line-height: 22px;
   height: 66px;
   text-overflow: ellipsis;
   overflow: hidden;
   word-break: break-word;
   display: -webkit-box;
   -webkit-line-clamp: 3;
   -webkit-box-orient: vertical;
   margin-bottom: 20px;
`;
const MoreInfo = styled.div`
   & p span {
      color: #444bff;
   }
`;
