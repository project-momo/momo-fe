import axios from 'axios';
import jwt_decode from 'jwt-decode';
import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { isLogin } from '../../../atoms';

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

  const parseJwt = (token: any) => {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );

    return JSON.parse(jsonPayload);
  };

  let isTokenRefreshing = false;

  const getRefreshToken = () => {
    console.log('로컬에 담긴 토큰', localStorage.getItem('RefreshToken'));
    return localStorage.getItem('RefreshToken');
  };
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const refreshToken = getRefreshToken();
      const originalRequest = error.config;
      if (
        error.response &&
        error.response.status === 401 &&
        !isTokenRefreshing &&
        refreshToken
      ) {
        const instance = axios.create();
        instance.defaults.headers.post['Content-Type'] = 'application/json';
        delete originalRequest.headers.Authorization;
        delete instance.defaults.headers.common['Authorization'];
        isTokenRefreshing = true;
        return instance
          .post(`${API_URI}/auth/token/refresh`, {
            transformRequest: (data: any, headers: any) => {
              delete headers.common['Authorization'];
              return data;
            },
            headers: {
              RefreshToken: refreshToken,
            },
          })
          .then((res) => {
            console.log('aa');
            if (res.status === 200) {
              const accessToken = res.data.accessToken;
              const refreshToken = res.data.refreshToken;
              parseJwt(accessToken);
              localStorage.setItem('AccessToken', accessToken);
              axios.defaults.headers.common['Authorization'] = `${accessToken}`;
              localStorage.setItem('RefreshToken', refreshToken);
              // setRefreshToken(refreshToken);
              // 새로 받은 토큰 저장 및 원래 요청 다시 보내기
              originalRequest.headers['Authorization'] = `${accessToken}`;
              return axios(originalRequest);
            }
          })
          .catch((err) => {
            console.log('aa');
            localStorage.removeItem('AccessToken');
            localStorage.removeItem('RefreshToken');
            // removeRefreshToken();
            setIsLoginState(false);
            window.location.href = '/';
          });
      }
      return Promise.reject(error);
    },
  );

  return <div>로그인중..</div>;
};

export default Login;
