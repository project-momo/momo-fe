import React from 'react';

import { HeaderButton } from './HeaderButton';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  goMypage: () => void;
}

export const Header = ({ user, onLogin, goMypage }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div className='innerWrapper'> 
        <div>
          <h1>웹사이트 이름</h1>
        </div>
        <div className='floatingSearch'><input placeholder=''></input></div>
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
