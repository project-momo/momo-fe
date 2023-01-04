import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
// eslint-disable-next-line import/no-unresolved
import { isLogin } from '../../../atoms/atom';

interface DecodedProps {
   id: string;
   nickname: string;
   exp: number;
}

const Login = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const router = useRouter();
   const { RefreshToken, AccessToken } = router.query;
   const [isLoginState, setIsLoginState] = useRecoilState(isLogin);

   useEffect(() => {
      if (AccessToken) {
         const decoded: DecodedProps = jwt_decode(`${AccessToken}`);

         localStorage.setItem('AccessToken', `${AccessToken}`);
         localStorage.setItem('RefreshToken', `${RefreshToken}`);
         axios.defaults.headers.common['Authorization'] = `${AccessToken}`;

         setIsLoginState(true);
         router.push('/');
      }
   }, [RefreshToken]);

   return <div>로그인중..</div>;
};

export default Login;
