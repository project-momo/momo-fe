import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import iconLifestyle from './../../public/images/icon_lifestyle.png'

const Layout = styled.div`
   width: 277px;
   background-color: white;
   height: calc(100vh - 105px);
   border-radius: 15px;
   box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
   overflow-y: auto;
`
const Ul = styled.ul`
   padding: 30px 18px;
`
const Li = styled.li`
 a{
   display: flex;
   padding: 10px 20px;
   border-radius: 50px;
   cursor: pointer;
 }
 a.active{
   background-color: #ECF4FF;
 }
 a p {
   font-size: 16px;
   font-weight: 700;
   padding-left: 9px;
 }
`
const Category = () => {
   return (
      <Layout>
         <Ul>
            <Li>
               <Link href="#" className='active'>
                  <img src='./../../assets/images/icon_lifestyle.png' />
                  <p>전체</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>
                  <img />
                  <p>라이프스타일</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>
                  <img src='./../../assets/images/icon_lifestyle.png'/>
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>
                  <img src='./../../assets/images/icon_lifestyle.png'/>
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>
                  <img src='./../../assets/images/icon_lifestyle.png'/>
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>
                  <img src='./../../assets/images/icon_lifestyle.png'/>
                  <p>미디어</p>
               </Link>
            </Li>

            <Li>
               <Link href="#" className=''>
                  <img src='./../../assets/images/icon_lifestyle.png'/>
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>
                  <img src='./../../assets/images/icon_lifestyle.png'/>
                  <p>미디어</p>
               </Link>
            </Li>
         </Ul>
      </Layout>
   );
};

export default Category;