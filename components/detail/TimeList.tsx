import React from 'react';
import styled from 'styled-components';
interface TimeListProps {
   time: number;
   className: string;
   onMouseEnter: () => any;
   onMouseLeave: () => any;
   onClick: () => any;
}
const TimeList = ({ time, className, onMouseEnter, onMouseLeave, onClick }: TimeListProps) => {
   return (
      <List onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={className}>
         {time} : 00 ~ <br /> {time + 1} : 00
      </List>
   );
};

export default TimeList;

const List = styled.div`
   padding: 15px 35px;
   line-height: 1.5;
   background-color: #ebf1f9;
   border-right: 1px solid #d9d9d9;
   text-align: center;
   cursor: pointer;
   white-space: nowrap;
   &.startTime {
      background-color: #78aaff;
      color: white;
   }
   &.endtime {
      background-color: #78aaff;
      color: white;
   }
   &.hoveractive {
      background-color: #b4cfff;
      color: #052253;
   }
   &.disabled {
      background-color: #d9d9d9;
      color: #979797;
   }
`;
