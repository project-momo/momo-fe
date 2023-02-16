import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

interface CardProps {
   username: string;
   userImage: string;
   title: string;
   content: string;
   locate: string[];
   price: string;
   meetingId: number;
   meetingState: string;
}

const Card = ({ username, userImage, title, content, locate, price, meetingId, meetingState }: CardProps) => {
   const shortLocate = locate.length !== 0 ? locate[0].split(' ')[1] : '';
   return (
      <CardWrap className="card_wrap">
         <Link href={`/sub/${meetingId}`}>
            <UserCard>
               <UserImg backimg={userImage}></UserImg>
               <UserName>{username}</UserName>
               <MeetingState>{meetingState === '모집 완료' && meetingState}</MeetingState>
            </UserCard>
            <CardContent>
               <Title>{title}</Title>
               <Content>{content}</Content>
            </CardContent>
            <MoreInfo>
               <p>
                  <span>{shortLocate}</span>
                  {price === '0' ? <span> | 무료 </span> : <span> | {price}원 </span>}
               </p>
            </MoreInfo>
         </Link>
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
      height: 261px;
      background: #ffffff;
      border-radius: 15px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
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
   background-color: #e6eaeb;
`;
const MeetingState = styled.span`
   font-weight: 600;
   font-size: 14px;
   flex: 1;
   text-align: right;
   color: #656464;
`;
const CardContent = styled.div`
   flex: 1;
`;
const Title = styled.p`
   font-size: 16px;
   font-weight: 700;
   line-height: 24px;
   max-height: 48px;
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
      font-weight: 600;
   }
`;
