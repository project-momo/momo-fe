import React from 'react';
import styled from 'styled-components';
import { SubTitle } from '../common/SubTitle';
import IconMore from './../../assets/images/icon_more.svg'
interface DetailProps {
   userImage : string
   username : string
   location: string
   location2 :string
}
const Detail = ({userImage, username,location ,location2}:DetailProps) => {
   return (
      <DetailLayout>
         <MoreIcon src={IconMore}></MoreIcon>
            <UserCard>
               <img src={userImage} alt="userProfile"/>
               <span>{username}</span>
            </UserCard>
            <SubTitle label='가나다' labelMore=''/>
            <Content>
            세상에서 가장 존경하는 사람들이 바로 '새로움을 전달하는 자' <br/>
            나는 '창업자'라고 읽는다. 늘 사서 고생을 하지만 뜨겁게 박수 받지 못할 때가 많으며, 늘 의심의 눈초리와 알 수 없는 직원과의 괴리감 속에서 늘 달리는 것을 멈추면 되지 않는 자리...
            <br/><br/>
            창업을 하면서 '빚'이 생긴다는 것은 수치스러운 것이 아닌 '미래를 담보'로 오늘을 살아가기 위한 또 다른 기회의 발판...
            <br/><br/>
            고물가 고금리 그리고 할부의 시대를 살아가고 있는 지금, 누군가는 그것을 기회로 만들어가고 있으며 누군가는 빚에 대해 담담하게 받아들이고 계속해서 나아가는 자가 있다.
            <br/><br/>
            '창업을 한다는 것'은 정말 대단한 것이며, 소위 '배포'가 없다면 쉽게 할 수 없는 것이다. 늘 미래를 보며 오늘을 손해 보는 것 같지만, 포기하지만 않는다면, 모두의 동경과 시대의 흐름에 기억되는 그 이름 '창업자'...
            <br/><br/>
            신용으로 먹고 살아가는 사회에서 '창업자'로 굳건히 버티는 것은 어쩌면 위대한 여정이라고 나는 본다.
            </Content>

            <ListTitle>만남 가능 장소</ListTitle>
            <LocationList>
               <Location>{location}</Location>
               <Location>{location}</Location>
            </LocationList>
            <LocationList>
               <Location>{location2}</Location>
            </LocationList>
         
      </DetailLayout>
   );
};
 
const DetailLayout =styled.div`
width: 100%;
 background: #FFFFFF;
   border-radius: 15px;
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

const MoreIcon = styled.img`
   position: absolute;
   top: 20px;
   right: 20px;
`

const Content = styled.p`
   font-size: 15px;
   line-height: 1.5;
   font-weight: 400;
`

const ListTitle = styled.p`
   font-size: 16px;
   color: #444BFF;
`
const LocationList = styled.ul`
   
`
const Location = styled.li`
   list-style: circle;
`