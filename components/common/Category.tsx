import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
// import Image from 'next/image'
import IconAll from './../../assets/images/icon_all.svg'
import IconLifestyle from './../../assets/images/icon_lifestyle.svg'
import IconMedia from './../../assets/images/icon_media.svg'
import IconEdu from './../../assets/images/icon_edu.svg'

export const Layout = styled.div`
   width: 277px;
   background-color: white;
   height: fit-content;
   border-radius: 15px;
   box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
   overflow-y: auto;
   margin: 20px;
`
export const Ul = styled.ul`
   padding: 30px 18px;
`
export const Li = styled.li`
 a{
   display: flex;
   align-items: center;
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
export const Category = () => {
   return (
      <Layout>
         <Ul>
            <Li>

            <a href='/test' className='active'>
                  <img src={IconAll} alt="All" />
                  <p>전체</p>
               </a>
            </Li>
            <Li>
               <Link href="#" className=''>

               <img src={IconLifestyle} alt="Lifestyle" />
                  <p>라이프스타일</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>

               <img src={IconEdu} alt="edu" />
                  <p>교육</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>

               <img src={IconAll} alt="All" />
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>

               <img src={IconAll} alt="All" />
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>

               <img src={IconAll} alt="All" />
                  <p>미디어</p>
               </Link>
            </Li>

            <Li>
               <Link href="#" className=''>

               <img src={IconAll} alt="All" />
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="#" className=''>

               <img src={IconAll} alt="All" />
                  <p>미디어</p>
               </Link>
            </Li>
         </Ul>
      </Layout>
   );
};

export default Category;