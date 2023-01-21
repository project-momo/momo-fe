import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { qnaListState } from '../../atoms/qna/atom';
import { setSubDataObject } from '../../atoms/sub/atom';
import IconCommentAdd from './../../assets/images/icon_cmment_add.svg';

interface QnaInputType {
   type: string;
   qid?: number;
}

const QnaInput = ({ type, qid }: QnaInputType) => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;

   const { meetingId } = useRecoilValue(setSubDataObject);

   const url =
      type === 'question'
         ? `${API_URI}/meetings/${meetingId}/questions`
         : `${API_URI}/meetings/${meetingId}/questions/${qid}/answers`;

   const setQnaList = useSetRecoilState(qnaListState);
   const [content, setContent] = useState('');

   const onSubmit = () => {
      if (content === '') {
         if (type === 'question') alert('질문 내용을 입력해주세요.');
         else alert('답변 내용을 입력해주세요.');
         return;
      }

      axios
         .post(url, { content })
         .then(res => {
            setQnaList(res.data);
            setContent('');
         })
         .catch(err => console.log('에러', err));
   };

   return (
      <InputWarp>
         <Input
            placeholder={type === 'question' ? '궁금한 것이 있다면 질문을 남겨주세요.' : '답변을 남겨주세요.'}
            value={content}
            onChange={e => setContent(e.target.value)}
            onKeyDown={e => {
               if (e.code === 'Enter') onSubmit();
            }}
            type={type}
         />
         <SubmitBtn onClick={onSubmit} type2={type}>
            <Image src={IconCommentAdd} alt="commentAdd" />
         </SubmitBtn>
      </InputWarp>
   );
};

export default QnaInput;

const InputWarp = styled.div`
   position: relative;
`;
const Input = styled.input<{ type: string }>`
   width: 100%;
   padding: ${props => (props.type === 'question' ? '20px 30px' : '10px 20px')};
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
const SubmitBtn = styled.button<{ type2: string }>`
   width: ${props => (props.type2 === 'question' ? '35px' : '28px')};
   height: ${props => (props.type2 === 'question' ? '35px' : '28px')};
   border-radius: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   right: 12px;
   top: ${props => (props.type2 === 'question' ? '12px' : '6px')};
   background-color: white;
   box-shadow: 0px 1px 3px rgba(68, 75, 255, 0.15);

   img {
      width: 25px;
      height: 25px;
   }
`;
