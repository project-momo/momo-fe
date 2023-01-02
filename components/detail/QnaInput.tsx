import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import IconCommentAdd from './../../assets/images/icon_cmment_add.svg';

const QnaInput = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meeting_id = 1;

   const [question, setQuestion] = useState('');

   const onSubmit = () => {
      if (question === '') {
         alert('질문 내용을 입력해주세요.');
         return;
      }

      console.log('전송!', question);

      axios
         .post(
            `${API_URI}/meetings/${meeting_id}/questions`,
            { content: question },
            {
               headers: {
                  Authorization: localStorage.getItem('AccessToken')
               }
            }
         )
         .then(res => console.log('성공', res))
         .catch(err => console.log('에러', err));
   };

   return (
      <InputWarp>
         <Input
            placeholder="궁금한 것이 있다면 질문을 남겨주세요."
            value={question}
            onChange={e => setQuestion(e.target.value)}
            onKeyDown={e => {
               if (e.code === 'Enter') onSubmit();
            }}
         />
         <SubmitBtn onClick={onSubmit}>
            <img src={IconCommentAdd} />
         </SubmitBtn>
      </InputWarp>
   );
};

export default QnaInput;

const InputWarp = styled.div`
   position: relative;
`;
const Input = styled.input`
   width: 100%;
   padding: 20px 30px;
   background-color: #f0f0f0;
   font-size: 14px;
   border-radius: 30px;
   border: none;
   outline: none;
   transition: outline 0.1s;
   :focus {
      outline: 2px solid #9093f3;
   }
   ::placeholder {
      color: #717171;
   }
`;
const SubmitBtn = styled.button`
   width: 35px;
   height: 35px;
   border-radius: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   right: 12px;
   top: 12px;
   background-color: white;
   box-shadow: 0px 1px 3px rgba(68, 75, 255, 0.15);

   img {
      width: 25px;
      height: 25px;
   }
`;
