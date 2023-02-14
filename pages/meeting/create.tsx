import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
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
import Location from '../../components/create/Location';
import { Button } from '../../components/common/Button';
import { useRouter } from 'next/router';
import { api } from '../../util/token';

const Create = () => {
   const router = useRouter();
   const API_URI = process.env.NEXT_PUBLIC_API_URI;

   const [category, setCategory] = useState('라이프스타일');
   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [tags, setTags] = useState<string[]>([]);
   const [maxTime, setMaxTime] = useState<number | string>(1);
   const [personnel, setPersonnel] = useState<number | string>(1);
   const [price, setPrice] = useState<number | string>(0);

   const [si, setSi] = useState('');
   const [gu, setGu] = useState<number[]>([]);
   const [addressPreview, setAddressPreview] = useState<string[]>([]);
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
   const [dateError, setDateError] = useState('');
   const [timeError, setTimeError] = useState('');
   const [maxTimeError, setMaxTimeError] = useState('');
   const [personnelError, setPersonnelError] = useState('');
   const [priceError, setPriceError] = useState('');

   const handleClickTag = (value: string) => {
      if (tags.includes(value)) {
         setTags([...tags.filter(tag => tag !== value)]);
      } else {
         setTags([...tags, value]);
      }
   };

   const handleClickSi = (value: string) => {
      setSi(value);
   };

   const handleClickGu = (id: number, name: string) => {
      if (gu.includes(id)) {
         setGu([...gu.filter(el => el !== id)]);
         setAddressPreview([...addressPreview.filter(el => el !== `${si} ${name}`)]);
      } else {
         if (gu.length >= 3) {
            alert('최대 3개까지 선택이 가능 합니다.');
            return;
         }

         setGu([...gu, id]);
         setAddressPreview([...addressPreview, `${si} ${name}`]);
      }
   };

   const handleCheckDayWeeks = (checkedDayWeeks: number) => {
      if (dayWeeks.includes(checkedDayWeeks)) {
         setDayWeeks([...dayWeeks.filter(dayWeek => dayWeek !== checkedDayWeeks)]);
      } else {
         setDayWeeks([...dayWeeks, checkedDayWeeks]);
      }
   };

   const dpSetting = {
      dateFormat: 'yyyy-MM-dd',
      dateFormatCalendar: 'yyyy.MM',
      withPortal: true
   };

   const data = {
      category,
      title,
      content,
      tags,
      address: { addressIds: gu, addressInfo },
      personnel: datePolicy === 'FREE' ? 1 : Number(personnel),
      price: Number(price),
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
         maxTime: Number(maxTime)
      }
   };

   const checkError = () => {
      setCategoryError('');
      setTitleError('');
      setContentError('');
      setTagError('');
      setAddressIdsError('');
      setDateError('');
      setTimeError('');
      setMaxTimeError('');
      setPersonnelError('');
      setPriceError('');

      if (category === '') {
         setCategoryError('카테고리를 선택해주세요.');
         return true;
      } else if (title === '') {
         setTitleError('제목을 입력해주세요.');
         return true;
      } else if (content === '') {
         setContentError('내용을 입력해주세요.');
         return true;
      } else if (tags.length < 1) {
         setTagError('1개 이상 선택해주세요.');
         return true;
      } else if (gu.length < 1) {
         setAddressIdsError('1개 이상 선택해주세요.');
         return true;
      } else if (datePolicy === 'ONE_DAY' && date === '') {
         setDateError('날짜를 선택해주세요.');
         return true;
      } else if (datePolicy === 'PERIOD') {
         if (startDate === '' || endDate === '') {
            setDateError('날짜를 선택해주세요.');
            return true;
         } else if (startDate === endDate) {
            setDateError('시작/종료 날짜가 동일합니다.');
            return true;
         } else if (dayWeeks.length < 1) {
            setDateError('요일을 1개 이상 선택해주세요.');
            return true;
         }
      } else if (datePolicy === 'FREE' && dates.length < 1) {
         setDateError('날짜를 1개 이상 선택해주세요.');
         return true;
      } else if (startTime === '' || endTime === '') {
         setTimeError('시간을 선택해주세요.');
         return true;
      } else if (startTime === endTime) {
         setTimeError('시작/종료 시간이 동일합니다.');
         return true;
      } else if (maxTime < 1) {
         setMaxTimeError('1시간 이상 입력해주세요.');
         return true;
      } else if (personnel < 1) {
         setPersonnelError('1명 이상 입력해주세요.');
         return true;
      } else if (price < 0) {
         setPriceError('0원 이상 입력해주세요.');
         return true;
      }

      return;
   };

   const onSubmit = () => {
      if (checkError()) {
         window.scrollTo(0, 0);
         return;
      }

      api.post(`${API_URI}/meetings`, data)
         .then(() => {
            router.push('/');
         })
         .catch(err => console.log('에러', err));
   };

   return (
      <div>
         <CenterSection>
            <Title marginBottom="20px" label="모임 만들기" />
            <Ul>
               <Li>
                  <LiTitle main="카테고리" sub="카테고리를 선택해주세요." error={categoryError} preview={category} />
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
                  <Tags tags={tags} handleClickTag={handleClickTag} />
               </Li>
               <Li>
                  <LiTitle
                     main="위치"
                     sub="최대 3개까지 선택이 가능 합니다."
                     error={addressIdsError}
                     preview={addressPreview.join(` , `)}
                  />
                  <Location si={si} gu={gu} handleClickSi={handleClickSi} handleClickGu={handleClickGu} />
               </Li>
               <Li>
                  <LiTitle main="추가 주소 입력" sub="개인 정보 보호를 위해 정확한 주소를 입력하지 마세요." />
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
                        handleCheckDayWeeks={handleCheckDayWeeks}
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
                           setMaxTime(e.target.value);
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
                        setPersonnel(e.target.value);
                     }}
                  />
               </Li>
               <Li>
                  <LiTitle main="가격 설정" error={priceError} />
                  <Price datePolicy={datePolicy} price={price} setPrice={setPrice} />
               </Li>
               <Button size="bigBold" label="작성 완료" onClick={onSubmit} />
            </Ul>
         </CenterSection>
      </div>
   );
};

