import React from 'react';
import styled from 'styled-components';

const HeaderLayout = styled.div`
   background-color: #49515B;
   height: 55px;
   width: 100%;
   position: fixed;
   top: 0;
   left: 0;
`
const Header = () => {
   return (
      <HeaderLayout />
   );
};

export default Header;