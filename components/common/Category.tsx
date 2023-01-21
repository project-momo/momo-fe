import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import IconAll from './../../assets/images/icon_all.svg';
import IconLifestyle from './../../assets/images/icon_lifestyle.svg';
import IconEdu from './../../assets/images/icon_edu.svg';
import IconMedia from './../../assets/images/icon_media.svg';
import { useRouter } from 'next/router';
import Image from 'next/image';

export const Layout = styled.div`
   width: 277px;
   margin: 20px;
`;
export const Ul = styled.ul`
   padding: 30px 18px;
   width: 277px;
   background-color: white;
   height: fit-content;
   border-radius: 15px;
   box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);
   overflow-y: auto;
   position: fixed;
`;
export const Li = styled.li`
   a {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 50px;
      cursor: pointer;
   }
   a.active {
      background-color: #ecf4ff;
   }
   a p {
      font-size: 16px;
      font-weight: 700;
      padding-left: 9px;
   }
`;

export const Category = () => {
   const { query } = useRouter();
   const isActive = (now: string | undefined) => {
      return now === query.category ? true : false;
   };
   return (
      <Layout>
         <Ul>
            <Li>
               <Link href="/" className={isActive(undefined) ? 'active' : ''}>
                  <Image src={IconAll} alt="All" />
                  <p>전체</p>
               </Link>
            </Li>
            <Li>
               <Link href="/LIFESTYLE" className={isActive('LIFESTYLE') ? 'active' : ''}>
                  <Image src={IconLifestyle} alt="Lifestyle" />
                  <p>라이프스타일</p>
               </Link>
            </Li>
            <Li>
               <Link href="/EDU" className={isActive('EDU') ? 'active' : ''}>
                  {' '}
                  <Image src={IconEdu} alt="edu" />
                  <p>교육</p>
               </Link>
            </Li>
            <Li>
               <Link href="/MEDIA" className={isActive('MEDIA') ? 'active' : ''}>
                  {' '}
                  <Image src={IconMedia} alt="MEDIA" />
                  <p>미디어</p>
               </Link>
            </Li>
            <Li>
               <Link href="/DEVELOP" className={isActive('DEVELOP') ? 'active' : ''}>
                  <Image src={IconAll} alt="DEVELOP" />
                  <p>개발</p>
               </Link>
            </Li>
            <Li>
               <Link href="/FINANCE" className={isActive('FINANCE') ? 'active' : ''}>
                  <Image src={IconAll} alt="FINANCE" />
                  <p>금융</p>
               </Link>
            </Li>
            <Li>
               <Link href="/SOCIAL" className={isActive('SOCIAL') ? 'active' : ''}>
                  <Image src={IconAll} alt="SOCIAL" />
                  <p>소셜</p>
               </Link>
            </Li>
            <Li>
               <Link href="/AI" className={isActive('AI') ? 'active' : ''}>
                  <Image src={IconAll} alt="AI" />
                  <p>AI</p>
               </Link>
            </Li>
         </Ul>
      </Layout>
   );
};

export default Category;
