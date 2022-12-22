import React from 'react';

import { HeaderButton } from './HeaderButton';
import styles from './header.module.css';

interface HeaderProps {
  user?: boolean;
  onLogin: () => void;
  goMypage: () => void;
}
const searchFocus = (e : any) => {
e.target.placeholder = ''
}
const searchBlur = (e : any) => {
e.target.placeholder = '검색하기'
}
export const Header = ({ user, onLogin, goMypage }: HeaderProps) => {
  return (
  <header>
    <div className={styles.wrapper}>
      <div className={styles.innerWrapper}> 
        <div>
          <h1 className={styles.h1}>웹사이트 이름</h1>
        </div>
        <div className={styles.floatingSearch}>
          <div id='searchIcon' className={styles.floatingSearchicon}></div>
          <input className={styles.input} onBlur={(e)=>searchBlur(e)} onFocus={(e)=>searchFocus(e)} placeholder='검색하기'/>
        </div>
        <div >
          {user ? (
            <>
              <HeaderButton onClick={goMypage} label="MY" />
            </>
          ) : (
            <>
              <HeaderButton  onClick={onLogin} label="Log in" />
            </>
          )}
        </div>
      </div>
     
    </div>
  </header>
  );
};
