import React from 'react';
import styled from 'styled-components';
import IconAll from './../../assets/images/icon_all.svg';
import IconLifestyle from './../../assets/images/icon_lifestyle.svg';
import IconEdu from './../../assets/images/icon_edu.svg';
import IconMedia from './../../assets/images/icon_media.svg';
import IconDevelop from './../../assets/images/icon_develop.svg';
import IconFinance from './../../assets/images/icon_finance.svg';
import IconAi from './../../assets/images/icon_ai.svg';
import IconSocial from './../../assets/images/icon_social.svg';
import { useRecoilState } from 'recoil';
import { selectCategory } from '../../atoms/atom';
import { useRouter } from 'next/router';

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
   const [nowCategoryState, setNowCategoryState] = useRecoilState(selectCategory);
   const isActive = (now: string | undefined) => {
      return now === nowCategoryState ? true : false;
   };
   const route = useRouter();
   const categoryMoveOnClick = (label: string) => {
      if (window) {
         if (window.location.pathname !== '/') {
            route.push('/');
         }
      }
      setNowCategoryState(label);
   };
   return (
      <Layout>
         <Ul>
            <Li>
               <button onClick={() => categoryMoveOnClick('')} className={isActive('') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAll} alt="All" />
                  <p>전체</p>
               </button>
            </Li>
            <Li>
               <button
                  onClick={() => categoryMoveOnClick('LIFESTYLE')}
                  className={isActive('LIFESTYLE') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconLifestyle} alt="Lifestyle" />
                  <p>라이프스타일</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => categoryMoveOnClick('EDU')} className={isActive('EDU') ? 'active' : ''}>
                  {' '}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconEdu} alt="edu" />
                  <p>교육</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => categoryMoveOnClick('MEDIA')} className={isActive('MEDIA') ? 'active' : ''}>
                  {' '}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconMedia} alt="MEDIA" />
                  <p>미디어</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => categoryMoveOnClick('DEVELOP')} className={isActive('DEVELOP') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconDevelop} alt="DEVELOP" />
                  <p>개발</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => categoryMoveOnClick('FINANCE')} className={isActive('FINANCE') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconFinance} alt="FINANCE" />
                  <p>금융</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => categoryMoveOnClick('SOCIAL')} className={isActive('SOCIAL') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconSocial} alt="SOCIAL" />
                  <p>소셜</p>
               </button>
            </Li>
            <Li>
               <button onClick={() => categoryMoveOnClick('AI')} className={isActive('AI') ? 'active' : ''}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={IconAi} alt="AI" />
                  <p>인공지능</p>
               </button>
            </Li>
         </Ul>
      </Layout>
   );
};

export default Category;
