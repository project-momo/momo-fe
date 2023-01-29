import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
   label: string;
   marginBottom?: string;
}

interface TitleProps {
   marginBottom?: string;
}

const TitleText = styled.p<TitleProps>`
   font-size: 40px;
   font-weight: 700;
   margin-bottom: ${props => props.marginBottom};
`;
export const Title = ({ label, marginBottom }: ButtonProps) => {
   return <TitleText marginBottom={marginBottom}>{label}</TitleText>;
};
