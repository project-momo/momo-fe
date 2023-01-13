import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';
import FreeDate from '../create/Date/FreeDate';
import OneDate from '../create/Date/OneDate';
import PeriodDate from '../create/Date/PeriodDate';
import TimeList from './TimeList';
interface DetailProps {
   title: string;
   price: number;
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
const ModalDetail = ({ title, dateTime, price }: DetailProps) => {
   const datePolicy = dateTime.datePolicy;
   // const [startDate, setStartDate] = useState<any>(dateTime.startDate);
   // const [endDate, setEndDate] = useState<any>(dateTime.endDate);

   // const onCheckDayWeeks = () => {
   //    console.log('week');
   //    console.log(startDate, endDate);
   // };
   const dpSetting = {
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };
   const [dates, setDates] = useState<any>('');

   const [isOnFocus, setIsFocus] = useState<number | undefined>(-1);
   const [clickTime, setClickTime] = useState<any>([-1, null]);
   const [startTime, endTime] = clickTime;
   const maxTime = 2;

   const TimeListSetting = (el: number) => {
      if (endTime === null) {
         if (startTime === -1) {
            setClickTime([el, null]);
         } else if (el > startTime && el < startTime + maxTime + 1) {
            setClickTime([clickTime[0], el]);
         } else if (el === startTime) {
            setClickTime([-1, null]);
         }
      } else {
         setClickTime([el, null]);
      }
   };
   const IsActive = (time: number) => {
      if (endTime !== null) {
         if (time > startTime && time < endTime) {
            return true;
         }
      } else {
         if (isOnFocus && startTime) {
            if (time <= isOnFocus && time > startTime && time < startTime + maxTime + 1) {
               return true;
            }
            return false;
         }
      }
   };
   const arrayList = Array(12)
      .fill(0)
      .map((_, i) => 10 + i);
   return (
      <>
         <TitleWrap>
            <Title>{title}</Title>
            <MbrPrtcp>
               {datePolicy === 'FREE'
                  ? '자유 일정을 선택해주세요.'
                  : datePolicy === 'PERIOD'
                  ? '주중 일정을 확인해주세요.'
                  : '단체 만남 1/7 (남은 자리 : 6명)'}
            </MbrPrtcp>
         </TitleWrap>
         <SelectSection>
            <SubTitle>날짜선택</SubTitle>
            {datePolicy === 'ONE_DAY' && <OneDate date={dates} setDate={setDates} dpSetting={dpSetting} />}
            {/* {datePolicy === 'PERIOD' && (
               <PeriodDate
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                  onCheckDayWeeks={onCheckDayWeeks}
                  dpSetting={dpSetting}
               />
            )} */}
            {datePolicy === 'FREE' && <FreeDate dates={dates} setDates={setDates} dpSetting={dpSetting} />}
            <SubTitle>
               시간선택 <span>* 최대 {maxTime}시간 선택 가능합니다.</span>
            </SubTitle>
            <TimeTableWrap>
               {arrayList.map((el, idx) => (
                  <TimeList
                     key={idx}
                     onMouseEnter={() => setIsFocus(el)}
                     onMouseLeave={() => setIsFocus(-1)}
                     onClick={() => TimeListSetting(el)}
                     className={
                        startTime === el ? 'startTime' : endTime === el ? 'endtime' : IsActive(el) ? 'hoveractive' : ''
                     }
                     time={`${el}:00`}
                  />
               ))}
            </TimeTableWrap>
            <Button
               size="bigBold"
               disabled={false}
               backgroundColor="#444bff"
               priceLabel={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
               label=""
            />
         </SelectSection>
      </>
   );
};

export default ModalDetail;

// const DetailWrap = styled.div`
//    min-width: 700px;
//    height: 70vh;
//    padding-bottom: 100px;
//    padding-top: 80px;
//    position: relative;
// `;
const TitleWrap = styled.div`
   padding-bottom: 10px;
   border-bottom: 1px solid #cecece;
`;
const Title = styled.p`
   font-size: 30px;
   font-weight: 700px;
   line-height: 1.5;
`;
const TimeTableWrap = styled.div`
   display: flex;
   flex-wrap: nowrap;
   max-width: 800px;
   padding: 10px 0;
   overflow-y: auto;
   margin-bottom: 30px;
   div:last-child {
      border: none;
   }
`;

const MbrPrtcp = styled.p`
   font-size: 16px;
   line-height: 1.5;
   color: #6f6f6f;
`;
const SelectSection = styled.div`
   height: calc(70vh - 180px);
   overflow-x: auto;
`;
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

const BtnWrap = styled.div`
   position: absolute;
   bottom: 0px;
   width: 100%;
   left: 0px;
`;
