import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeaderButton } from './HeaderButton';
import IconSearch from '../../..//assets/images/icon_search.svg';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
   isLogin,
   mainTagListmain,
   nowSearchText,
   searchValueAtom,
   selectCategory,
   setMoimDataArray
} from '../../../atoms/atom';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { api } from '../../../util/token';

const HeaderLayout = styled.div`
   background-color: #49515b;
   height: 55px;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 999;
`;

interface LoginProps {
   OpenModal: () => void;
}
const Header = ({ OpenModal }: LoginProps) => {
   const [isLoginState, setIsLoginState] = useRecoilState(isLogin);
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const router = useRouter();

   useEffect(() => {
      if (localStorage.getItem('RefreshToken') !== null) {
         setIsLoginState(true);
      } else {
         setIsLoginState(false);
      }
   }, []);
   const logoutFunc = async () => {
      await axios.delete(`${API_URI}/auth/token`, {
         headers: {
            RefreshToken: localStorage.getItem('AccessToken')
         }
      });
      localStorage.removeItem('AccessToken');
      localStorage.removeItem('RefreshToken');
      localStorage.removeItem('userId');
      // localStorage.clear();
      setIsLoginState(false);
      router.push('/');
   };

   const [searchIsFocus, setSearchisFocus] = useState(false);
   const [searchValue, setSearchValue] = useRecoilState(searchValueAtom);
   const [selectcategoryState, setSelectCategory] = useRecoilState(selectCategory);

   const searchValueChange = (e: any) => {
      setSearchValue(e.target.value);
   };
   const isFocusSearch = () => {
      setSearchisFocus(true);
   };
   const isBlurSearch = () => {
      setSearchisFocus(false);
   };

   const keyEventSearch = (e: any) => {
      if (e.keyCode == 13) {
         console.log('작동');
         postSearch();
      }
   };
   const searchClickBtn = () => {
      postSearch();
   };
   const setModimData = useSetRecoilState(setMoimDataArray);
   const [selectTags, setSelectTags] = useRecoilState(mainTagListmain);
   const setnowSearchText = useSetRecoilState(nowSearchText);
   const route = useRouter();
   const postSearch = async () => {
      route.push(`/search/${searchValue}`);
      setSelectCategory('search');
      setnowSearchText(searchValue);
      try {
         await api
            .get(
               `${API_URI}/meetings?&keyword=${searchValue}${
                  selectTags !== '' ? `&tag=${selectTags}` : ''
               }&page=1&size=18`
            )
            .then(el => {
               setModimData(el.data.content);
            });
      } catch (error) {
         // setError(error);
      }
   };
   const goMain = () => {
      setSelectCategory('');
      setSelectTags('');
   };
   useEffect(() => {
      if (selectcategoryState === 'search') {
         postSearch();
      }
   }, [selectTags]);
   return (
      <HeaderLayout>
         <Wrapper>
            <InnerWrapper>
               <div>
                  <Link onClick={goMain} href="/">
                     <H>Momo</H>
                  </Link>
               </div>
               <Input
                  onChange={e => searchValueChange(e)}
                  onKeyDown={e => keyEventSearch(e)}
                  value={searchValue}
                  id="Search"
                  onFocus={isFocusSearch}
                  onBlur={isBlurSearch}
               />
               {searchIsFocus || searchValue !== '' ? (
                  <FloatingSearch htmlFor="Search">
                     <FloatingSearchiconBtn onClick={searchClickBtn} className="rightBtn" background={IconSearch}>
                        search
                     </FloatingSearchiconBtn>
                  </FloatingSearch>
               ) : (
                  <FloatingSearch htmlFor="Search">
                     <FloatingSearchicon htmlFor="Search" background={IconSearch}></FloatingSearchicon>
                     <FloatingSearchLabel htmlFor="Search">검색하기</FloatingSearchLabel>
                  </FloatingSearch>
               )}

               <div>
                  {isLoginState ? (
                     <>
                        <HeaderButton onClick={() => router.push('/mypage')} label="MY" />
                        <HeaderButton onClick={logoutFunc} label="Logout" />
                     </>
                  ) : (
                     <>
                        <HeaderButton onClick={OpenModal} label="Log in" />
                     </>
                  )}
               </div>
            </InnerWrapper>
         </Wrapper>
      </HeaderLayout>
   );
};

export default Header;

const Wrapper = styled.div`
   position: fixed;
   height: 55px;
   width: 100%;
   background-color: #49515b;
   z-index: 999;
`;

const InnerWrapper = styled.div`
   max-width: 1600px;
   height: 55px;
   padding: 0 80px;
   align-items: center;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   position: relative;
   z-index: 999;
`;
const H = styled.h1`
   font-weight: 700;
   line-height: 1;
   margin: 6px 0 6px 10px;
   display: inline-block;
   vertical-align: top;
   font-size: 16px;
   color: #ececec;
`;

const FloatingSearch = styled.label`
   height: 34px;
   width: 340px;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
const FloatingSearchLabel = styled.label`
   font-size: 14px;
   color: #8b8b8b;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
`;
const Input = styled.input`
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   width: 340px;
   height: 34px;
   border-radius: 20px;
   padding: 0 15px;
   :focus {
      outline: black;
   }
   ::placeholder {
      text-align: center;
      transition: 0.3;
   }
`;
const FloatingSearchicon = styled.label<{ background: string }>`
   display: inline-block;
   width: 18px;
   height: 18px;
   background-image: url(${props => `${props.background}`});
   background-position: 100% 100%;
   background-size: cover;
   position: absolute;
   top: 50%;
   left: calc(50% - 40px);
   transform: translate(-50%, -50%);
`;
const FloatingSearchiconBtn = styled.button<{ background: string }>`
   display: inline-block;
   width: 18px;
   height: 18px;
   background-image: url(${props => `${props.background}`});
   background-position: 100% 100%;
   background-size: cover;
   position: absolute;
   top: 50%;
   right: 10px;
   transform: translate(-50%, -50%);
   font-size: 0;
`;
