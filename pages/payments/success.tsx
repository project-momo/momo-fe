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
      console.log('orderId : ' + orderId);
      console.log('paymentKey : ' + paymentKey);
      console.log('amount : ' + amount);

      // GET /payments/success?paymentKey=PAYMENT_KEY&orderId=ORDER_ID&amount=10000
      axios
         .get(
            `https://27c6-39-116-11-157.jp.ngrok.io/payments/success?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`
         )
         .then(res => {
            if (res.status == 200 && res.data.method === '카드') {
               window.alert({
                  position: 'center',
                  icon: 'success',
                  text: '예약이 완료되었습니다!',
                  showConfirmButton: false,
                  timer: 1500
               });
               route.push('/attending');
            }

            console.log('성공 페이지에서 : ', res);
         })
         .catch(err => {
            console.log('성공 페이지에서 에러 : ', err);
            // route.push('/payment/failed');
         });
   }, []);
   return <h1>결제 성공 페이지</h1>;
};

export default Succeess;
