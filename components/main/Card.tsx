import React from 'react';
import styled from 'styled-components';
interface CardProps {
   username : string
   userImage: string
   title : string
   content : string
   locate : string
   price : string
}

const Card = ({
   username,userImage, title, content, locate, price
}:CardProps) => {
   return (
      <CardWrap>
         <a href='#'>
            <UserCard>
               <img src={userImage} alt="userProfile"/>
               <span>{username}</span>
            </UserCard>
            <CardContent>
               <Title>{title}</Title>
               <Content>{content}</Content>
            </CardContent>
            <MoreInfo>
               <p>
               <span>{locate}</span>
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
   a{
      padding: 15px 17px;
      width: 100%;
   background: #FFFFFF;
   border-radius: 15px;
   cursor: pointer;
   display: block;
   transition: 0.3s;
   }
   a:hover{
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
     
   }
`
const UserCard = styled.div`
span{
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
}

   display: flex;
   align-items: center;
   margin-bottom: 13px;
   img {
      height: 45px;
      width: 45px;
      margin-right: 14px;
   }
`
const CardContent = styled.div`
   
`
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
`

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
`
const MoreInfo = styled.div`
   & p span{
      color: #444BFF;
   }
 
`