import React from 'react';
import styled from 'styled-components';
import { Img } from '../common/Category';
interface RightSubTitleProps {
   label: string;
   imgLink: string;
}
export const RightSubTitle = ({ label, imgLink }: RightSubTitleProps) => {
   return (
      <div>
         <Text>
            <Img src={imgLink} alt={'SubtitleImg'} />
            {label}
         </Text>
      </div>
   );
};
const Text = styled.p`
   font-size: 16px;
   font-weight: 700;
   margin-bottom: 10px;
   display: flex;
   align-items: center;
   img {
      margin-left: 2px;
      margin-right: 5px;
   }
`;
