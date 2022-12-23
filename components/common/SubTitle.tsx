import React from 'react';
import styled from 'styled-components';
interface SubTitleProps {
   label: string;
   labelMore: string
 }

 const Text = styled.p`
 font-size: 16px;
 font-weight: 700;
 margin-bottom: 5px;
 span{
    font-size: 14px;
    font-weight: 400;
    margin-left: 8px;
 }
`
export const SubTitle = ({
   label, labelMore
}:SubTitleProps) => {
   return (
      <>
            <Text>{label} <span>{labelMore}</span></Text>
      </>
   );
};
