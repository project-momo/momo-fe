import React from 'react';
import styled from 'styled-components';
interface TimeListProps {
   time: string;
   className: string;
   onMouseEnter: () => any;
   onMouseLeave: () => any;
   onClick: () => any;
}
const TimeList = ({ time, className, onMouseEnter, onMouseLeave, onClick }: TimeListProps) => {
   return (
      <List onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick} className={className}>
         {time}
      </List>
   );
};

export default TimeList;

const List = styled.div`
   width: 100px;
   padding: 20px;
   background-color: #ebf1f9;
   border-right: 1px solid #d9d9d9;
   text-align: center;
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
`;
