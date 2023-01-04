import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { qnaListState } from '../../atoms/qna/atom';
import Qna from './Qna';

export interface QnaType {
   questionId: number;
   content: string;
   questioner: QuestionerType;
   createdAt: string;
   modifiedAt: string;
   answers: AnswerType[];
}

interface QuestionerType {
   userId: number;
   email: string;
   nickname: string;
   imageUrl: null;
}

interface AnswerType {
   answerId: number;
   content: string;
   answerer: AnswererType;
   createdAt: string;
   modifiedAt: string;
}

interface AnswererType {
   userId: number;
   email: string;
   nickname: string;
   imageUrl: null;
}

const QnaList = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;
   const meeting_id = 3;

   const [qnaList, setQnaList] = useRecoilState(qnaListState);

   useEffect(() => {
      axios
         .get(`${API_URI}/meetings/${meeting_id}/qna`, {
            headers: {
               Authorization: localStorage.getItem('AccessToken')
            }
         })
         .then(res => {
            console.log('성공', res);
            setQnaList(res.data);
         })
         .catch(err => console.log('에러', err));
   }, []);

   return <>{qnaList && qnaList.map(qna => <Qna qna={qna} key={qna.questionId} />)}</>;
};

export default QnaList;