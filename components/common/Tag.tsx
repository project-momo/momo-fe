import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { mainTagList } from '../../atoms/atom';

interface TagProps {
   label: string;
   onClick?: (e: React.MouseEvent) => void;
}

export const Tag = ({ label, ...props }: TagProps) => {
   const [tags, setTags] = useRecoilState(mainTagList);

   const Toggle = () => {
      if (tags === label) {
         setTags('');
      } else {
         setTags(label);
      }

      // if (tags.includes(label)) {
      //    const newTag = tags.filter(el => el !== label);
      //    setTags(newTag);
      // } else {
      //    setTags(tags.concat(label));
      // }
   };

   const isActive = () => {
      return tags === label;
   };

   return (
      <TagCompo onClick={Toggle} className={isActive() ? 'active' : ''} {...props}>
         {label}
      </TagCompo>
   );
};

const TagCompo = styled.li`
   display: inline-block;
   font-size: 16px;
   padding: 5px 10px;
   border-radius: 30px;
   margin: 15px 10px 15px 0;
   cursor: pointer;
   transition: background-color 0.3s;
   &.active {
      background-color: #d4e6ff;
      font-weight: 700;
      color: #6a6ff2;
   }
`;
