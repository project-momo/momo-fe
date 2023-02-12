import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Succeess = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const route = useRouter();

   useEffect(() => {
      const orderId = new URL(window.location.href).searchParams.get('orderId');
      const paymentKey = new URL(window.location.href).searchParams.get('paymentKey');
      const amount = new URL(window.location.href).searchParams.get('amount');

      // GET /payments/success?paymentKey=PAYMENT_KEY&orderId=ORDER_ID&amount=10000
      axios
         .get(API_URI + `/payments/success?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`)
         .then(res => {
            if (res.status == 200 && res.data.method === '카드') {
               alert('예약이 완료되었습니다!');
               route.push('/attending');
            }
         })
         .catch(err => {
            console.log('성공 페이지에서 에러 : ', err);
         });
   }, []);
   return <></>;
};

export default Succeess;
