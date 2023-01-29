import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import IconAll from './../../assets/images/icon_all.svg';
import IconLifestyle from './../../assets/images/icon_lifestyle.svg';
import IconEdu from './../../assets/images/icon_edu.svg';
import IconMedia from './../../assets/images/icon_media.svg';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { selectCategory } from '../../atoms/atom';

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
   button,
   a {
      display: flex;
      align-items: center;
      padding: 10px 20px;
      border-radius: 50px;
      cursor: pointer;
   }
   button.active,
   a.active {
      background-color: #ecf4ff;
   }
   button p,
   a p {
      font-size: 16px;
      font-weight: 700;
      padding-left: 9px;
   }
`;

export const Category = () => {
   const { query } = useRouter();
   const [nowCategoryState, setNowCategoryState] = useRecoilState(selectCategory);
   const isActive = (now: string | undefined) => {
      return now === nowCategoryState ? true : false;
   };
   return (
      <Layout>
         <Ul>
            <Li>
               <button onClick={() => setNowCategoryState('')} className={isActive('') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAll} alt="All" />
                  <p>전체</p>
               </button>
            </Li>
            <Li>
               <button
                  onClick={() => setNowCategoryState('LIFESTYLE')}
                  className={isActive('LIFESTYLE') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconLifestyle} alt="Lifestyle" />
                  <p>라이프스타일</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => setNowCategoryState('EDU')} className={isActive('EDU') ? 'active' : ''}>
                  {' '}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconEdu} alt="edu" />
                  <p>교육</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => setNowCategoryState('MEDIA')} className={isActive('MEDIA') ? 'active' : ''}>
                  {' '}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconMedia} alt="MEDIA" />
                  <p>미디어</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => setNowCategoryState('DEVELOP')} className={isActive('DEVELOP') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAll} alt="DEVELOP" />
                  <p>개발</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => setNowCategoryState('FINANCE')} className={isActive('FINANCE') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAll} alt="FINANCE" />
                  <p>금융</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => setNowCategoryState('SOCIAL')} className={isActive('SOCIAL') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAll} alt="SOCIAL" />
                  <p>소셜</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => setNowCategoryState('AI')} className={isActive('AI') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAll} alt="AI" />
                  <p>AI</p>
               </button>
            </Li>
         </Ul>
      </Layout>
   );
};

export default Category;
