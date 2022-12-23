import React from 'react';
import Card from './Card';
import UserImg from './../../assets/images/userimg.svg'
import styled from 'styled-components';

const dummyList = [
   {
      username : '유저이르으으음',
      userImage : UserImg,
      title : '읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽' ,
      content: '안녕하세요! 온라인 북클럽 Bookies의 새로운 모임 #벽돌-휴먼에 참가하실 분들을 기다리고 있습니다!',
      locate : '강남구',
      price : '3,000'
   },
   {
      username : '유저이르으으음',
      userImage : UserImg,
      title : '읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽' ,
      content: '안녕하세요! 온라인 북클럽 Bookies의 새로운 모임 #벽돌-휴먼에 참가하실 분들을 기다리고 있습니다!',
      locate : '강남구',
      price : '3,000'
   },
   {
      username : '유저이르으으음',
      userImage : UserImg,
      title : '읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽' ,
      content: '안녕하세요! 온라인 북클럽 Bookies의 새로운 모임 #벽돌-휴먼에 참가하실 분들을 기다리고 있습니다!',
      locate : '강남구',
      price : '3,000'
   },
   {
      username : '유저이르으으음',
      userImage : UserImg,
      title : '읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽읽기를 미루고 있던 두꺼운 벽돌책 부수는 북클럽' ,
      content: '안녕하세요! 온라인 북클럽 Bookies의 새로운 모임 #벽돌-휴먼에 참가하실 분들을 기다리고 있습니다!',
      locate : '강남구',
      price : '3,000'
   }
]

const MainList = () => {
   return (
      <CardList>
        {
         dummyList.map((el, idx) => <Card key={idx} username={el.username} userImage={el.userImage} title={el.title} content={el.content} locate={el.locate} price={el.price} />)
        } 
      </CardList>
   );
};

export default MainList;

const CardList =styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`