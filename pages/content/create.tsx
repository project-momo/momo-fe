import { Title } from '../../components/common/Title';
import { CenterSectionr, ContentLayout, GrayLayout } from '../../styles/style';
import styled from 'styled-components';
import { Button } from '../../stories/Button';
import { useEffect, useState } from 'react';

const Create = () => {
  const [category, setCategory] = useState('라이프스타일');
  const [tags, setTags] = useState<string[]>([]);

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
  const now = new Date();
  const [startScheduleForm, setStartScheduleForm] = useState({
    year: now.getFullYear().toString(),
    month: now.getMonth().toString(),
    day: now.getDay().toString(),
  });
  const [endScheduleForm, setEndScheduleForm] = useState({
    year: now.getFullYear().toString(),
    month: now.getMonth().toString(),
    day: now.getDay().toString(),
  });

  let years = [];
  for (let y = now.getFullYear(); y <= now.getFullYear() + 10; y++) {
    years.push(y.toString());
  }

  let months = [];
  for (let m = 1; m <= 12; m++) {
    if (m < 10) {
      months.push('0' + m.toString());
    } else {
      months.push(m.toString());
    }
  }

  let days = [];
  let date = new Date(
    Number(startScheduleForm.year),
    Number(startScheduleForm.month),
    0,
  ).getDate();
  for (let d = 1; d <= date; d++) {
    if (d < 10) {
      days.push('0' + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  useEffect(() => {
    console.log('카테고리', category);
    console.log('태그', tags);
    console.log('시작 날짜', startScheduleForm);
    console.log('종료 날짜', endScheduleForm);
  }, [category, tags, startScheduleForm]);

  return (
    <GrayLayout>
      <ContentLayout>
        <CenterSectionr>
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
                <span>
                  개인 정보 보호를 위해 정확한 주소를 입력하지 마세요.
                </span>
              </ContentTitle>
              <Input placeholder="예시) 스타벅스 근처 협의" />
            </Li>
            <Li>
              <ContentTitle>
                <span>날짜 설정</span>
              </ContentTitle>
              <RadioButtons>
                <label>
                  <input type="radio" name="schedule" id="one" /> 하루 일정
                </label>
                <label>
                  <input type="radio" name="schedule" id="regular" /> 정기 일정
                </label>
                <label>
                  <input type="radio" name="schedule" id="free" /> 자유 일정
                </label>
              </RadioButtons>
              {/* 하루 일정 */}
            </Li>
            <Li>
              <ContentTitle>
                <span>시간 설정</span>
              </ContentTitle>
              <SelectsContainer>
                <Selects>
                  <select>
                    <option value="2022">17:00</option>
                  </select>
                </Selects>
                <Wave>~</Wave>
                <Selects>
                  <select>
                    <option value="23">18:00</option>
                  </select>
                </Selects>
              </SelectsContainer>
            </Li>
            <Li>
              <ContentTitle>
                <span>가격 설정</span>
              </ContentTitle>
              <RadioButtons>
                <label>
                  <input type="radio" name="price" id="one" /> 시간당 가격
                  <PriceInput />
                </label>
                <label>
                  <input type="radio" name="price" id="regular" /> 당일 모임
                  가격
                  <PriceInput />
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
        </CenterSectionr>
      </ContentLayout>
    </GrayLayout>
  );
};

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
`;

const SelectsContainer = styled.div`
  display: flex;
`;

const Selects = styled.div`
  > select {
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 5px;
    border: none;
  }
  > select:not(:last-child) {
    margin-right: 15px;
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
`;

export default Create;
