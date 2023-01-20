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
      <Wrapper>
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
               <SubTitle>
                  날짜선택 <span>* 참여 날짜를 선택해 주세요.</span>
               </SubTitle>
               <DateFreePicker dates={dateTime.dates} />
            </>
         )}
         {/* {datePolicy === 'PERIOD' &&      <SubTitle>날짜선택</SubTitle> <FreeDate dates={dates} setDates={setDates} dpSetting={dpSetting} />} */}
      </Wrapper>
   );
};

export default DaySelect;
const Wrapper = styled.div`
   /* datepicker custom */
   .react-datepicker {
      border: none;
      border-radius: 20px;
      font-family: inherit;
      font-weight: 700;
   }
   .react-datepicker-wrapper {
      width: 240px;
   }
   .react-datepicker__header {
      background-color: #49515b;
      padding: 20px 20px 10px 20px;
      border-radius: 20px 20px 0 0;
   }
   .react-datepicker__navigation--previous {
      top: 22px;
      left: 90px;
   }
   .react-datepicker__navigation--next {
      top: 22px;
      right: 90px;
   }
   .react-datepicker__navigation-icon::before {
      border-color: white;
   }
   .react-datepicker__current-month {
      font-weight: 600;
      color: white;
   }
   .react-datepicker__day-name {
      font-size: 15px;
      color: white;
   }
   .react-datepicker__day:hover {
      background-color: #d4e6ff;
      color: black;
      border-radius: 50%;
   }
   .react-datepicker__day--disabled:hover {
      background-color: inherit;
      color: #ccc;
   }
   .react-datepicker__day--today:hover {
      color: black;
   }
   .react-datepicker__day--selected {
      background-color: #d4e6ff !important;
      color: #6a6ff2 !important;
      border-radius: 50%;
   }
   .react-datepicker__day--outside-month {
      color: #ccc;
   }
   .react-datepicker__day--keyboard-selected {
      background-color: inherit;
      color: #ccc;
   }

   .react-datepicker__day--in-range {
      background-color: #d4e6ff;
      color: black;
      border-radius: 50%;
   }
   .react-datepicker__day--in-selecting-range {
      background-color: #d4e6ff;
      color: black;
      border-radius: 50%;
   }

   .react-datepicker__day--highlighted {
      background-color: #d4e6ff;
      color: #6a6ff2;
      border-radius: 50%;
   }

   .react-datepicker__time-container,
   .react-datepicker__time-box {
      width: 240px !important;
      border: 1px solid #f5f5f5;
   }
   .react-datepicker__header--time {
      padding: 10px 20px;
   }
   .react-datepicker__header--time {
      background-color: #49515b;
   }
   .react-datepicker-time__header {
      color: white;
      font-weight: 500;
   }
   .react-datepicker__time-list {
      /* scroll */
      &::-webkit-scrollbar {
         width: 10px;
      }
      &::-webkit-scrollbar-thumb {
         background-color: #dfdfdf;
         border-radius: 10px;
         background-clip: padding-box;
         border: 2px solid transparent;
      }
      &::-webkit-scrollbar-track {
         background-color: #f5f5f5;
         border-radius: 10px;
         box-shadow: inset 0px 0px 5px white;
      }
   }
   .react-datepicker__time-list-item {
      display: flex;
      justify-content: center;
      align-items: center;
   }
   .react-datepicker__time-list-item:hover {
      background-color: #f5f5f5 !important;
   }
   .react-datepicker__time-list-item--selected,
   .react-datepicker__time-list-item--selected:hover {
      background-color: #d4e6ff !important;
      color: black !important;
      font-weight: 500 !important;
   }
   .react-datepicker__inputDiv-container,
   .react-datepicker__input-container input {
      background-color: #f5f5f5;
      border-radius: 15px;
      width: 100%;
      padding: 12px 20px;
      border: none;
      outline: none;
      transition: outline 0.1s;
      :focus {
         outline: 2px solid #9093f3;
      }
      cursor: pointer;
   }
`;
const SubTitle = styled.p`
   font-size: 16px;
   font-weight: 700;
   margin-top: 24px;
   margin-bottom: 15px;
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
