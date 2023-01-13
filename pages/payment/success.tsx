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
         .get(API_URI + `/payments/success?paymentKey=${paymentKey}&orderId=${orderId}&amount=${amount}`)
         .then(res => {
            if (res.status == 200 && res.data.method === '카드') {
               window.alert({
                  position: 'center',
                  icon: 'success',
                  text: '결제가 완료되었습니다!',
                  showConfirmButton: false,
                  timer: 1500
               });
               route.push('/attending');
            }
         })
         .catch(() => {
            route.push('/payment/failed');
         });
   }, []);
   return <h1>결제 성공 페이지</h1>;
};

export default Succeess;
