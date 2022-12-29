import { Title } from '../../components/common/Title';
import { CenterSectionr, ContentLayout, GrayLayout } from '../../styles/style';
import styled from 'styled-components';
import { Button } from '../../stories/Button';

const Create = () => {
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
                        <li>라이프스타일</li>
                        <li>디자인</li>
                        <li>미디어</li>
                        <li>개발</li>
                        <li>교육</li>
                        <li>금융</li>
                        <li>소셜</li>
                        <li>인공지능</li>
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
                        <Tag>멘토링</Tag>
                        <Tag>온라인</Tag>
                        <Tag>오프라인모임</Tag>
                        <Tag>스터디</Tag>
                        <Tag>모임</Tag>
                        <Tag>5인이상</Tag>
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
                           <input type="radio" name="schedule" id="one" checked /> 하루 일정
                        </label>
                        <label>
                           <input type="radio" name="schedule" id="regular" /> 정기 일정
                        </label>
                        <label>
                           <input type="radio" name="schedule" id="free" /> 자유 일정
                        </label>
                     </RadioButtons>
                     <Selects>
                        <Select>
                           <option value="2022">2022</option>
                        </Select>
                        <Select>
                           <option value="12">12</option>
                        </Select>
                        <Select>
                           <option value="23">23</option>
                        </Select>
                     </Selects>
                  </Li>
                  <Li>
                     <ContentTitle>
                        <span>시간 설정</span>
                     </ContentTitle>
                     <Selects>
                        <Select>
                           <option value="2022">17:00</option>
                        </Select>
                        <Wave>~</Wave>
                        <Select>
                           <option value="23">18:00</option>
                        </Select>
                     </Selects>
                  </Li>
                  <Li>
                     <ContentTitle>
                        <span>가격 설정</span>
                     </ContentTitle>
                     <RadioButtons>
                        <label>
                           <input type="radio" name="price" id="one" checked /> 시간당 가격
                           <PriceInput />
                        </label>
                        <label>
                           <input type="radio" name="price" id="regular" /> 당일 모임 가격
                           <PriceInput />
                        </label>
                     </RadioButtons>
                  </Li>
                  <Li>
                     <ContentTitle>
                        <span>전달사항</span>
                        <span>개인 정보 보호를 위해 정확한 주소를 입력하지 마세요.</span>
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
   padding: 30px;
   display: flex;
   flex-wrap: wrap;
   li {
      width: 50%;
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
   > li:not(:last-child) {
      margin-right: 15px;
   }
`;

const Tag = styled.li`
   cursor: pointer;
`;

const RadioButtons = styled.div`
   margin-bottom: 15px;
   > label:not(:last-of-type) {
      margin-right: 25px;
   }
`;

const Selects = styled.div`
   > select:not(:last-child) {
      margin-right: 15px;
   }
`;

const Select = styled.select`
   background-color: #f5f5f5;
   padding: 5px;
   border-radius: 5px;
   border: none;
`;

const Wave = styled.span`
   margin-right: 15px;
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
