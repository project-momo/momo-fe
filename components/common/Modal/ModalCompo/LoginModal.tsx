import React from 'react';
import styled from 'styled-components';
import KakaoLogin from './../../../../assets/images/kakoLogo.svg';

const LoginModal = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;

   return (
      <div>
         <Title>로그인</Title>
         <SubTitle>로그인 하고 모임의 모든 서비스를 즐겨보세요</SubTitle>
         <LoginBtn href={`${API_URI}/oauth2/authorization/kakao`}>
            <img src={KakaoLogin} alt="kakaologin" />
            카카오로그인
         </LoginBtn>
      </div>
   );
};

export default LoginModal;

const Title = styled.p`
   font-size: 20px;
   font-weight: 700;
   margin-bottom: 5px;
   text-align: center;
`;

const SubTitle = styled.div`
   font-size: 16px;
   font-weight: 400;
   color: #606060;
   text-align: center;
   margin-bottom: 20px;
`;
const LoginBtn = styled.a`
   padding: 15px;
   background-color: #ffeeb2;
   border-radius: 30px;
   display: block;
   margin: 0 auto;
   text-align: center;
   align-items: center;
   :active {
      color: black;
   }
   :hover {
      color: black;
   }
   img {
      margin-right: 5px;
      width: 26px;
   }
`;
