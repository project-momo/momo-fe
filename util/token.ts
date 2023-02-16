import axios from 'axios';

const API_URI = process.env.NEXT_PUBLIC_API_URI;
export const api = axios.create({
   baseURL: `${API_URI}`,
   timeout: 10012
});

if (typeof window !== 'undefined') {
   if (localStorage.getItem('AccessToken') !== null) {
      api.defaults.headers.common['Authorization'] = `${localStorage.getItem('AccessToken')}`;
   }
}

console.log(axios.defaults.headers.common.Authorization);
const parseJwt = (token: any) => {
   const base64Url = token.split('.')[1];
   const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
   const jsonPayload = decodeURIComponent(
      atob(base64)
         .split('')
         .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
         })
         .join('')
   );

   return JSON.parse(jsonPayload);
};

const getRefreshToken = () => {
   // console.log('로컬에 담긴 토큰', localStorage.getItem('RefreshToken'));
   return localStorage.getItem('RefreshToken');
};

api.interceptors.response.use(
   response => {
      return response;
   },
   async error => {
      const refreshToken = getRefreshToken();
      const originalRequest = error.config;
      // if (error && error.response.status === '' && refreshToken) {
      const instance = axios.create();
      instance.defaults.headers.post['Content-Type'] = 'application/json';
      instance.defaults.headers.common['RefreshToken'] = refreshToken;
      delete originalRequest.headers.Authorization;
      delete instance.defaults.headers.common['Authorization'];
      // return instance
      //    .put(`https://momo-api.shop/auth/token`, {
      //       transformRequest: (data: any, headers: any) => {
      //          delete headers.common['Authorization'];
      //          return data;
      //       },
      //       headers: {
      //          RefreshToken: refreshToken
      //       }
      //    })
      delete axios.defaults.headers.common['Authorization'];
      axios.defaults.headers.common['RefreshToken'] = localStorage.getItem('RefreshToken');
      return axios
         .put(`${API_URI}/auth/token`)
         .then(res => {
            if (res.status === 200) {
               const accessToken = res.headers.accesstoken;
               const refreshToken = res.headers.refreshtoken;

               if (accessToken && refreshToken) {
                  localStorage.setItem('AccessToken', accessToken);
                  axios.defaults.headers.common['Authorization'] = `${accessToken}`;
                  api.defaults.headers.common['Authorization'] = `${accessToken}`;
                  localStorage.setItem('RefreshToken', refreshToken);
                  // setRefreshToken(refreshToken);
                  // 새로 받은 토큰 저장 및 원래 요청 다시 보내기
                  originalRequest.headers['Authorization'] = `${accessToken}`;
               }

               return axios(originalRequest);
               // const test = axios(originalRequest).catch(e => console.log('err : ', e));
               // console.log(test);
            }
         })
         .catch(err => {
            // alert('로그인을 다시 진행해주세요');
            // window.location.href = '/';
            // console.log('리프레쉬 토큰 요청 실패 : ', err, err.response.data.status);
            // eslint-disable-next-line no-constant-condition
            if (err.response.data.status === 401) {
               window.location.href = '/';
               localStorage.removeItem('AccessToken');
               localStorage.removeItem('RefreshToken');
               localStorage.removeItem('userId');
            }
            // removeRefreshToken();
            // window.location.href = '/';
         });
   }
);
