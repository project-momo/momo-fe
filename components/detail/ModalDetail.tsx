import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../common/Button';
import { label } from '../common/Header/HeaderButton.stories';
import FreeDate from '../create/Date/FreeDate';
import OneDate from '../create/Date/OneDate';
import PeriodDate from '../create/Date/PeriodDate';
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
   const [startDate, setStartDate] = useState<any>(dateTime.startDate);
   const [endDate, setEndDate] = useState<any>(dateTime.endDate);

   const onCheckDayWeeks = () => {
      console.log('week');
      console.log(startDate, endDate);
   };
   const dpSetting = {
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };
   const [dates, setDates] = useState<any>('');
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
            {/* {datePolicy === 'ONE_DAY' && <OneDate date={date} setDate={setDate} dpSetting={dpSetting} />} */}
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
            {/* <SubTitle>시간선택</SubTitle>
            <TimeTable>
               <TimeList>
                  <span>10:00</span>
               </TimeList>
               <TimeList>
                  <span>11:00</span>
               </TimeList>
               <TimeList>
                  <span>12:00</span>
               </TimeList>
               <TimeList>
                  <span>13:00</span>
               </TimeList>
            </TimeTable> */}
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

const DetailWrap = styled.div`
   min-width: 700px;
   height: 70vh;
   padding-bottom: 100px;
   padding-top: 80px;
   position: relative;
`;
const TitleWrap = styled.div`
   padding-bottom: 10px;
   border-bottom: 1px solid #cecece;
`;
const Title = styled.p`
   font-size: 30px;
   font-weight: 700px;
   line-height: 1.5;
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
`;

const TimeTable = styled.div``;
const TimeList = styled.div``;
const BtnWrap = styled.div`
   position: absolute;
   bottom: 0px;
   width: 100%;
   left: 0px;
`;
