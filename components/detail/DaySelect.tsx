import React from 'react';
import styled from 'styled-components';
import DateFreePicker from './DatePicker/DateFreePicker';
interface SelectProps {
   datePolicy: string;
   dateTime: {
      datePolicy: string;
      startDate: Date;
      endDate: Date;
      startTime: string;
      endTime: string;
      maxTime: number;
      dayWeeks: [];
      dates: string[];
   };
}
const DaySelect = ({ datePolicy, dateTime }: SelectProps) => {
   const [year, month, date] = dateTime.startDate.toString().split('-');
   return (
      <>
         {datePolicy === 'ONE_DAY' ? (
            <OneDayText>
               모임 날짜 <br />
               <span>
                  {year}년 {month}월 {date}일
               </span>
            </OneDayText>
         ) : (
            ''
         )}

         {datePolicy === 'FREE' && (
            <>
               <SubTitle>날짜선택</SubTitle>
               <DateFreePicker dates={dateTime.dates} />
            </>
         )}
         {/* {datePolicy === 'PERIOD' &&      <SubTitle>날짜선택</SubTitle> <FreeDate dates={dates} setDates={setDates} dpSetting={dpSetting} />} */}
      </>
   );
};

export default DaySelect;
const SubTitle = styled.p`
   font-size: 16px;
   font-weight: 700;
   margin-top: 24px;
   span {
      font-weight: 400;
      padding-left: 15px;
      font-size: 12px;
      opacity: 0.8;
   }
`;
const OneDayText = styled.p`
   font-weight: 700;
   margin-top: 14px;
   font-size: 20px;
   span {
      font-weight: 400;
   }
`;
