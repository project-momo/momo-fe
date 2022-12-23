import React from 'react';
import styled from 'styled-components';

interface TagProps {
   active : boolean
   label : string
} 
export const Tag = ({
   active = false,
   label
}:TagProps) => {
   return (
      <TagCompo className={active ? 'active' : ''} >
         {label}
      </TagCompo>
   );
};

const TagCompo = styled.li`
display: inline-block;
   font-size: 16px;
   padding : 5px 10px;
   margin-right: 10px;
   border-radius: 30px;
   cursor: pointer;
   &.active{
      background-color: #D4E6FF;
      font-weight: 700;
      color : #6A6FF2;
   }
`