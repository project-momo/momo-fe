import React from 'react';
import styled from 'styled-components';
import { SubTitle } from './SubTitle';
interface InputProps {
   label: string;
   placeholder : string;
   labelMore: string
 }

 const InputCompo = styled.input`
   background-color: #F0F0F0;
   border-radius: 10px;
   border: none;
   height: 45px;
   width: 100%;
   padding: 0 16px;
   ::placeholder {
      font-size: 14px;
   }
 `
export const Input = ({
   placeholder,
   label,
   labelMore
}:InputProps) => {
   return (
      <>
         <SubTitle label={label} labelMore={labelMore}/>
        <InputCompo placeholder={placeholder}/>
      </>
   );
};