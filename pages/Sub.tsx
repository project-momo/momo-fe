import React from 'react';
import { useRouter } from 'next/router';
const Sub = () => {
  const router = useRouter();
  console.log(router, 'router');
  return <div>subPage</div>;
};

export default Sub;
