import axios from 'axios';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { qnaListState } from '../../atoms/qna/atom';
import { setSubDataObject } from '../../atoms/sub/atom';
import Qna from './Qna';

const QnaList = () => {
   const API_URI = process.env.NEXT_PUBLIC_API_URI;

   const { meetingId } = useRecoilValue(setSubDataObject);
   const [qnaList, setQnaList] = useRecoilState(qnaListState);
   useEffect(() => {
      axios
         .get(`${API_URI}/meetings/${meetingId}/qna`)
         .then(res => {
            setQnaList(res.data);
         })
         .catch(err => console.log('에러', err));
   }, []);

   return <>{qnaList && qnaList.map(qna => <Qna qna={qna} key={qna.questionId} />)}</>;
};

export default QnaList;
