import { useEffect } from 'react';

const Fail = () => {
   useEffect(() => {
      alert('결제 실패!');
   }, []);
   return <h1>결제 실패 페이지</h1>;
};

export default Fail;
