import { useRecoilValue } from 'recoil';
import { qnaListState } from '../../atoms/qna/atom';
import Qna from './Qna';

const QnaList = () => {
   const qnaList = useRecoilValue(qnaListState);

   return <>{qnaList && qnaList.map(qna => <Qna qna={qna} key={qna.questionId} />)}</>;
};

export default QnaList;
