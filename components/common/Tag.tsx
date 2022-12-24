import React, { useState } from 'react';
import styled from 'styled-components';

interface TagProps {
   label : string
   onClick?: () => void;
} 

export const Tag = ({
   label,
   ...props
}:TagProps) => {
   const [active, setActive] = useState(false)
   const Toggle = () => {
      setActive(!active)
   }
   return (
      <TagCompo onClick={Toggle} className={active ? 'active' : ''} {...props} >
         {label}
      </TagCompo>
   );
};

const TagCompo = styled.li`
display: inline-block;
   font-size: 16px;
   padding : 5px 10px;
   border-radius: 30px;
   margin: 30px 10px 15px 0;
   cursor: pointer;
   transition:background-color 0.3s;
   &.active{
      background-color: #D4E6FF;
      font-weight: 700;
      color : #6A6FF2;
   }
`