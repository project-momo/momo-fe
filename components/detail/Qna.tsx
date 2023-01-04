import { useState } from 'react';
import styled from 'styled-components';
import UserImage from './../../assets/images/userimg.svg';
import IconModify from './../../assets/images/icon_mdify.svg';
import IconDelete from './../../assets/images/icon_delete.svg';
import { QnaType } from './QnaList';
import { useRecoilValue } from 'recoil';
import { myProfile } from '../../atoms/mypage/atoms';
import QnaInput from './QnaInput';

interface QnaCompoType {
   qna: QnaType;
}

const Qna = ({ qna }: QnaCompoType) => {
   const [toggleWriteAnswer, settoggleWriteAnswer] = useState(false);

   return (
      <QnaUl>
         <FirstLi>
            <FirstList>
               <User>
                  <UserImg userimg={UserImage}>userImg</UserImg>
                  <UserName>{qna.questioner.nickname}</UserName>
                  <Time>{new Date(qna.createdAt).toLocaleString()}</Time>
               </User>
               <Comment>{qna.content}</Comment>
            </FirstList>
            <SecondUl>
               {qna.answers && (
                  <>
                     {qna.answers.map(answer => (
                        <CommentWarp key={answer.answerId}>
                           <User>
                              <UserImg userimg={UserImage}>userImg</UserImg>
                              <UserName>{answer.answerer.nickname}</UserName>
                              <Time>{new Date(answer.createdAt).toLocaleString()}</Time>
                           </User>
                           <Comment>{answer.content}</Comment>
                        </CommentWarp>
                     ))}
                     <WriteAnswerBtn onClick={() => settoggleWriteAnswer(!toggleWriteAnswer)}>답변 작성</WriteAnswerBtn>
                     {toggleWriteAnswer && <QnaInput type="answer" />}
                  </>
               )}
            </SecondUl>
         </FirstLi>
      </QnaUl>
   );
};

export default Qna;

const QnaUl = styled.ul``;
const FirstLi = styled.li`
   margin-bottom: 10px;
`;
const CommentWarp = styled.li`
   margin-bottom: 8px;
`;
const FirstList = styled.div`
   margin-bottom: 8px;
`;
const User = styled.div`
   display: flex;
   align-items: center;
`;
const UserImg = styled.span<{ userimg: string }>`
   font-size: 0;
   width: 25px;
   height: 25px;
   background-image: url(${p => `${p.userimg}`});
   background-size: cover;
`;
const UserName = styled.p`
   font-size: 14px;
   font-weight: 400;
   margin: 0 7px;
`;
const Time = styled.span`
   font-size: 10px;
   color: #767676;
`;
const Comment = styled.div`
   display: inline-block;
   padding: 8px 15px;
   background-color: #f0f0f0;
   border-radius: 30px;
   font-size: 14px;
   margin-left: 25px;
`;

const SecondUl = styled.ul`
   margin-left: 45px;
`;

const Icon = styled.button<{ buttonImg: string }>`
   font-size: 0;
   padding: 0;
   width: 16px;
   height: 16px;
   background-image: url(${p => `${p.buttonImg}`});
   background-size: cover;
   background-repeat: none;
   margin-left: 10px;
`;

const WriteAnswerBtn = styled.button`
   margin-bottom: 8px;
   font-size: 12px;
   color: #767676;
`;