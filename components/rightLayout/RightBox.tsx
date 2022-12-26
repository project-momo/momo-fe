import React, { Children } from 'react';
import styled from 'styled-components';
import { RightSubTitle } from './RightSubTitle';
interface RightBoxProps {
  label: string;
  imgLink: string;
  children: React.ReactNode;
}
export const RightBox = ({ label, imgLink, children }: RightBoxProps) => {
  return (
    <Wrap>
      <RightSubTitle label={label} imgLink={imgLink} />
      <Box>{children}</Box>
    </Wrap>
  );
};
const Wrap = styled.div`
  margin-top: 26px;
`;
const Box = styled.div`
  background-color: white;
  width: 270px;
  box-shadow: 0px 1px 10px rgba(68, 75, 255, 0.15);
  border-radius: 15px;
  padding: 18px;
`;
