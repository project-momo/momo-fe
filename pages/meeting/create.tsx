import { Title } from '../../components/common/Title';
import { CenterSection } from '../../styles/style';
import styled from 'styled-components';
import { Button } from '../../stories/Button';
import { useEffect, useState, useRef } from 'react';
// date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

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
    dates: string[];
  };
  priceInfo: {
    pricePolicy: string;
    price: number;
  };
  notice: string;
}

const Create = () => {
  const oneDateRef = useRef<HTMLDivElement>(null);
  const periodDateRef = useRef<HTMLDivElement>(null);
  const freeDateRef = useRef<HTMLDivElement>(null);

  const hourPriceRef = useRef<HTMLInputElement>(null);
  const onePriceRef = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState('라이프스타일');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [pricePolicy, setPricePolicy] = useState('');
  const [hourPrice, setHourPrice] = useState(0);
  const [onePrice, setOnePrice] = useState(0);
  const [notice, setNotice] = useState('');

  const [datePolicy, setDatePolicy] = useState('ONE_DAY');
  const [date, setDate] = useState<any>(new Date());
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(startDate);
  const [dayWeeks, setDayWeeks] = useState<number[]>([]);
  const [dates, setDates] = useState<any>([]);
  const [startTime, setStartTime] = useState<any>(
    new Date().setHours(0, 0, 0, 0),
  );
  const [endTime, setEndTime] = useState<any>(new Date().setHours(0, 0, 0, 0));

  useEffect(() => {
    console.log('카테고리', category);
    console.log('타이틀', title);
    console.log('내용', content);
    console.log('태그', tags);
    console.log('주소', address1, address2);
    console.log('일정 설정', datePolicy);
    console.log('하루 일정', date);
    console.log('정기 일정', startDate, endDate);
    console.log('요일', dayWeeks);
    console.log('자유 일정', dates);
    console.log('시간', startTime, endTime);
    console.log('가격 설정', pricePolicy);
    console.log('가격', hourPrice);
    console.log('가격', onePrice);

    console.log('전달사항', notice);
  }, [
    category,
    title,
    content,
    tags,
    address1,
    address2,
    datePolicy,
    date,
    startDate,
    endDate,
    dayWeeks,
    dates,
    startTime,
    endTime,
    pricePolicy,
    hourPrice,
    onePrice,
    notice,
  ]);

  // 태그
  const onClickTag = (selectedTag: string) => {
    if (tags.includes(selectedTag)) {
      setTags([...tags.filter((tag) => tag !== selectedTag)]);
    } else {
      setTags([...tags, selectedTag]);
    }
  };

  // 날짜
  useEffect(() => {
    if (!oneDateRef.current) return;
    if (!periodDateRef.current) return;
    if (!freeDateRef.current) return;

    if (datePolicy === 'ONE_DAY') {
      oneDateRef.current.style.display = 'block';
      periodDateRef.current.style.display = 'none';
      freeDateRef.current.style.display = 'none';
    }
    if (datePolicy === 'PERIOD') {
      oneDateRef.current.style.display = 'none';
      periodDateRef.current.style.display = 'block';
      freeDateRef.current.style.display = 'none';
    }
    if (datePolicy === 'FREE') {
      oneDateRef.current.style.display = 'none';
      periodDateRef.current.style.display = 'none';
      freeDateRef.current.style.display = 'block';
    }
  }, [datePolicy]);

  const onCheckDayWeeks = (checkedDayWeeks: number) => {
    if (dayWeeks.includes(checkedDayWeeks)) {
      setDayWeeks([
        ...dayWeeks.filter((dayWeek) => dayWeek !== checkedDayWeeks),
      ]);
    } else {
      setDayWeeks([...dayWeeks, checkedDayWeeks]);
    }
  };

  // 가격
  const onDisabled = (value: any) => {
    if (!hourPriceRef.current) return;
    if (!onePriceRef.current) return;

    if (value === 'HOUR') {
      hourPriceRef.current.disabled = false;
      onePriceRef.current.disabled = true;
    } else {
      hourPriceRef.current.disabled = true;
      onePriceRef.current.disabled = false;
    }
  };

  return (
    <div>
      <CenterSection>
        <Title label="모임 만들기" />
        <SubTitle>지금 올라오는 모임</SubTitle>
        <Ul>
          <Li>
            <ContentTitle>
              <span>카테고리</span>
              <span>카테고리를 선택해주세요</span>
            </ContentTitle>
            <Categorys>
              <li
                onClick={() => setCategory('라이프스타일')}
                className={category === '라이프스타일' ? 'selected' : ''}
              >
                라이프스타일
              </li>
              <li
                onClick={() => setCategory('디자인')}
                className={category === '디자인' ? 'selected' : ''}
              >
                디자인
              </li>
              <li
                onClick={() => setCategory('미디어')}
                className={category === '미디어' ? 'selected' : ''}
              >
                미디어
              </li>
              <li
                onClick={() => setCategory('개발')}
                className={category === '개발' ? 'selected' : ''}
              >
                개발
              </li>
              <li
                onClick={() => setCategory('교육')}
                className={category === '교육' ? 'selected' : ''}
              >
                교육
              </li>
              <li
                onClick={() => setCategory('금융')}
                className={category === '금융' ? 'selected' : ''}
              >
                금융
              </li>
              <li
                onClick={() => setCategory('소셜')}
                className={category === '소셜' ? 'selected' : ''}
              >
                소셜
              </li>
              <li
                onClick={() => setCategory('인공지능')}
                className={category === '인공지능' ? 'selected' : ''}
              >
                인공지능
              </li>
            </Categorys>
          </Li>
          <Li>
            <ContentTitle>
              <span>제목</span>
            </ContentTitle>
            <Input
              placeholder="모임 제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Li>
          <Li>
            <ContentTitle>
              <span>내용</span>
            </ContentTitle>
            <TextArea
              placeholder="모임 내용을 입력해주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Li>
          <Li>
            <ContentTitle>
              <span>태그</span>
              <span>1개 이상 선택 해주세요.</span>
            </ContentTitle>
            <Tags>
              <li
                onClick={() => onClickTag('멘토링')}
                className={tags.includes('멘토링') ? 'selected' : ''}
              >
                멘토링
              </li>
              <li
                onClick={() => onClickTag('온라인')}
                className={tags.includes('온라인') ? 'selected' : ''}
              >
                온라인
              </li>
              <li
                onClick={() => onClickTag('오프라인모임')}
                className={tags.includes('오프라인모임') ? 'selected' : ''}
              >
                오프라인모임
              </li>
              <li
                onClick={() => onClickTag('스터디')}
                className={tags.includes('스터디') ? 'selected' : ''}
              >
                스터디
              </li>
              <li
                onClick={() => onClickTag('모임')}
                className={tags.includes('모임') ? 'selected' : ''}
              >
                모임
              </li>
              <li
                onClick={() => onClickTag('5인이상')}
                className={tags.includes('5인이상') ? 'selected' : ''}
              >
                5인이상
              </li>
            </Tags>
          </Li>
          <Li>
            <ContentTitle>
              <span>위치</span>
              <span>최대 3개까지 입력이 가능 합니다.</span>
            </ContentTitle>
            <Input
              placeholder="임시 테스트용"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
            />
          </Li>
          <Li>
            <ContentTitle>
              <span>추가 주소 입력</span>
              <span>개인 정보 보호를 위해 정확한 주소를 입력하지 마세요.</span>
            </ContentTitle>
            <Input
              placeholder="예시) 스타벅스 근처 협의"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
            />
          </Li>
          <Li>
            <ContentTitle>
              <span>날짜 설정</span>
            </ContentTitle>
            <RadioButtons>
              <label>
                <input
                  type="radio"
                  name="schedule"
                  value="ONE_DAY"
                  defaultChecked
                  onChange={(e) => {
                    setDatePolicy(e.target.value);
                  }}
                />
                하루 일정
              </label>
              <label>
                <input
                  type="radio"
                  name="schedule"
                  value="PERIOD"
                  onChange={(e) => {
                    setDatePolicy(e.target.value);
                  }}
                />
                정기 일정
              </label>
              <label>
                <input
                  type="radio"
                  name="schedule"
                  value="FREE"
                  onChange={(e) => {
                    setDatePolicy(e.target.value);
                  }}
                />
                자유 일정
              </label>
            </RadioButtons>
            {/* 하루 일정 */}
            <div ref={oneDateRef}>
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                withPortal
                selected={date}
                onChange={(selectedDate) => setDate(selectedDate)}
              />
            </div>
            {/* 정기 일정 */}
            <div ref={periodDateRef}>
              <DateFlex>
                <CustomDatePicker
                  locale={ko}
                  dateFormat="yyyy-MM-dd"
                  minDate={new Date()}
                  withPortal
                  selectsStart
                  selected={startDate}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(selectedDate) => {
                    setStartDate(selectedDate);
                  }}
                />
                <Wave>~</Wave>
                <CustomDatePicker
                  locale={ko}
                  dateFormat="yyyy-MM-dd"
                  minDate={startDate}
                  withPortal
                  selectsEnd
                  selected={endDate}
                  startDate={startDate}
                  endDate={endDate}
                  onChange={(selectedDate) => {
                    setEndDate(selectedDate);
                  }}
                />
              </DateFlex>
              <RadioButtons>
                <label>
                  <input
                    type="checkbox"
                    value="1"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  월
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="2"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  화
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="3"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  수
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="4"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  목
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="5"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  금
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="6"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  토
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="7"
                    onChange={(e) => onCheckDayWeeks(Number(e.target.value))}
                  />
                  일
                </label>
              </RadioButtons>
            </div>
            {/* 자유 일정 */}
            <div ref={freeDateRef}>
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
                withPortal
                shouldCloseOnSelect={false}
                highlightDates={[...dates]}
                selected={dates[0]}
                onChange={(selectedDate) => {
                  // if (dates.includes(selectedDate)) {
                  //   setDates([
                  //     ...dates.filter(
                  //       (date: Date | null) => date !== selectedDate,
                  //     ),
                  //   ]);
                  // } else {
                  setDates([...dates, selectedDate]);
                  // }
                }}
              />
            </div>
          </Li>
          <Li>
            <ContentTitle>
              <span>시간 설정</span>
            </ContentTitle>
            <Flex>
              <CustomDatePicker
                locale={ko}
                dateFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="시작 시간"
                selected={startTime}
                onChange={(selectedDate) => {
                  setStartTime(selectedDate);
                }}
              />
              <Wave>~</Wave>
              <CustomDatePicker
                locale={ko}
                dateFormat="HH:mm"
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={60}
                timeCaption="종료 시간"
                selected={endTime}
                onChange={(selectedDate) => {
                  setEndTime(selectedDate);
                }}
              />
            </Flex>
          </Li>
          <Li>
            <ContentTitle>
              <span>가격 설정</span>
            </ContentTitle>
            <RadioButtons>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="HOUR"
                  defaultChecked
                  onChange={(e) => {
                    setPricePolicy(e.target.value);
                    onDisabled(e.target.value);
                  }}
                />
                시간당 가격
                <PriceInput
                  type="number"
                  ref={hourPriceRef}
                  value={hourPrice}
                  onChange={(e) => setHourPrice(Number(e.target.value))}
                />
              </label>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="DAY"
                  onChange={(e) => {
                    setPricePolicy(e.target.value);
                    onDisabled(e.target.value);
                  }}
                />
                하루당 가격
                <PriceInput
                  type="number"
                  disabled
                  ref={onePriceRef}
                  value={Number(onePrice)}
                  onChange={(e) => setOnePrice(Number(e.target.value))}
                />
              </label>
            </RadioButtons>
          </Li>
          <Li>
            <ContentTitle>
              <span>전달사항</span>
            </ContentTitle>
            <Input
              placeholder="모임 신청 전 전달 해야 할 사항이 있다면 적어 주세요."
              value={notice}
              onChange={(e) => {
                setNotice(e.target.value);
              }}
            />
          </Li>
          <Button disabled size="bigBold" label="작성완료" />
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
`;

const Flex = styled.div`
  display: flex;
  align-items: center;

  .react-datepicker-wrapper {
    width: 192px;
  }
`;

const DateFlex = styled(Flex)`
  margin-bottom: 15px;
`;

const ContentTitle = styled.div`
  margin-bottom: 20px;
  > span:nth-child(1) {
    font-weight: 700;
  }
  > span:nth-child(2) {
    margin-left: 20px;
  }
`;

const Categorys = styled.ul`
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  flex-wrap: wrap;
  > li {
    width: 50%;
    margin: 8px 0;
    cursor: pointer;
    &.selected {
      color: #444bff;
    }
  }
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

const Tags = styled.ul`
  background-color: #f0f0f0;
  border-radius: 15px;
  padding: 20px 30px;
  display: flex;
  > li {
    padding: 7px 12px;
    border-radius: 15px;
    cursor: pointer;
    &.selected {
      background-color: #d4e6ff;
      color: #6a6ff2;
    }
  }
  > li:not(:last-child) {
    margin-right: 15px;
  }
`;

const RadioButtons = styled.div`
  margin-bottom: 15px;
  > label:not(:last-of-type) {
    margin-right: 25px;
  }
  input {
    margin-right: 5px;
  }
`;

const Wave = styled.span`
  margin: 0 15px;
`;

const PriceInput = styled.input`
  background-color: #f5f5f5;
  border-radius: 5px;
  width: 100px;
  padding: 10px 15px;
  margin-left: 10px;
  border: none;
  outline: none;
  font-family: inherit;

  &:disabled {
    background-color: #f0f0f0;
  }
`;

const CustomDatePicker = styled(DatePicker)`
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`;
