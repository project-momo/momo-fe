import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { isLogin } from '../../atoms/atom';
import { api } from '../../util/token';
import { Button } from '../common/Button';
// import FreeDate from '../create/Date/FreeDate';
// import OneDate from '../create/Date/OneDate';
// import PeriodDate from '../create/Date/PeriodDate';
import DaySelect from './DaySelect';
import TimeList from './TimeList';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import axios from 'axios';

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
   setIsModalOpen: any;
}
const ModalDetail = ({ title, dateTime, price, meetingId, setIsModalOpen }: DetailProps) => {
   const datePolicy = dateTime.datePolicy;
   const isLoginState = useRecoilValue(isLogin);

   const startNum = +dateTime.startTime.split(':')[0];
   const endNum = +dateTime.endTime.split(':')[0];
   const arrayList = Array(endNum - startNum + 1)
      .fill(0)
      .map((_, i) => startNum + i);
   // const dpSetting = {
   //    dateFormat: 'yyyy-MM-dd',
   //    dateFormatCalendar: 'yyyy.MM',
   //    withPortal: true
   // };
   // const [dates, setDates] = useState<any>('');

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
      if (datePolicy === 'ONE_DAY' || datePolicy === 'PERIOD') {
         api.get(`/meetings/${meetingId}/reservations/dates/${dateTime.startDate}`).then((el: any) => {
            console.log(el);
            if (el) {
               setOndayPersonal([el.data[0].currentStaff, el.data[0].personnel]);
            }
         });
      }
   }, []);

   const [memoState, setMemoState] = useState('');

   const MemoChange = (e: any) => {
      setMemoState(e.target.value);
   };

   const submitMoim = async () => {
      const API_URI = process.env.NEXT_PUBLIC_API_URI;
      const clientKey: any = process.env.NEXT_PUBLIC_CLIENT_KEY;
      const tossPayments = await loadTossPayments(clientKey);

      if (!isLoginState) {
         alert('로그인을 진행해주세요');
      } else {
         // const res = await axios
         //    .post(API_URI + `/meetings/${meetingId}/reservations`, {
         //       dateInfo: {
         //          reservationDate: dateTime.startDate,
         //          startTime: dateTime.startTime,
         //          endTime: dateTime.endTime
         //       },
         //       amount: price,
         //       reservationMemo: memoState
         //    })
         //    .then(res => {
         //       console.log('예약 진행 후 결과 : ', res);
         //    })
         //    .catch(e => alert(e.response.data.message));

         axios
            .post(API_URI + `/meetings/${meetingId}/reservations`, {
               dateInfo: {
                  reservationDate: dateTime.startDate,
                  startTime: dateTime.startTime,
                  endTime: dateTime.endTime
               },
               amount: price,
               reservationMemo: memoState
            })
            .then(res => {
               if (res.status === 201 && res.data.amount > 0) {
                  console.log('유료 예약 성공시 : ', res);
                  // const fetchData = {
                  //    ...res.data,
                  //    successUrl: 'https://momo-fe-two.vercel.app/payments/success',
                  //    failUrl: 'https://momo-fe-two.vercel.app/payments/fail'
                  // };
                  tossPayments.requestPayment('카드', res.data).catch(function (error) {
                     if (error.code === 'USER_CANCEL') {
                        // 결제 고객이 결제창을 닫았을 때 에러 처리
                        alert('결제가 취소되었습니다.');
                     } else if (error.code === 'INVALID_CARD_COMPANY') {
                        // 유효하지 않은 카드 코드에 대한 에러 처리
                        alert('유효하지 않은 카드입니다.');
                     }
                  });
               } else {
                  console.log('무료 예약 성공시 : ', res);
                  alert('예약이 완료되었습니다!');
                  setIsModalOpen(false);
               }
            })
            .catch(e => alert(e.response.data.message));

         // if (res !== undefined) {
         //    if (res.status === 201 && res.data.amount > 0) {
         //       // const fetchData = {
         //       //    ...res.data,
         //       //    successUrl: 'http://localhost:3000/payments/success',
         //       //    failUrl: 'http://localhost:3000/payments/failed'
         //       // };

         //       tossPayments.requestPayment('카드', res.data).catch(function (error) {
         //          if (error.code === 'USER_CANCEL') {
         //             // 결제 고객이 결제창을 닫았을 때 에러 처리
         //             alert('결제가 취소되었습니다.');
         //          } else if (error.code === 'INVALID_CARD_COMPANY') {
         //             // 유효하지 않은 카드 코드에 대한 에러 처리
         //             alert('유효하지 않은 카드입니다.');
         //          }
         //       });
         //    } else {
         //       alert('예약이 완료되었습니다!');
         //       setIsModalOpen(false);
         //    }
         // }
      }
   };

   return (
      <>
         <TitleWrap>
            <Title>{title}</Title>
            <MbrPrtcp>
               {datePolicy === 'FREE'
                  ? '자유 일정을 선택해주세요.'
                  : datePolicy === 'PERIOD' && oneDayPersonal[1] === 1
                  ? `주중 일정을 확인해주세요.`
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
               {datePolicy === 'PERIOD' && (
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
            <Memo>
               메모를 입력해주세요
               <textarea onChange={e => MemoChange(e)} value={memoState} />
            </Memo>
            {datePolicy === 'FREE' ? (
               <BtnPosition>
                  <Button
                     size="bigBold"
                     disabled={false}
                     backgroundColor="#444bff"
                     priceLabel={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                     label=""
                     onClick={submitMoim}
                  />
               </BtnPosition>
            ) : (
               <BtnPosition>
                  <Button
                     size="bigBold"
                     backgroundColor="#444bff"
                     priceLabel={price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                     label=""
                     onClick={submitMoim}
                     // eslint-disable-next-line react/jsx-no-duplicate-props
                     disabled={oneDayPersonal[1] - oneDayPersonal[0] === 0}
                  />
               </BtnPosition>
            )}
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
const Memo = styled.div`
   width: 100%;
   textarea {
      width: 100%;
      background-color: #f0f0f0;
      border-radius: 10px;
      border: none;
      height: 84px;
      font-size: 15px;
      padding: 16px 20px;
   }
   textarea:focus {
      outline: 2px solid #9093f3;
   }
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

// const BtnWrap = styled.div`
//    position: absolute;
//    bottom: 0px;
//    width: 100%;
//    left: 0px;
// `;
