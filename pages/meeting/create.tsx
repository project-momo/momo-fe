import styled from 'styled-components';
import { useEffect, useState, useCallback } from 'react';
import { Title } from '../../components/common/Title';
import { CenterSection } from '../../styles/style';
import { Button } from '../../stories/Button';
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

export interface MeetingType {
  category: string;
  title: string;
  content: string;
  tags: string[];
  location: { address1: string; address2: string }[];
  dateTime: {
    datepolicy: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    maxTime: number;
    dayWeeks: number[];
    dates: string[];
  };
  price: number;
  personnel: number;
  notice: string;
}

const Create = () => {
  const [category, setCategory] = useState('라이프스타일');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [personnel, setPersonnel] = useState(1);
  const [notice, setNotice] = useState('');

  const [location1, setLocaton1] = useState('');
  const [location2, setLocaton2] = useState<string[]>([]);
  const [address1, setAddress1] = useState<string[]>([]);
  const [address2, setAddress2] = useState('');

  const [datePolicy, setDatePolicy] = useState('ONE_DAY');
  const [date, setDate] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(startDate);
  const [dayWeeks, setDayWeeks] = useState<number[]>([]);
  const [dates, setDates] = useState<Date[] | []>([]);
  const [startTime, setStartTime] = useState<any>(
    new Date().setHours(0, 0, 0, 0),
  );
  const [endTime, setEndTime] = useState<any>(new Date().setHours(0, 0, 0, 0));
  const [maxTimeRange, setMaxTimeRange] = useState<number[]>([]);
  const [maxTime, setMaxTime] = useState(1);

  const [pricePolicy, setPricePolicy] = useState('HOUR');
  const [hourPrice, setHourPrice] = useState(0);
  const [onePrice, setOnePrice] = useState(0);

  const onClickTag = (value: string) => {
    if (tags.includes(value)) {
      setTags([...tags.filter((tag) => tag !== value)]);
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
      setLocaton2([...location2.filter((el) => el !== value)]);
      setAddress1([...address1.filter((el) => el.slice(3) !== value)]);
    } else {
      setLocaton2([...location2, value]);
      setAddress1([...address1, `${location1} ${value}`]);
    }
  };

  const onCheckDayWeeks = (checkedDayWeeks: number) => {
    if (dayWeeks.includes(checkedDayWeeks)) {
      setDayWeeks([
        ...dayWeeks.filter((dayWeek) => dayWeek !== checkedDayWeeks),
      ]);
    } else {
      setDayWeeks([...dayWeeks, checkedDayWeeks]);
    }
  };

  useEffect(() => {
    setMaxTimeRange([]);

    for (
      let i = 1;
      i <=
      Number(new Date(endTime).toTimeString().slice(0, 2)) -
        Number(new Date(startTime).toTimeString().slice(0, 2));
      i++
    ) {
      setMaxTimeRange([...maxTimeRange, i]);
    }
  }, [startTime, endTime]);

  const data = {
    category,
    title,
    content,
    tags,
    locations: { address1, address2 },
    personnel,
    priceInfo: {
      pricePolicy,
      price: pricePolicy === 'HOUR' ? hourPrice : onePrice,
    },
    notice,
    dateTimes: {
      datePolicy,
      startDate:
        datePolicy === 'ONE_DAY' || datePolicy === 'PERIOD'
          ? datePolicy === 'ONE_DAY'
            ? new Date(date).toISOString().slice(0, 10)
            : new Date(startDate).toISOString().slice(0, 10)
          : dates
              .map((date) => new Date(date).toISOString().slice(0, 10))
              .sort(
                (a, b) =>
                  Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')),
              )[0],
      endDate:
        datePolicy === 'ONE_DAY' || datePolicy === 'PERIOD'
          ? datePolicy === 'ONE_DAY'
            ? new Date(date).toISOString().slice(0, 10)
            : new Date(endDate).toISOString().slice(0, 10)
          : dates
              .map((date) => new Date(date).toISOString().slice(0, 10))
              .sort(
                (a, b) =>
                  Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')),
              )[dates.length - 1],
      startTime: new Date(startTime).toTimeString().slice(0, 8),
      endTime: new Date(endTime).toTimeString().slice(0, 8),
      dayWeeks,
      dates: dates
        .map((date) => new Date(date).toISOString().slice(0, 10))
        .sort(
          (a, b) =>
            Number(a.replaceAll('-', '')) - Number(b.replaceAll('-', '')),
        ),
      maxTime,
    },
  };

  const onSubmit = () => {
    console.log('전송!', data);

    // axios.post('/meetings', data);
  };

  return (
    <div>
      <CenterSection>
        <Title label="모임 만들기" />
        <SubTitle>지금 올라오는 모임</SubTitle>
        <Ul>
          <Li>
            <LiTitle main="카테고리" sub="카테고리를 선택해주세요." />
            <Categorys category={category} setCategory={setCategory} />
          </Li>
          <Li>
            <LiTitle main="제목" />
            <Input
              placeholder="모임 제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle main="내용" />
            <TextArea
              placeholder="모임 내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle main="태그" sub="1개 이상 선택 해주세요." />
            <Tags tags={tags} onClickTag={onClickTag} />
          </Li>
          <Li>
            <LiTitle main="위치" sub="최대 3개까지 입력이 가능 합니다." />
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
            />
            <Input
              placeholder="예시) 스타벅스 근처 협의"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Li>
          <Li>
            <LiTitle main="날짜 설정" />
            <DateRadio setDatePolicy={setDatePolicy} />
            {datePolicy === 'ONE_DAY' && (
              <OneDate date={date} setDate={setDate} />
            )}
            {datePolicy === 'PERIOD' && (
              <PeriodDate
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                onCheckDayWeeks={onCheckDayWeeks}
              />
            )}
            {datePolicy === 'FREE' && (
              <FreeDate dates={dates} setDates={setDates} />
            )}
          </Li>
          <Li>
            <LiTitle main="시간 설정" />
            <Time
              startTime={startTime}
              endTime={endTime}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
            />
          </Li>
          {datePolicy === 'FREE' && (
            <Li>
              <LiTitle main="최대 예약 가능 시간" />
              <Select
                onChange={(e) => {
                  setMaxTime(Number(e.target.value));
                }}
              >
                {maxTimeRange.map((el) => (
                  <option key={el} value={el}>
                    {el}
                  </option>
                ))}
              </Select>
            </Li>
          )}
          <Li>
            <LiTitle main="인원수" />
            <NumberInput
              type="number"
              value={datePolicy === 'FREE' ? 1 : personnel}
              disabled={datePolicy === 'FREE' && true}
              onChange={(e) => {
                setPersonnel(Number(e.target.value));
              }}
            />
          </Li>
          <Li>
            <LiTitle main="가격 설정" />
            <Price
              setPricePolicy={setPricePolicy}
              hourPrice={hourPrice}
              onePrice={onePrice}
              setHourPrice={setHourPrice}
              setOnePrice={setOnePrice}
            />
          </Li>
          <Li>
            <LiTitle main="전달사항" />
            <Input
              placeholder="모임 신청 전 전달 해야 할 사항이 있다면 적어 주세요."
              value={notice}
              onChange={(e) => {
                setNotice(e.target.value);
              }}
            />
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
    width: 192.5px;
  }
  .react-datepicker__header {
    background-color: #6a6ff2;
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
    border-radius: 50%;
  }
  .react-datepicker__day--today:hover {
    color: black;
  }
  .react-datepicker__day--selected {
    background-color: #d4e6ff !important;
    color: #6a6ff2 !important;
    font-weight: 600 !important;
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
    border-radius: 50%;
  }
  .react-datepicker__day--in-selecting-range {
    background-color: #d4e6ff;
    color: black;
    border-radius: 50%;
  }

  .react-datepicker__day--highlighted {
    background-color: #d4e6ff !important;
    color: #6a6ff2;
    font-weight: 600 !important;
    border-radius: 50%;
  }

  .react-datepicker__time-container,
  .react-datepicker__time-box {
    width: 192.5px !important;
    border: 1px solid #f5f5f5;
  }
  .react-datepicker__header--time {
    padding: 10px 20px;
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
    color: #6a6ff2 !important;
    font-weight: 600 !important;
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
    border: 4.5px solid #6a6ff2;
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
    background-color: #6a6ff2;
  }
  input[type='checkbox']:checked + label::after {
    content: '✔';
    position: absolute;
    left: 2px;
    top: -2px;
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

const Select = styled.select`
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 100px;
  padding: 10px 15px;
  border: none;
  outline: none;
  font-family: inherit;
`;
