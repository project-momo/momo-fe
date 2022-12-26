import { Title } from '../../components/common/Title';
import { CenterSection } from '../../styles/style';
import styled from 'styled-components';
import { Button } from '../../stories/Button';
import { useEffect, useState, useRef, useCallback } from 'react';
// date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const Create = () => {
  const oneDateRef = useRef<HTMLDivElement>(null);
  const regularDateRef = useRef<HTMLDivElement>(null);
  const freeDateRef = useRef<HTMLDivElement>(null);

  const timePriceRef = useRef<HTMLInputElement>(null);
  const dayPriceRef = useRef<HTMLInputElement>(null);

  const [category, setCategory] = useState('라이프스타일');
  const [tags, setTags] = useState<string[]>([]);

  const [datePolicy, setDatePolicy] = useState('one');
  const [date, setDate] = useState<any>(new Date());
  const [startDate, setStartDate] = useState<any>(new Date());
  const [endDate, setEndDate] = useState<any>(startDate);
  const [dates, setDates] = useState<any>([new Date()]);

  const [startTime, setStartTime] = useState<any>(
    new Date().setHours(0, 0, 0, 0),
  );
  const [endTime, setEndTime] = useState<any>(new Date().setHours(0, 0, 0, 0));

  // 카테고리
  const onClickCategory = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

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
    if (!regularDateRef.current) return;
    if (!freeDateRef.current) return;

    if (datePolicy === 'one') {
      oneDateRef.current.style.display = 'block';
      regularDateRef.current.style.display = 'none';
      freeDateRef.current.style.display = 'none';
    }
    if (datePolicy === 'regular') {
      oneDateRef.current.style.display = 'none';
      regularDateRef.current.style.display = 'block';
      freeDateRef.current.style.display = 'none';
    }
    if (datePolicy === 'free') {
      oneDateRef.current.style.display = 'none';
      regularDateRef.current.style.display = 'none';
      freeDateRef.current.style.display = 'block';
    }
  }, [datePolicy]);

  // 가격
  const onDisabled = (value: any) => {
    if (!dayPriceRef.current) return;
    if (!timePriceRef.current) return;

    if (value === 'time') {
      timePriceRef.current.disabled = false;
      dayPriceRef.current.disabled = true;
      dayPriceRef.current.value = '';
    } else {
      timePriceRef.current.disabled = true;
      dayPriceRef.current.disabled = false;
      timePriceRef.current.value = '';
    }
  };

  useEffect(() => {
    console.log('카테고리', category);
    console.log('태그', tags);
    console.log('하루 일정', date);
    console.log('정기 일정', [startDate, endDate]);
    console.log('자유 일정', dates);
    console.log('시간', startTime, endTime);
  }, [category, tags, date, startDate, endDate, dates, startTime, endTime]);

  return (
    <>
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
                onClick={() => onClickCategory('라이프스타일')}
                className={category === '라이프스타일' ? 'selected' : ''}
              >
                라이프스타일
              </li>
              <li
                onClick={() => onClickCategory('디자인')}
                className={category === '디자인' ? 'selected' : ''}
              >
                디자인
              </li>
              <li
                onClick={() => onClickCategory('미디어')}
                className={category === '미디어' ? 'selected' : ''}
              >
                미디어
              </li>
              <li
                onClick={() => onClickCategory('개발')}
                className={category === '개발' ? 'selected' : ''}
              >
                개발
              </li>
              <li
                onClick={() => onClickCategory('교육')}
                className={category === '교육' ? 'selected' : ''}
              >
                교육
              </li>
              <li
                onClick={() => onClickCategory('금융')}
                className={category === '금융' ? 'selected' : ''}
              >
                금융
              </li>
              <li
                onClick={() => onClickCategory('소셜')}
                className={category === '소셜' ? 'selected' : ''}
              >
                소셜
              </li>
              <li
                onClick={() => onClickCategory('인공지능')}
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
            <Input placeholder="모임 제목을 입력해주세요." />
          </Li>
          <Li>
            <ContentTitle>
              <span>내용</span>
            </ContentTitle>
            <TextArea placeholder="모임 내용을 입력해주세요." />
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
          </Li>
          <Li>
            <ContentTitle>
              <span>추가 주소 입력</span>
              <span>개인 정보 보호를 위해 정확한 주소를 입력하지 마세요.</span>
            </ContentTitle>
            <Input placeholder="예시) 스타벅스 근처 협의" />
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
                  value="one"
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
                  value="regular"
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
                  value="free"
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
            <div ref={regularDateRef}>
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
                  <input type="checkbox" />월
                </label>
                <label>
                  <input type="checkbox" />화
                </label>
                <label>
                  <input type="checkbox" />수
                </label>
                <label>
                  <input type="checkbox" />목
                </label>
                <label>
                  <input type="checkbox" />금
                </label>
                <label>
                  <input type="checkbox" />토
                </label>
                <label>
                  <input type="checkbox" />일
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
                  if (dates.includes(selectedDate)) {
                    setDates([
                      ...dates.filter(
                        (date: Date | null) => date !== selectedDate,
                      ),
                    ]);
                  } else {
                    setDates([...dates, selectedDate]);
                  }
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
                className="timepicker"
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
                className="timepicker"
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
                  value="time"
                  defaultChecked
                  onChange={(e) => onDisabled(e.target.value)}
                />
                시간당 가격
                <PriceInput type="number" ref={timePriceRef} />
              </label>
              <label>
                <input
                  type="radio"
                  name="price"
                  value="day"
                  onChange={(e) => onDisabled(e.target.value)}
                />
                당일 모임 가격
                <PriceInput type="number" disabled ref={dayPriceRef} />
              </label>
            </RadioButtons>
          </Li>
          <Li>
            <ContentTitle>
              <span>전달사항</span>
            </ContentTitle>
            <Input placeholder="모임 신청 전 전달 해야 할 사항이 있다면 적어 주세요." />
          </Li>
          <Button disabled size="bigBold" label="작성완료" />
        </Ul>
      </CenterSection>
    </>
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
