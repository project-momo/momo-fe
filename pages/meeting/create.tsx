import styled from 'styled-components';
import { useEffect, useState, useCallback } from 'react';
import { Title } from '../../components/common/Title';
import { CenterSection } from '../../styles/style';
import Categorys from '../../components/create/Categorys';
import Tags from '../../components/create/Tags';
import OneDate from '../../components/create/Date/OneDate';
import PeriodDate from '../../components/create/Date/PeriodDate';
import DateRadio from '../../components/create/Date/DateRadio';
import FreeDate from '../../components/create/Date/FreeDate';
import Time from '../../components/create/Time';
import Price from '../../components/create/Price';
import LiTitle from '../../components/create/LiTitle';
import axios from 'axios';

// date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Location from '../../components/create/Location';
import { Button } from '../../components/common/Button';
import { ko } from 'date-fns/esm/locale';

const Create = () => {
   const [category, setCategory] = useState('LIFESTYLE');
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [tags, setTags] = useState<string[]>([]);
   const [maxTime, setMaxTime] = useState(1);
   const [personnel, setPersonnel] = useState(1);
   const [price, setPrice] = useState(0);

   const [location1, setLocaton1] = useState('');
   const [location2, setLocaton2] = useState<string[]>([]);
   const [addressIds, setAddressIds] = useState<string[]>([]);
   const [addressInfo, setAddressInfo] = useState('');

   const [datePolicy, setDatePolicy] = useState('ONE_DAY');
   const [date, setDate] = useState<any>(new Date());
   const [startDate, setStartDate] = useState<any>(new Date());
   const [endDate, setEndDate] = useState<any>(startDate);
   const [dayWeeks, setDayWeeks] = useState<number[]>([]);
   const [dates, setDates] = useState([]);

   const [startTime, setStartTime] = useState<any>(new Date().setHours(0, 0, 0, 0));
   const [endTime, setEndTime] = useState<any>(new Date().setHours(0, 0, 0, 0));

   const [categoryError, setCategoryError] = useState('');
   const [titleError, setTitleError] = useState('');
   const [contentError, setContentError] = useState('');
   const [tagError, setTagError] = useState('');
   const [addressIdsError, setAddressIdsError] = useState('');
   const [addressInfoError, setAddressInfoError] = useState('');
   const [dateError, setDateError] = useState('');
   const [timeError, setTimeError] = useState('');
   const [maxTimeError, setMaxTimeError] = useState('');
   const [personnelError, setPersonnelError] = useState('');
   const [priceError, setPriceError] = useState('');

   const onClickTag = (value: string) => {
      if (tags.includes(value)) {
         setTags([...tags.filter(tag => tag !== value)]);
      } else {
         setTags([...tags, value]);
      }
   };

   const onClickLocation1 = (value: string) => {
      setLocaton1(value);
      setLocaton2([]);
   };

   const onClickLocation2 = (value: string) => {
      if (location2.includes(value)) {
         setLocaton2([...location2.filter(el => el !== value)]);
         setAddressIds([...addressIds.filter(el => el.slice(3) !== value)]);
      } else {
         if (addressIds.length >= 3) {
            alert('최대 3개까지 선택이 가능 합니다.');
            return;
         }

         setLocaton2([...location2, value]);
         setAddressIds([...addressIds, `${location1} ${value}`]);
      }
   };

   const onCheckDayWeeks = (checkedDayWeeks: number) => {
      if (dayWeeks.includes(checkedDayWeeks)) {
         setDayWeeks([...dayWeeks.filter(dayWeek => dayWeek !== checkedDayWeeks)]);
      } else {
         setDayWeeks([...dayWeeks, checkedDayWeeks]);
      }
   };

   const dpSetting = {
      locale: ko,
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };

   const data = {
      category,
      title,
      content,
      tags,
      // locations: { addressIds, addressInfo },
      address: { addressIds: [1], addressInfo },
      personnel: datePolicy === 'FREE' ? 1 : personnel,
      price,
      dateTime: {
         datePolicy,
         startDate:
            datePolicy === 'ONE_DAY' || datePolicy === 'PERIOD'
               ? datePolicy === 'ONE_DAY'
                  ? new Date(date).toISOString().slice(0, 10)
                  : new Date(startDate).toISOString().slice(0, 10)
               : dates
                    .map(date => new Date(date).toISOString().slice(0, 10))
                    .sort((a, b) => Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')))[0],
         endDate:
            datePolicy === 'ONE_DAY' || datePolicy === 'PERIOD'
               ? datePolicy === 'ONE_DAY'
                  ? new Date(date).toISOString().slice(0, 10)
                  : new Date(endDate).toISOString().slice(0, 10)
               : dates
                    .map(date => new Date(date).toISOString().slice(0, 10))
                    .sort((a, b) => Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')))[dates.length - 1],
         startTime: new Date(startTime).toTimeString().slice(0, 8),
         endTime: new Date(endTime).toTimeString().slice(0, 8),
         dayWeeks: dayWeeks.sort((a, b) => a - b),
         dates: dates
            .map(date => new Date(date).toISOString().slice(0, 10))
            .sort((a, b) => Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', ''))),
         maxTime
      }
   };

   const checkError = () => {
      setCategoryError('');
      setTitleError('');
      setContentError('');
      setTagError('');
      setAddressIdsError('');
      setAddressInfoError('');
      setDateError('');
      setTimeError('');
      setMaxTimeError('');
      setPersonnelError('');
      setPriceError('');

      if (category === '') {
         setCategoryError('카테고리를 선택해주세요.');
      } else if (title === '') {
         setTitleError('제목을 입력해주세요.');
      } else if (content === '') {
         setContentError('내용을 입력해주세요.');
      } else if (tags.length < 1) {
         setTagError('1개 이상 선택해주세요.');
      } else if (addressIds.length < 1) {
         setAddressIdsError('1개 이상 선택해주세요.');
      } else if (addressInfo === '') {
         setAddressInfoError('추가 주소를 입력해주세요.');
      } else if (datePolicy === 'ONE_DAY' && date === '') {
         setDateError('날짜를 선택해주세요.');
      } else if (datePolicy === 'PERIOD') {
         if (startDate === '' || endDate === '') {
            setDateError('날짜를 선택해주세요.');
         } else if (startDate === endDate) {
            setDateError('시작/종료 날짜가 동일합니다.');
         } else if (dayWeeks.length < 1) {
            setDateError('요일을 1개 이상 선택해주세요.');
         }
      } else if (datePolicy === 'FREE' && dates.length < 1) {
         setDateError('날짜를 1개 이상 선택해주세요.');
      } else if (startTime === '' || endTime === '') {
         setTimeError('시간을 선택해주세요.');
      } else if (startTime === endTime) {
         setTimeError('시작/종료 시간이 동일합니다.');
      } else if (maxTime < 1) {
         setMaxTimeError('1시간 이상 입력해주세요.');
      } else if (personnel < 1) {
         setPersonnelError('1명 이상 입력해주세요.');
      } else if (price < 0) {
         setPriceError('0원 이상 입력해주세요.');
      } else {
         return false;
      }

      return true;
   };

   const onSubmit = () => {
      if (checkError()) {
         window.scrollTo(0, 0);
         return false;
      }

      console.log('전송!', data);

      // axios
      //    .post(`${process.env.NEXT_PUBLIC_API_URI}/meetings`, data, {
      //       headers: {
      //          Authorization: localStorage.getItem('AccessToken')
      //       }
      //    })
      //    .then(res => console.log('성공', res))
      //    .catch(err => console.log('에러', err));
   };

   return (
      <div>
         <CenterSection>
            <Title label="모임 만들기" />
            <SubTitle>지금 올라오는 모임</SubTitle>
            <Ul>
               <Li>
                  <LiTitle main="카테고리" sub="카테고리를 선택해주세요." error={categoryError} />
                  <Categorys category={category} setCategory={setCategory} />
               </Li>
               <Li>
                  <LiTitle main="제목" error={titleError} />
                  <Input
                     placeholder="모임 제목을 입력해주세요."
                     value={title}
                     onChange={e => setTitle(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="내용" error={contentError} />
                  <TextArea
                     placeholder="모임 내용을 입력해주세요."
                     value={content}
                     onChange={e => setContent(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="태그" sub="1개 이상 선택해주세요." error={tagError} />
                  <Tags tags={tags} onClickTag={onClickTag} />
               </Li>
               <Li>
                  <LiTitle main="위치" sub="최대 3개까지 선택이 가능 합니다." error={addressIdsError} />
                  <Location
                     location1={location1}
                     location2={location2}
                     onClickLocation1={onClickLocation1}
                     onClickLocation2={onClickLocation2}
                  />
               </Li>
               <Li>
                  <LiTitle
                     main="추가 주소 입력"
                     sub="개인 정보 보호를 위해 정확한 주소를 입력하지 마세요."
                     error={addressInfoError}
                  />
                  <Input
                     placeholder="예시) 스타벅스 근처 협의"
                     value={addressInfo}
                     onChange={e => setAddressInfo(e.target.value)}
                  />
               </Li>
               <Li>
                  <LiTitle main="날짜 설정" error={dateError} />
                  <DateRadio setDatePolicy={setDatePolicy} setPersonnel={setPersonnel} />
                  {datePolicy === 'ONE_DAY' && <OneDate date={date} setDate={setDate} dpSetting={dpSetting} />}
                  {datePolicy === 'PERIOD' && (
                     <PeriodDate
                        startDate={startDate}
                        endDate={endDate}
                        setStartDate={setStartDate}
                        setEndDate={setEndDate}
                        onCheckDayWeeks={onCheckDayWeeks}
                        dpSetting={dpSetting}
                     />
                  )}
                  {datePolicy === 'FREE' && <FreeDate dates={dates} setDates={setDates} dpSetting={dpSetting} />}
               </Li>
               <Li>
                  <LiTitle main="시간 설정" error={timeError} />
                  <Time startTime={startTime} endTime={endTime} setStartTime={setStartTime} setEndTime={setEndTime} />
               </Li>
               {datePolicy === 'FREE' && (
                  <Li>
                     <LiTitle main="최대 예약 가능 시간" error={maxTimeError} />
                     <NumberInput
                        type="number"
                        min={1}
                        max={
                           Number(new Date(endTime).toTimeString().slice(0, 2)) -
                           Number(new Date(startTime).toTimeString().slice(0, 2))
                        }
                        value={maxTime}
                        onChange={e => {
                           setMaxTime(Number(e.target.value));
                        }}
                     />
                  </Li>
               )}
               <Li>
                  <LiTitle main="인원수" error={personnelError} />
                  <NumberInput
                     type="number"
                     min={1}
                     value={personnel}
                     disabled={datePolicy === 'FREE' && true}
                     onChange={e => {
                        setPersonnel(Number(e.target.value));
                     }}
                  />
               </Li>
               <Li>
                  <LiTitle main="가격 설정" error={priceError} />
                  <Price datePolicy={datePolicy} price={price} setPrice={setPrice} />
               </Li>
               <Button size="bigBold" label="작성완료" onClick={onSubmit} />
            </Ul>
         </CenterSection>
      </div>
   );
};

export default Create;

const SubTitle = styled.p`
   margin: 25px 0 20px 0;
   font-size: 18px;
   font-weight: 700;
`;

const Ul = styled.ul`
   background-color: white;
   border-radius: 15px;
   box-shadow: 1px 1px 10px 1px #dfdfdf;
   padding: 50px 60px;
`;

const Li = styled.li`
   margin-bottom: 35px;

   /* datepicker custom */
   .react-datepicker {
      border: none;
      border-radius: 20px;
      font-family: inherit;
   }
   .react-datepicker-wrapper {
      width: 230px;
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
   .react-datepicker__day--today:hover {
      color: black;
   }
   .react-datepicker__day--selected {
      background-color: #d4e6ff !important;
      color: #6a6ff2 !important;
      border-radius: 50%;
   }
   .react-datepicker__day--outside-month {
      color: #9f9f9f;
   }
   .react-datepicker__day--keyboard-selected {
      background-color: inherit;
      color: black;
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
      width: 230px !important;
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
`;

export const Flex = styled.div`
   display: flex;
   align-items: center;
`;

export const RadioButtons = styled.div`
   margin-bottom: 15px;

   > label:not(:last-of-type) {
      margin-right: 20px;
   }
   > label > span {
      margin-right: 10px;
   }

   input[type='radio'],
   input[type='checkbox'] + label {
      margin-right: 5px;
      width: 1em;
      height: 1em;
      border: 1.5px solid gray;
   }
   input[type='radio']:hover,
   input[type='checkbox']:hover {
      box-shadow: 0 0 0 2px #dfdfdf;
   }

   input[type='radio'] {
      appearance: none;
      border-radius: 50%;
      transition: border 0.1s ease-in-out;
   }
   input[type='radio']:checked {
      border: 5px solid #444bff;
   }

   input[type='checkbox'] + label {
      width: 0.9em;
      height: 0.9em;
   }
   input[type='checkbox'] {
      display: none;
   }
   input[type='checkbox'] + label {
      display: inline-block;
      position: relative;
      border-radius: 3px;
      transition: background-color 0.1s ease-in-out;
   }
   input[type='checkbox']:checked + label {
      background-color: #444bff;
      border: 1.5px solid #444bff;
   }
   input[type='checkbox']:checked + label::after {
      content: '✔';
      position: absolute;
      left: 1px;
      top: -3px;
      color: white;
      font-size: 12px;
   }
`;

export const Wave = styled.span`
   margin: 0 15px;
`;

export const CustomDatePicker = styled(DatePicker)`
   background-color: #f5f5f5;
   padding: 10px 15px;
   border-radius: 5px;
   border: none;
   outline: none;
   cursor: pointer;
`;

const Input = styled.input`
   background-color: #f5f5f5;
   border-radius: 15px;
   width: 100%;
   padding: 20px;
   border: none;
   outline: none;
   font-family: inherit;
`;

const TextArea = styled.textarea`
   background-color: #f5f5f5;
   border-radius: 15px;
   width: 100%;
   height: 250px;
   padding: 20px;
   border: none;
   outline: none;
   resize: none;
   font-family: inherit;
`;

export const NumberInput = styled.input`
   background-color: #f5f5f5;
   border-radius: 5px;
   width: 100px;
   padding: 10px 15px;
   border: none;
   outline: none;
   font-family: inherit;

   &:disabled {
      background-color: #f0f0f0;
   }
`;