export default Create;

export const Ul = styled.ul`
   background-color: white;
   border-radius: 15px;
   box-shadow: 1px 1px 10px 1px #dfdfdf;
   padding: 50px 60px;
`;

export const Li = styled.li`
   margin-bottom: 35px;

   /* datepicker custom */
   .react-datepicker {
      border: none;
      border-radius: 20px;
      font-family: inherit;
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

export const Flex = styled.div`
   display: flex;
   align-items: center;
`;

export const RadioButtons = styled.div`
   margin-bottom: 15px;

   > label {
      display: inline-flex;
      align-items: center;
   }
   > label:not(:last-of-type) {
      margin-right: 20px;
   }
   > label > span {
      margin-right: 10px;
   }

   input[type='radio'],
   input[type='checkbox'] + label {
      margin-right: 5px;
      border: 1.5px solid gray;
   }
   input[type='radio']:hover,
   input[type='checkbox']:hover {
      box-shadow: 0 0 0 2px #dfdfdf;
   }

   input[type='radio'] {
      width: 1em;
      height: 1em;
      appearance: none;
      border-radius: 50%;
      transition: border 0.1s ease-in-out;
   }
   input[type='radio']:checked {
      border: 5px solid #6a6ff2;
   }

   input[type='checkbox'] {
      display: none;
   }
   input[type='checkbox'] + label {
      width: 0.9em;
      height: 0.9em;
      display: inline-block;
      position: relative;
      border-radius: 3px;
      transition: background-color 0.1s ease-in-out;
   }
   input[type='checkbox']:checked + label {
      background-color: #6a6ff2;
      border: 1.5px solid #6a6ff2;
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

export const CustomDatePicker = styled(DatePicker)``;

export const Input = styled.input`
   background-color: #f5f5f5;
   border-radius: 15px;
   width: 100%;
   padding: 20px;
   border: none;
   outline: none;
   transition: outline 0.1s;
   :focus {
      outline: 2px solid #9093f3;
   }
`;

export const NumberInput = styled(Input)`
   width: 100px;
   padding: 12px 20px;

   :disabled {
      background-color: #f0f0f0;
   }
`;

export const TextArea = styled.textarea`
   background-color: #f5f5f5;
   border-radius: 15px;
   width: 100%;
   height: 250px;
   padding: 20px;
   resize: none;
   border: none;
   outline: none;
   transition: outline 0.1s;
   :focus {
      outline: 2px solid #9093f3;
   }
`;
