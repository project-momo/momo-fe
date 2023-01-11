import { CenterSection } from '../../styles/style';
import MyCategory from '../../components/mypage/MyCategory';
import Profile from '../../components/mypage/Profile';
import Point from '../../components/mypage/Point';
import { useSetRecoilState } from 'recoil';
import { mypageAttendingMeetings, mypageHostMeetings, myProfile } from '../../atoms/mypage/atoms';
import { useEffect } from 'react';
import axios from 'axios';
import MyMeetings_mypage from '../../components/mypage/MyMeetings_mypage';
import { loadTossPayments } from '@tosspayments/payment-sdk';

const Mypage = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const clientKey: any = process.env.NEXT_PUBLIC_CLIENT_KEY;

   const setMyInfo = useSetRecoilState(myProfile);

   const setHostMeetings = useSetRecoilState(mypageHostMeetings);
   const setAttendingMeetings = useSetRecoilState(mypageAttendingMeetings);

   // 결제창 띄우기 테스트 완료
   const startPayment = async () => {
      // GET /payments/success?paymentKey=PAYMENT_KEY&orderId=ORDER_ID&amount=10000
      const tossPayments = await loadTossPayments(clientKey);

      tossPayments
         .requestPayment('카드', {
            amount: 1, // 가격
            orderId: 'fHpRP7cw3gOEn1w0PZd-W', // 주문 id
            orderName: `임채영`, // 결제 이름
            customerName: 'test', // 판매자, 판매처 이름
            customerEmail: 'user@test.com',
            // createDate: '2023-01-10',
            // paySuccessYn: '결제 전',
            successUrl: 'http://localhost:3000/payment/success', // 성공시 리다이렉트 주소
            failUrl: 'http://localhost:3000/payment/failed' // 실패시 리다이렉트 주소
         })
         .catch(function (error) {
            if (error.code === 'USER_CANCEL') {
               // 결제 고객이 결제창을 닫았을 때 에러 처리
               alert('결제가 취소되었습니다.');
            } else if (error.code === 'INVALID_CARD_COMPANY') {
               // 유효하지 않은 카드 코드에 대한 에러 처리
               alert('유효하지 않은 카드입니다.');
            }
         });
   };

   useEffect(() => {
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('AccessToken');
      // 통신
      axios
         .all([
            axios.get(API_URI + '/mypage/profile'),
            axios.get(API_URI + '/mypage/meetings/hosts?page=1&size=20'),
            axios.get(API_URI + '/mypage/meetings/participants?page=1&size=20')
         ])
         .then(
            axios.spread((res1, res2, res3) => {
               setMyInfo(res1.data);
               setHostMeetings(res2.data);
               setAttendingMeetings(res3.data);
            })
         )
         .catch(err => console.log(err));
   }, []);

   return (
      <>
         <MyCategory />
         <CenterSection>
            <Profile />
            <Point />
            <button onClick={startPayment}>결제하기</button>
            <MyMeetings_mypage />
         </CenterSection>
      </>
   );
};

export default Mypage;
