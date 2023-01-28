import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { api } from '../../util/token';
import { Button } from '../common/Button';
import FreeDate from '../create/Date/FreeDate';
import OneDate from '../create/Date/OneDate';
import PeriodDate from '../create/Date/PeriodDate';
import DaySelect from './DaySelect';
import TimeList from './TimeList';
interface DetailProps {
   title: string;
   price: number;
   meetingId: number;
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
const ModalDetail = ({ title, dateTime, price, meetingId }: DetailProps) => {
   const datePolicy = dateTime.datePolicy;

   const startNum = +dateTime.startTime.split(':')[0];
   const endNum = +dateTime.endTime.split(':')[0];
   const arrayList = Array(endNum - startNum + 1)
      .fill(0)
      .map((_, i) => startNum + i);
   const dpSetting = {
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };
   const [dates, setDates] = useState<any>('');

   const [isOnFocus, setIsFocus] = useState<number | undefined>(-1);
   const [clickTime, setClickTime] = useState<any>([-1, null]);
   const [startTimeSet, endTimeSet] = clickTime;

   const TimeListSetting = (el: number) => {
      if (endTimeSet === null) {
         if (startTimeSet === -1) {
            setClickTime([el, null]);
         } else if (el > startTimeSet && el < startTimeSet + dateTime.maxTime) {
            setClickTime([clickTime[0], el]);
         } else if (el === startTimeSet) {
            setClickTime([-1, null]);
         }
      } else {
         setClickTime([el, null]);
      }
   };
   const IsActive = (time: number) => {
      if (endTimeSet !== null) {
         if (time > startTimeSet && time < endTimeSet) {
            return true;
         }
      } else {
         if (isOnFocus && startTimeSet) {
            if (time <= isOnFocus && time > startTimeSet && time < startTimeSet + dateTime.maxTime) {
               return true;
            }
            return false;
         }
      }
   };

   const [oneDayPersonal, setOndayPersonal] = useState<number[]>([0, 0]);
   useEffect(() => {
      if (datePolicy === 'ONE_DAY') {
         api.get(`/meetings/${meetingId}/reservations/dates/${dateTime.startDate}`)
            .then(el => {
               console.log(el);
               setOndayPersonal([el.data[0].currentStaff, el.data[0].personnel]);
            })
            .catch(err => console.log('error', err));
      }
   }, []);

   return (
      <>
         <TitleWrap>
            <Title>{title}</Title>
            <MbrPrtcp>
               {datePolicy === 'FREE'
                  ? '자유 일정을 선택해주세요.'
                  : datePolicy === 'PERIOD'
                  ? '주중 일정을 확인해주세요.'
                  : datePolicy === 'ONE_DAY' && oneDayPersonal[1] === 1
                  ? '일정을 확인 해 주세요'
                  : `단체 만남 ${oneDayPersonal[0]}/${oneDayPersonal[1]} (남은 자리 : ${
                       oneDayPersonal[1] - oneDayPersonal[0]
                    }명)`}
            </MbrPrtcp>
         </TitleWrap>
         <SelectSection>
            <DaySelect meetingId={meetingId} datePolicy={datePolicy} dateTime={dateTime} />
            <SubTitle>
               모임 시간{' '}
               {datePolicy === 'FREE' && (
                  <>
                     선택 <span>* 최대 {dateTime.maxTime}시간 선택 가능합니다.</span>
                  </>
               )}
               {datePolicy === 'ONE_DAY' && (
                  <>
                     <br />
                     {startNum}:00 ~ {endNum}:00
                  </>
               )}
            </SubTitle>
            {
               datePolicy === 'FREE' && (
                  <TimeTableWrap>
                     {arrayList.map((el, idx) => (
                        <TimeList
                           key={idx}
                           onMouseEnter={() => setIsFocus(el)}
                           onMouseLeave={() => setIsFocus(-1)}
                           onClick={() => TimeListSetting(el)}
                           className={
                              startTimeSet === el
                                 ? 'startTime'
                                 : endTimeSet === el
                                 ? 'endtime'
                                 : IsActive(el)
                                 ? 'hoveractive'
                                 : ''
                           }
                           time={el}
                        />
                     ))}
                  </TimeTableWrap>
               )
               // /meetings/1/reservations/dates/2022-01-01
            }
            <BtnPosition>
               <Button
                  size="bigBold"
                  disabled={false}
                  backgroundColor="#444bff"
                  priceLabel={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  label=""
               />
            </BtnPosition>
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
   position: relative;
   padding-bottom: 90px;
`;

const BtnPosition = styled.div`
   position: absolute;
   width: 100%;
   bottom: 0px;
   left: 0px;
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
